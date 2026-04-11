import { motion } from "motion/react";
import { Scale, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-2 lg:order-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                alt="Drivers" 
                className="rounded-xl h-48 sm:h-64 w-full object-cover shadow-md mt-8" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-hQ9pfixr6gGVmmP6ec2hUV_ggARABHMqpQeA5-RDBi7iYlxwGKvXrK4A-o8NoAlw5cJNxvESA6BiiBSCFtfh-fwP1lhopLaSXfV4admsxxnrP0V2AbGGCAWP0yuyW417-wFLiRiBM0Ed4fxflLqpGplcu4YkaEfUp9qp_FJPRG9Y20KFpDjh4JrK_2tmk34R3kXsrfiU-COgvsX5tlujIng-wgugeMT7D-9byL_5SOsTjv4k4qPSUxruWLKh-IOv9K_qf6ggF2Y" 
              />
              <img 
                alt="Community" 
                className="rounded-xl h-48 sm:h-64 w-full object-cover shadow-md" 
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0DirJZ0FG4c6CvzdvdkYFm7fgOi73aL4Ay-na_uRBs6FKLL3kxALtSdhbgA4-DT-6GR6J_nlonbTeR47m6SaW1xEpXixIcT3JyqEu1daerIVdJVytBhcs1b5yly10bsq3FTnWYI37yOpb97gbWMBAtsvaNXjc3-0xYEbI-WH2a9v34E5Pd2uaVBn7IHvArSbVPHdz1jKSLXSLwJelLnT4RQHMQzmtaKMEP7yd88mYJOYffdXmwoJvt-MfPUdUJg1pdnoopaEC2rI" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <span className="font-headline text-[0.6875rem] font-bold uppercase tracking-widest text-primary mb-4 block">ABOUT US (Main Section)</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-on-background mb-6 md:mb-8 tracking-tight">Parvatiya Vahan Mobility LLP</h2>
            <p className="text-base sm:text-lg text-on-background/70 leading-relaxed mb-6">
              Parvatiya Vahan Mobility LLP is a technology-driven mobility enterprise focused on transforming transportation services through innovation, safety, and efficiency.
            </p>
            <p className="text-base sm:text-lg text-on-background/70 leading-relaxed mb-6">
              We work closely with Parvatiya Vahan Samarthan Samiti, a social organization dedicated to driver welfare, road safety awareness, and community development.
            </p>
            <p className="text-base sm:text-lg text-on-background/70 leading-relaxed mb-8">
              While the LLP operates as an independent commercial entity, this collaboration enables us to combine business excellence with meaningful social impact.
            </p>
          </motion.div>
        </div>

        {/* Legal Disclosures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-on-background/10 bg-surface-container-low p-7 shadow-sm"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-on-background mb-4">RELATIONSHIP DISCLOSURE</h3>
              <p className="text-sm sm:text-base text-on-background/75 leading-relaxed mb-4">
                Parvatiya Vahan Mobility LLP is an independent legal entity and operates as a commercial enterprise. It collaborates with Parvatiya Vahan Samarthan Samiti on various social and community initiatives.
              </p>
              <p className="text-sm sm:text-base text-on-background/75 leading-relaxed">
                The NGO does not hold any ownership, partnership, or profit-sharing rights in the LLP. All collaborations are conducted on a transparent and arm's length basis in compliance with applicable laws.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl border border-on-background/10 bg-surface-container-low p-7 shadow-sm"
          >
            <div className="absolute inset-0 bg-linear-to-br from-on-background/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-on-background/5 text-on-background/70 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-on-background mb-4">LEGAL DISCLAIMER</h3>
              <p className="text-sm sm:text-base text-on-background/75 leading-relaxed mb-4">
                Disclaimer: Parvatiya Vahan Mobility LLP is an independent commercial entity. Any association with Parvatiya Vahan Samarthan Samiti is limited to collaborative initiatives for social impact and does not imply ownership, control, or profit-sharing.
              </p>
              <p className="text-sm sm:text-base text-on-background/75 leading-relaxed">
                All services offered by the LLP are governed by applicable commercial laws and regulations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
