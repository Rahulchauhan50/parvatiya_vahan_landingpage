import { motion } from "motion/react";
import { Check } from "lucide-react";
export default function AppTeaser() {
  const features = [
    { title: "User + Owner Apps", desc: "Separate interfaces for passengers and drivers with clear workflows." },
    { title: "Live Tracking & SOS", desc: "Real-time trip visibility and emergency assistance during mountain travel." },
    { title: "Flexible Payments", desc: "UPI, wallet, and cash support for practical use in low-connectivity zones." },
    { title: "Driver Empowerment", desc: "Designed to improve driver dignity, earnings clarity, and local market access." },
  ];

  return (
    <section id="app-teaser" className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-on-background mb-6 tracking-tight">Introducing PAVAN</h2>
              <p className="text-base sm:text-lg text-on-background/70 leading-relaxed max-w-xl">
                The Parvatiya App for Vehicle-Assistance & Navigation. A localized digital mobility ecosystem built for Himalayan terrain, local operators, and community-first transport.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 md:mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-tertiary-container rounded-full p-1 mt-1 shrink-0">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background">{f.title}</h4>
                    <p className="text-sm text-on-background/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-fit primary-cta-gradient text-white px-10 py-4 rounded-xl font-bold font-headline shadow-xl hover:-translate-y-1 transition-all">
              Explore PAVAN
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-87.5 sm:h-112.5 lg:h-auto"
          >
            <div className="absolute inset-0 bg-primary-container rounded-4xl transform rotate-3 scale-95 opacity-20"></div>
            <div className="relative h-full w-full bg-surface-container-highest rounded-4xl overflow-hidden flex items-center justify-center p-8 border border-on-background/5">
              <img 
                alt="App Mockup" 
                className="max-w-[85%] rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
                referrerPolicy="no-referrer"
                src="/assets/app_mockup.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
