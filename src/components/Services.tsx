import { motion } from "motion/react";
import { Truck, ShieldCheck, MountainSnow, HeartHandshake } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Goods & Cargo Transport",
      desc: "Reliable movement of essentials, farm produce, and retail supplies between remote hill villages and urban markets."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Safety-First Mountain Transit",
      desc: "Trained local drivers, terrain-aware routing, and strict safety protocols for high-altitude and high-risk routes."
    },
    {
      icon: <MountainSnow className="w-8 h-8" />,
      title: "Construction & Off-road Logistics",
      desc: "Specialized fleet support for construction materials, equipment movement, and hard-to-reach project sites."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Yatra & Tourism Support",
      desc: "Assisted mobility for Char Dham pilgrims and dependable transport support for hotels, homestays, and local operators."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-on-background tracking-tight">Core Service Portfolio</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-highest p-8 rounded-xl border border-on-background/5 hover:-translate-y-2 transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                {s.icon}
              </div>
              <h3 className="text-xl font-headline font-bold text-on-background mb-4">{s.title}</h3>
              <p className="text-on-background/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
