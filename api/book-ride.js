import { Resend } from 'resend';

const BRAND = {
  name: 'Parvatiya Vahan Samarthan Samiti',
  shortName: 'PVSS',
  tagline: 'Empowering Mountain Drivers Across the Himalayas',
  teamName: 'Parvatiya Vahan Team',
  logoUrl: process.env.BRAND_LOGO_URL || '',
  fromEmail: process.env.MAIL_FROM || 'onboarding@resend.dev',
  adminEmail: process.env.ADMIN_EMAIL || '',
  primary: '#1a56db',
  primaryDark: '#1e3a8a',
  primaryLight: '#3b82f6',
  accent: '#f59e0b',
  success: '#10b981',
  bg: '#eef2ff',
  cardBg: '#ffffff',
  border: '#c7d2fe',
  text: '#0f172a',
  muted: '#64748b',
  subtle: '#f8fafc',
};

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getLogoMarkup() {
  if (!BRAND.logoUrl) {
    return `
      <div style="display:inline-block;background:rgba(255,255,255,0.18);border:2px solid rgba(255,255,255,0.4);border-radius:16px;padding:10px 22px;margin:0 auto 14px auto;">
        <span style="font-size:22px;font-weight:800;letter-spacing:2px;color:#ffffff;text-shadow:0 2px 8px rgba(0,0,0,0.18);">&#127956; PVSS</span>
      </div>
    `;
  }
  return `
    <div style="margin:0 auto 16px auto;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.15);border:3px solid rgba(255,255,255,0.5);overflow:hidden;">
      <img src="${escapeHtml(BRAND.logoUrl)}" alt="${escapeHtml(BRAND.name)} Logo" width="72" height="72"
        style="display:block;width:72px;height:72px;object-fit:cover;border-radius:50%;" />
    </div>
  `;
}

function getMountainDivider() {
  return `
    <div style="text-align:center;margin:20px 0;line-height:1;">
      <span style="color:#c7d2fe;font-size:11px;letter-spacing:3px;">&#9679;&nbsp;&nbsp;&#9679;&nbsp;&nbsp;&#9679;</span>
    </div>
  `;
}

function getHeader(title, subtitle) {
  subtitle = subtitle || '';
  return `
    <div style="background:linear-gradient(135deg, ${BRAND.primaryDark} 0%, ${BRAND.primary} 50%, ${BRAND.primaryLight} 100%);border-radius:20px 20px 0 0;overflow:hidden;">
      <div style="height:4px;background:linear-gradient(90deg, ${BRAND.accent}, #fbbf24, ${BRAND.accent});"></div>
      <div style="padding:36px 32px 28px 32px;text-align:center;">
        ${getLogoMarkup()}
        <h1 style="margin:0 0 6px 0;font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;text-shadow:0 2px 12px rgba(0,0,0,0.2);">${title}</h1>
        ${subtitle ? '<p style="margin:0;font-size:13px;color:rgba(255,255,255,0.8);letter-spacing:0.5px;">' + subtitle + '</p>' : ''}
        <p style="margin:10px 0 0 0;font-size:12px;color:rgba(255,255,255,0.65);letter-spacing:1px;text-transform:uppercase;">${escapeHtml(BRAND.name)}</p>
      </div>
    </div>
  `;
}

