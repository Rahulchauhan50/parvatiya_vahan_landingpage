import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
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
            <span className="font-headline text-[0.6875rem] font-bold uppercase tracking-widest text-primary mb-4 block">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-on-background mb-6 md:mb-8 tracking-tight">A Lifeline for Mountain Mobility</h2>
            <p className="text-base sm:text-lg text-on-background/70 leading-relaxed mb-6">
              Parvatiya Vahan Samarthan Samiti (PVSS) is a registered NGO based near Harrawala, Dehradun. We work at the intersection of transport, technology, and social welfare to keep Uttarakhand's mountain communities connected, safe, and economically active.
            </p>
            <p className="text-base sm:text-lg text-on-background/70 leading-relaxed mb-8">
              From village cargo routes and Char Dham support to emergency response and driver rights advocacy, PVSS is building a stronger Himalayan transport ecosystem powered by local experience and community trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
