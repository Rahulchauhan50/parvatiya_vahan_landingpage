import { motion } from "motion/react";
import { Eye, Target, ArrowRight } from "lucide-react";

export default function VisionMission() {
  const blocks = [
    {
      title: "Our Vision",
      description:
        "To become the most trusted and innovative mobility network in hill regions by making remote communities reliably reachable for markets, healthcare, education, and safe travel.",
      icon: <Eye className="w-8 h-8" />,
      accent: "from-primary/20 to-primary/5",
    },
    {
      title: "Our Mission",
      description:
        "To build a reliable and technology-enabled mobility ecosystem that empowers drivers, enhances passenger safety, and supports sustainable livelihood opportunities.",
      icon: <Target className="w-8 h-8" />,
      accent: "from-tertiary-container/40 to-tertiary-container/10",
    },
  ];

  return (
    <section id="vision-mission" className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-headline text-[0.6875rem] font-bold uppercase tracking-widest text-primary mb-4 block">
            Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-on-background tracking-tight">
            Vision & Mission
          </h2>
          <p className="text-on-background/70 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Our purpose is long-term: strengthen Himalayan mobility by balancing safety,
            dignity, and economic opportunity for mountain communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {blocks.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative overflow-hidden rounded-2xl border border-on-background/10 bg-surface p-7 md:p-9 shadow-sm"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.accent} pointer-events-none`}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/70 border border-on-background/10 text-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-background mb-4">
                  {item.title}
                </h3>
                <p className="text-on-background/75 text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  <span>Community First</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
