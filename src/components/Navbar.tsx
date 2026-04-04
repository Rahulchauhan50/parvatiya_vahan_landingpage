import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, type MouseEvent } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (targetId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const section = document.querySelector(targetId);
    if (section) {
      const headerOffset = 96;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background backdrop-blur-md shadow-[0_40px_60px_-15px_rgba(20,29,35,0.06)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <img src="../assets/logo.png" alt="logo" className="w-14 h-14" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-[#EB5310] font-bold text-[0.6875rem] uppercase tracking-widest border-b-2 border-[#EB5310]" href="#home" onClick={handleNavClick("#home")}>Home</a>
          <a className="text-on-background opacity-80 hover:text-[#EB5310] transition-all duration-300 text-[0.6875rem] uppercase tracking-widest" href="#about" onClick={handleNavClick("#about")}>About Us</a>
          <a className="text-on-background opacity-80 hover:text-[#EB5310] transition-all duration-300 text-[0.6875rem] uppercase tracking-widest" href="#vision-mission" onClick={handleNavClick("#vision-mission")}>Vision &amp; Mission</a>
          <a className="text-on-background opacity-80 hover:text-[#EB5310] transition-all duration-300 text-[0.6875rem] uppercase tracking-widest" href="#services" onClick={handleNavClick("#services")}>Services</a>
          <a className="text-on-background opacity-80 hover:text-[#EB5310] transition-all duration-300 text-[0.6875rem] uppercase tracking-widest" href="#causes" onClick={handleNavClick("#causes")}>Our Causes</a>
        </nav>

        <div className="flex items-center gap-4">
          <a onClick={handleNavClick('#contact-us')} href="#contact-us" className="bg-[#EB5310] cursor-pointer text-white px-6 py-2 rounded-lg font-bold font-headline active:scale-95 transition-transform">
           Contact us
          </a>
          <button 
            className="md:hidden text-on-background"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-t border-surface-container-highest px-6 py-4 flex flex-col gap-4"
        >
          <a className="text-[#EB5310] font-bold text-[0.6875rem] uppercase tracking-widest" href="#home" onClick={handleNavClick("#home")}>Home</a>
          <a className="text-on-background opacity-80 text-[0.6875rem] uppercase tracking-widest" href="#about" onClick={handleNavClick("#about")}>About Us</a>
          <a className="text-on-background opacity-80 text-[0.6875rem] uppercase tracking-widest" href="#vision-mission" onClick={handleNavClick("#vision-mission")}>Vision &amp; Mission</a>
          <a className="text-on-background opacity-80 text-[0.6875rem] uppercase tracking-widest" href="#services" onClick={handleNavClick("#services")}>Services</a>
          <a className="text-on-background opacity-80 text-[0.6875rem] uppercase tracking-widest" href="#causes" onClick={handleNavClick("#causes")}>Our Causes</a>
        </motion.div>
      )}
    </header>
  );
}
