import { motion } from "motion/react";
import { useEffect, useRef, useState, FormEvent } from "react";
import { MapPin, Users, Phone, Mail, User } from "lucide-react";
import { type MouseEvent } from "react";

type PlaceSuggestion = {
  placeId: string;
  text: string;
};

type LocationField = "source" | "destination";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    source: "",
    destination: "",
    seats: "1"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<LocationField | null>(null);
  const [suggestions, setSuggestions] = useState<Record<LocationField, PlaceSuggestion[]>>({
    source: [],
    destination: [],
  });
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState<Record<LocationField, boolean>>({
    source: false,
    destination: false,
  });
  const debounceRef = useRef<Record<LocationField, ReturnType<typeof setTimeout> | null>>({
    source: null,
    destination: null,
  });
  const requestIdRef = useRef<Record<LocationField, number>>({
    source: 0,
    destination: 0,
  });

  useEffect(() => {
    return () => {
      if (debounceRef.current.source) {
        clearTimeout(debounceRef.current.source);
      }
      if (debounceRef.current.destination) {
        clearTimeout(debounceRef.current.destination);
      }
    };
  }, []);

  const fetchLocationSuggestions = (field: LocationField, value: string) => {
    const normalized = value.trim();

    if (debounceRef.current[field]) {
      clearTimeout(debounceRef.current[field]);
      debounceRef.current[field] = null;
    }

    if (normalized.length < 3) {
      setIsLoadingSuggestions((prev) => ({ ...prev, [field]: false }));
      setSuggestions((prev) => ({ ...prev, [field]: [] }));
      return;
    }

    setIsLoadingSuggestions((prev) => ({ ...prev, [field]: true }));
    const requestId = requestIdRef.current[field] + 1;
    requestIdRef.current[field] = requestId;

    debounceRef.current[field] = setTimeout(async () => {
      try {
        const response = await fetch(`/api/places-autocomplete?input=${encodeURIComponent(normalized)}`);
        const payload = await response.json();

        if (requestId !== requestIdRef.current[field]) {
          return;
        }

        if (response.ok && payload?.success && Array.isArray(payload?.predictions)) {
          setSuggestions((prev) => ({
            ...prev,
            [field]: payload.predictions,
          }));
        } else {
          setSuggestions((prev) => ({ ...prev, [field]: [] }));
        }
      } catch {
        if (requestId !== requestIdRef.current[field]) {
          return;
        }
        setSuggestions((prev) => ({ ...prev, [field]: [] }));
      } finally {
        if (requestId === requestIdRef.current[field]) {
          setIsLoadingSuggestions((prev) => ({ ...prev, [field]: false }));
        }
      }
    }, 250);
  };

  const handleLocationChange = (field: LocationField, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setActiveField(field);
    fetchLocationSuggestions(field, value);
  };

  const selectLocation = (field: LocationField, suggestion: PlaceSuggestion) => {
    setFormData((prev) => ({ ...prev, [field]: suggestion.text }));
    setSuggestions((prev) => ({ ...prev, [field]: [] }));
    setActiveField(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/book-ride', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const raw = await response.text();
      let payload: { success?: boolean; message?: string } | null = null;
      if (raw) {
        try {
          payload = JSON.parse(raw);
        } catch {
          payload = null;
        }
      }

      if (!response.ok || !payload?.success) {
        const apiMessage = payload?.message;
        throw new Error(apiMessage || `Request failed with status ${response.status}.`);
      }

      alert('Booking request submitted! We have emailed you and our admin team.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        source: '',
        destination: '',
        seats: '1',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong';
      alert(`Unable to submit booking: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };



    const handleNavClick = (targetId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
  
      const section = document.querySelector(targetId);
      if (section) {
        const headerOffset = 96;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
  
    };
  
  


  return (
    <section id="home" className="relative min-h-212.5 lg:h-212.5 flex items-center overflow-hidden pt-24 pb-16 lg:py-0">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Himalayan Road" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
          src='../assets/char_dham_yatra_bg.png'
        />
        <div className="absolute inset-0 hero-gradient bg-black/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 text-white border border-primary/30 text-[0.6875rem] font-bold uppercase tracking-widest">
              PARVATIYA VAHAN SAMARTHAN SAMITI | Uttarakhand
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-headline font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Navigate the Himalayas with <span className="text-[#ffb59c]">Confidence & Care.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-body mb-8 md:mb-10 leading-relaxed opacity-90 max-w-xl">
              Safe transport for mountain communities, pilgrims, and businesses. We combine local driver expertise, welfare advocacy, and digital tools to keep every route connected.
            </p>
            <div className="sm:flex flex-col sm:flex-row gap-4">
              {/* <button className="primary-cta-gradient text-white px-8 py-4 rounded-lg font-bold font-headline text-base shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all">
                Support Our Cause
              </button> */}
              <a onClick={handleNavClick('#app-teaser')} href="#app-teaser" className="border-2 cursor-pointer border-tertiary-container text-tertiary-fixed bg-tertiary-container/10 backdrop-blur-md px-4 md:px-8 py-4 rounded-lg font-bold font-headline md:text-base text-sm hover:bg-tertiary-container/20 hover:scale-105 transition-all">
                Learn About the PAVAN App
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl transition-transform hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-headline font-bold text-white mb-6">Book Your Mountain Transit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Source (e.g. Dehradun)"
                    required
                    autoComplete="off"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formData.source}
                    onChange={(e) => handleLocationChange("source", e.target.value)}
                    onFocus={() => setActiveField("source")}
                    onBlur={() => {
                      window.setTimeout(() => {
                        setActiveField((prev) => (prev === "source" ? null : prev));
                      }, 120);
                    }}
                  />
                  {activeField === "source" && (isLoadingSuggestions.source || suggestions.source.length > 0) && (
                    <div className="absolute top-full mt-2 z-30 w-full bg-inverse-surface border border-white/15 rounded-xl shadow-2xl overflow-hidden">
                      {isLoadingSuggestions.source && (
                        <div className="px-4 py-3 text-sm text-white/70">Searching locations...</div>
                      )}
                      {!isLoadingSuggestions.source &&
                        suggestions.source.map((item) => (
                          <button
                            key={item.placeId}
                            type="button"
                            className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => selectLocation("source", item)}
                          >
                            {item.text}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Destination (e.g. Mussoorie)"
                    required
                    autoComplete="off"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formData.destination}
                    onChange={(e) => handleLocationChange("destination", e.target.value)}
                    onFocus={() => setActiveField("destination")}
                    onBlur={() => {
                      window.setTimeout(() => {
                        setActiveField((prev) => (prev === "destination" ? null : prev));
                      }, 120);
                    }}
                  />
                  {activeField === "destination" &&
                    (isLoadingSuggestions.destination || suggestions.destination.length > 0) && (
                      <div className="absolute top-full mt-2 z-30 w-full bg-inverse-surface border border-white/15 rounded-xl shadow-2xl overflow-hidden">
                        {isLoadingSuggestions.destination && (
                          <div className="px-4 py-3 text-sm text-white/70">Searching locations...</div>
                        )}
                        {!isLoadingSuggestions.destination &&
                          suggestions.destination.map((item) => (
                            <button
                              key={item.placeId}
                              type="button"
                              className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => selectLocation("destination", item)}
                            >
                              {item.text}
                            </button>
                          ))}
                      </div>
                    )}
                </div>
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                <select
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                  value={formData.seats}
                  onChange={(e) => setFormData({...formData, seats: e.target.value})}
                >
                  <option value="1" className="bg-inverse-surface">1 Seat</option>
                  <option value="2" className="bg-inverse-surface">2 Seats</option>
                  <option value="3" className="bg-inverse-surface">3 Seats</option>
                  <option value="4" className="bg-inverse-surface">4 Seats</option>
                  <option value="5+" className="bg-inverse-surface">5+ Seats</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer primary-cta-gradient text-white py-4 rounded-xl font-bold font-headline text-lg shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all mt-4"
              >
                {isSubmitting ? 'Sending...' : 'Book Ride Now'}
              </button>
              <p className="text-center text-white/40 text-xs mt-4">
                By booking, you agree to our safety protocols and mountain transit terms.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
