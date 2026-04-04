import { Mountain, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact-us" className="bg-inverse-surface text-white border-t border-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 px-4 sm:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
          <img src="../assets/logo.png" alt="logo" className="w-14 h-14" />
            {/* <span className="text-2xl font-headline font-black text-white">PVSS</span> */}
          </div>
          <p className="text-sm leading-relaxed text-slate-300 opacity-80">
            Strengthening Himalayan mobility through safe logistics, digital innovation, and dignity-driven support for native drivers.
          </p>
        </div>
        
        <div className="md:col-span-1">
          <h4 className="font-headline font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a className="text-slate-300 hover:text-white hover:underline decoration-[#EB5310] underline-offset-4 transition-all" href="#home">Home</a></li>
            <li><a className="text-slate-300 hover:text-white hover:underline decoration-[#EB5310] underline-offset-4 transition-all" href="#about">About Us</a></li>
            <li><a className="text-slate-300 hover:text-white hover:underline decoration-[#EB5310] underline-offset-4 transition-all" href="#services">Services</a></li>
            <li><a className="text-slate-300 hover:text-white hover:underline decoration-[#EB5310] underline-offset-4 transition-all" href="#causes">Our Causes</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-1" >
          <h4 className="font-headline font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-[#EB5310] w-4 h-4 mt-1" />
              <span className="text-slate-300">Dehradun, Uttarakhand, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[#EB5310] w-4 h-4" />
              <span className="text-slate-300">+91 9520701701</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#EB5310] w-4 h-4" />
              <span className="text-slate-300">support@pvss.org.in</span>
            </li>
          </ul>
        </div>
        
        <div className="md:col-span-1">
          <h4 className="font-headline font-bold text-lg mb-6 text-[#EB5310]">Emergency Helpline</h4>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Available 24/7</p>
            <a className="text-2xl font-bold font-headline text-white block mb-4" href="tel:+919520701701">+91 9520701701</a>
            <p className="text-xs text-slate-400">Call for immediate roadside or medical assistance in hill regions.</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 py-8 text-center">
        <p className="text-sm text-slate-400">© 2026 Parvatiya Vahan Samarthan Samiti (PVSS). All Rights Reserved.</p>
      </div>
    </footer>
  );
}
