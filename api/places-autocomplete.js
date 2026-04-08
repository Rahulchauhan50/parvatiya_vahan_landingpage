const GOOGLE_MAPS_API_KEY =
  process.env.GOOGLE_MAPS_API_KEY ||
  process.env.GOOGLE_PLACES_API_KEY ||
  process.env.GOOGLE_MAPS_SERVER_API_KEY;

const MIN_PLACES_RADIUS_METERS = 1;
const MAX_PLACES_RADIUS_METERS = 50000;

const rawBiasRadius = Number(process.env.UTTARAKHAND_BIAS_RADIUS_METERS || 120000);
const safeBiasRadius = Number.isFinite(rawBiasRadius)
  ? Math.min(MAX_PLACES_RADIUS_METERS, Math.max(MIN_PLACES_RADIUS_METERS, rawBiasRadius))
  : MAX_PLACES_RADIUS_METERS;

const UTTARAKHAND_BIAS = {
  latitude: Number(process.env.UTTARAKHAND_BIAS_LAT || 30.3165),
  longitude: Number(process.env.UTTARAKHAND_BIAS_LNG || 78.0322),
  radiusMeters: safeBiasRadius,
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }

  const input = String(req.query?.input ?? '').trim();

  if (input.length < 3 || !GOOGLE_MAPS_API_KEY) {
    return res.status(200).json({
      success: true,
      predictions: [],
    });
  }

  try {
    const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask':
          'suggestions.placePrediction.placeId,suggestions.placePrediction.text.text',
      },
      body: JSON.stringify({
        input,
        languageCode: 'en',
        includedRegionCodes: ['in'],
        locationBias: {
          circle: {
            center: {
              latitude: UTTARAKHAND_BIAS.latitude,
              longitude: UTTARAKHAND_BIAS.longitude,
            },
            radius: UTTARAKHAND_BIAS.radiusMeters,
          },
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Places autocomplete failed:', errorText);
      return res.status(200).json({
        success: true,
        predictions: [],
      });
    }

    const data = await response.json();
    const predictions = (data.suggestions ?? [])
      .map((suggestion) => suggestion.placePrediction)
      .filter(Boolean)
      .map((placePrediction) => ({
        placeId: placePrediction.placeId,
        text: placePrediction.text?.text ?? '',
      }))
      .filter((item) => item.text)
      .slice(0, 5);

    return res.status(200).json({
      success: true,
      predictions,
    });
  } catch (error) {
    console.error('Places autocomplete error:', error);
    return res.status(200).json({
      success: true,
      predictions: [],
    });
  }
}