function getFooter() {
  const fromEmail = escapeHtml(BRAND.fromEmail);
  return `
    <div style="margin-top:28px;border-top:1px solid ${BRAND.border};padding-top:20px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td style="text-align:center;">
            <p style="margin:0 0 6px 0;font-size:14px;font-weight:700;color:${BRAND.primary};">&#127956; ${escapeHtml(BRAND.name)}</p>
            <p style="margin:0 0 4px 0;font-size:12px;color:${BRAND.muted};">${escapeHtml(BRAND.tagline)}</p>
            <p style="margin:0 0 4px 0;font-size:12px;color:${BRAND.muted};">
              &#x2709;&nbsp;<a href="mailto:${fromEmail}" style="color:${BRAND.primaryLight};text-decoration:none;">${fromEmail}</a>
            </p>
            <p style="margin:12px 0 0 0;font-size:11px;color:#94a3b8;">
              &copy; ${new Date().getFullYear()} ${escapeHtml(BRAND.name)}. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function getBookingDetailsTable(safe) {
  const rows = [
    { icon: '&#128100;', label: 'Passenger Name', value: safe.name },
    { icon: '&#128222;', label: 'Phone Number', value: safe.phone },
    { icon: '&#9993;', label: 'Email Address', value: safe.email },
    { icon: '&#128205;', label: 'Pickup Location', value: safe.source },
    { icon: '&#127937;', label: 'Destination', value: safe.destination },
    { icon: '&#128189;', label: 'Seats Required', value: safe.seats },
  ];

  const rowMarkup = rows
    .map(function(row, i) {
      return `
        <tr style="background:${i % 2 === 0 ? BRAND.subtle : '#ffffff'};">
          <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;width:40%;vertical-align:middle;">
            <span style="font-size:15px;margin-right:8px;">${row.icon}</span>
            <span style="font-weight:600;color:${BRAND.muted};font-size:13px;">${row.label}</span>
          </td>
          <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:${BRAND.text};font-size:14px;font-weight:500;">${row.value}</td>
        </tr>
      `;
    })
    .join('');

  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
      style="border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(30,58,138,0.07);">
      ${rowMarkup}
    </table>
  `;
}

function getAdminEmailHtml(safe) {
  return '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>' +
    '<body style="margin:0;padding:0;background:' + BRAND.bg + ';font-family:\'Segoe UI\',Arial,sans-serif;color:' + BRAND.text + ';">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;padding:24px 16px;">' +
    '<tr><td>' +
    getHeader('&#128203; New Booking Received', '&mdash; Action Required &mdash;') +
    '<div style="background:' + BRAND.cardBg + ';border:1px solid ' + BRAND.border + ';border-top:none;border-radius:0 0 20px 20px;padding:28px 28px 24px;">' +
    '<div style="background:linear-gradient(135deg,#fef3c7,#fde68a);border:1px solid #f59e0b;border-radius:12px;padding:12px 16px;margin-bottom:20px;">' +
    '<p style="margin:0;font-size:14px;font-weight:700;color:#92400e;">&#128276; New Ride Booking Request</p>' +
    '<p style="margin:3px 0 0 0;font-size:12px;color:#b45309;">A customer is waiting for confirmation. Please review and follow up promptly.</p>' +
    '</div>' +
    '<p style="margin:0 0 16px 0;font-size:15px;color:' + BRAND.muted + ';line-height:1.6;">The following booking request was submitted through the PVSS website. Review the details and contact the passenger to confirm.</p>' +
    '<h2 style="margin:0 0 12px 0;font-size:16px;font-weight:700;color:' + BRAND.primary + ';text-transform:uppercase;letter-spacing:0.5px;">&#128203; Booking Details</h2>' +
    getBookingDetailsTable(safe) +
    getMountainDivider() +
    '<p style="margin:0;font-size:13px;color:' + BRAND.muted + ';line-height:1.6;">Please reach out to the passenger at <strong style="color:' + BRAND.text + ';">' + safe.phone + '</strong> to confirm their booking at the earliest convenience.</p>' +
    getFooter() +
    '</div>' +
    '</td></tr>' +
    '</table>' +
    '</body>' +
    '</html>';
}

