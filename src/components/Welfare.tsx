import { motion } from "motion/react";
import { Shield, HeartHandshake, Gavel, CheckCircle, Landmark } from "lucide-react";

export default function Welfare() {
  return (
    <section id="causes" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-inverse-surface rounded-3xl p-6 sm:p-10 md:p-16 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center">
             <Landmark className="w-48 h-48 md:w-64 md:h-64" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold mb-10 md:mb-12 tracking-tight">Our Causes: Driver Welfare & Road Safety</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4">
                <Shield className="text-tertiary-fixed w-10 h-10" />
                <h4 className="text-2xl font-bold">Safety First</h4>
                <p className="text-slate-300">Road safety awareness, accident prevention campaigns, protective gear distribution, and emergency response readiness.</p>
              </div>
              
              <div className="space-y-4">
                <HeartHandshake className="text-tertiary-fixed w-10 h-10" />
                <h4 className="text-2xl font-bold">Community Support</h4>
                <p className="text-slate-300">Assistance for accident-affected families, Char Dham help for vulnerable travelers, and youth engagement for traffic discipline.</p>
              </div>
              
              <div className="space-y-4">
                <Gavel className="text-tertiary-fixed w-10 h-10" />
                <h4 className="text-2xl font-bold">Rights & Growth</h4>
                <p className="text-slate-300">Legal aid, fair-work advocacy, policy dialogue, and continuous driver skill development for long-term dignity and growth.</p>
              </div>
            </div>
            
            <div className="mt-12 md:mt-16 flex flex-wrap gap-4 sm:gap-8 items-center border-t border-white/10 pt-10 md:pt-12">
              <div className="bg-tertiary-container/20 border border-tertiary-container px-4 sm:px-6 py-3 rounded-full flex items-center gap-3">
                <CheckCircle className="text-tertiary-fixed w-5 h-5" />
                <span className="text-tertiary-fixed font-bold uppercase tracking-widest text-[10px] sm:text-xs">NGO Darpan Verified</span>
              </div>
              <div className="bg-tertiary-container/20 border border-tertiary-container px-4 sm:px-6 py-3 rounded-full flex items-center gap-3">
                <Landmark className="text-tertiary-fixed w-5 h-5" />
                <span className="text-tertiary-fixed font-bold uppercase tracking-widest text-[10px] sm:text-xs">FCRA Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