function getUserThankYouEmailHtml(safe) {
  return '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>' +
    '<body style="margin:0;padding:0;background:' + BRAND.bg + ';font-family:\'Segoe UI\',Arial,sans-serif;color:' + BRAND.text + ';">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;padding:24px 16px;">' +
    '<tr><td>' +
    getHeader('Thank You, ' + safe.name + '! &#127956;', 'Your booking request has been received') +
    '<div style="background:' + BRAND.cardBg + ';border:1px solid ' + BRAND.border + ';border-top:none;border-radius:0 0 20px 20px;padding:28px 28px 24px;">' +
    '<div style="background:linear-gradient(135deg,#d1fae5,#a7f3d0);border:1px solid #6ee7b7;border-radius:12px;padding:14px 18px;margin-bottom:22px;text-align:center;">' +
    '<p style="margin:0;font-size:24px;">&#10004;&#65039;</p>' +
    '<p style="margin:6px 0 0 0;font-size:15px;font-weight:700;color:#065f46;">Booking Request Confirmed!</p>' +
    '<p style="margin:4px 0 0 0;font-size:13px;color:#047857;">We\'ve received your request and will be in touch shortly.</p>' +
    '</div>' +
    '<p style="margin:0 0 14px 0;font-size:15px;color:' + BRAND.muted + ';line-height:1.7;">Thank you for choosing <strong style="color:' + BRAND.primary + ';">Parvatiya Vahan Samarthan Samiti</strong> for your Himalayan journey.</p>' +
    '<div style="background:linear-gradient(135deg,#fff7ed,#ffedd5);border:1px solid #fed7aa;border-radius:12px;padding:14px 18px;margin:0 0 22px 0;">' +
    '<p style="margin:0;font-size:13px;font-weight:700;color:#9a3412;">&#128222; What Happens Next?</p>' +
    '<p style="margin:6px 0 0 0;font-size:13px;color:#c2410c;line-height:1.6;">Our team will call you at <strong>' + safe.phone + '</strong> within the next few hours to confirm your ride details.</p>' +
    '</div>' +
    '<h2 style="margin:0 0 12px 0;font-size:16px;font-weight:700;color:' + BRAND.primary + ';text-transform:uppercase;letter-spacing:0.5px;">&#128203; Your Booking Summary</h2>' +
    getBookingDetailsTable(safe) +
    getMountainDivider() +
    '<div style="background:' + BRAND.subtle + ';border-left:4px solid ' + BRAND.primary + ';border-radius:0 10px 10px 0;padding:12px 16px;margin:0 0 8px 0;">' +
    '<p style="margin:0;font-size:13px;color:' + BRAND.muted + ';line-height:1.6;">&#128221; <strong>Need changes?</strong> Simply reply to this email and our team will update your booking promptly.</p>' +
    '</div>' +
    getFooter() +
    '</div>' +
    '</td></tr>' +
    '</table>' +
    '</body>' +
    '</html>';
}

// ─── Vercel Serverless Handler ────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({ success: false, message: 'Server email configuration is missing. Please contact support.' });
  }

  const { name, phone, email, source, destination, seats } = req.body ?? {};

  if (!name || !phone || !email || !source || !destination || !seats) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const safe = {
    name: escapeHtml(name),
    phone: escapeHtml(phone),
    email: escapeHtml(email),
    source: escapeHtml(source),
    destination: escapeHtml(destination),
    seats: escapeHtml(seats),
  };

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const adminResult = await resend.emails.send({
      from: BRAND.name + ' <' + BRAND.fromEmail + '>',
      to: [BRAND.adminEmail],
      subject: '🏔️ New Ride Booking — ' + name + ' | PVSS',
      html: getAdminEmailHtml(safe),
    });

    if (adminResult.error) {
      throw new Error('Admin email failed: ' + adminResult.error.message);
    }

    const userResult = await resend.emails.send({
      from: BRAND.name + ' <' + BRAND.fromEmail + '>',
      to: [email],
      subject: '✅ Booking Confirmed — Thank you, ' + name + '! | PVSS',
      html: getUserThankYouEmailHtml(safe),
    });

    if (userResult.error) {
      throw new Error('User confirmation email failed: ' + userResult.error.message);
    }

    return res.status(200).json({ success: true, message: 'Booking request sent successfully.' });
  } catch (error) {
    console.error('Mail send failed:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email. Please try again later.',
    });
  }
}
