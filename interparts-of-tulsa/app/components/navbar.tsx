"use client";
import { useState } from "react";
import { Wrench, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsOpen(false); // Close mobile menu if open
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Services", target: "services" },
    { label: "Why Us", target: "difference" },
    { label: "Reviews", target: "testimonials" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav className="w-full bg-navy relative z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl sm:text-3xl font-bebas cursor-pointer relative z-50 text-white tracking-wide shrink-0"
          onClick={() => { router.push("/"); setIsOpen(false); }}
        >
          <span className="text-gold">INTERPARTS</span> OF TULSA
        </h1>

        {/* Desktop Navigation Links - Now safely switches to mobile menu below 1024px (lg) */}
        <ul className="hidden lg:flex flex-row gap-6 font-google text-sm text-white/80">
          {navLinks.map((link) => (
            <li
              key={link.target}
              className="relative group cursor-pointer hover:text-white transition-colors"
              onClick={() => handleScroll(link.target)}
            >
              <span>{link.label}</span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>

        {/* Desktop Action Button - Aligned to lg visibility */}
        <div className="hidden lg:block">
          <button 
            className="relative overflow-hidden rounded bg-gold text-navy font-google font-bold px-5 py-2.5 flex items-center gap-2.5 shadow-lg shadow-gold/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold/20 active:translate-y-0 group" 
            onClick={() => handleScroll("contact")}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" />
            <Wrench size={16} className="text-navy fill-navy transition-transform duration-300 group-hover:rotate-45" />
            <span className="text-base tracking-wide font-google">Get a Quote</span>
          </button>
        </div>

        {/* Hamburger Button - Triggers at lg breakpoint instead of md */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden text-white/80 hover:text-gold p-2 transition-colors relative z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Slide-Out Overlay - Handles everything up to 1024px now */}
      <div
        className={`fixed inset-0 bg-navy/98 z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center items-center px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center font-google text-xl text-white/90 tracking-wide mb-10">
          {navLinks.map((link) => (
            <li
              key={link.target}
              className="cursor-pointer hover:text-gold active:text-gold transition-colors block py-2"
              onClick={() => handleScroll(link.target)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Mobile Action Button */}
        <button 
          className="w-full max-w-xs relative overflow-hidden rounded bg-gold text-navy font-google font-bold py-3.5 flex justify-center items-center gap-2.5 shadow-lg shadow-gold/10" 
          onClick={() => handleScroll("contact")}
        >
          <Wrench size={18} className="text-navy fill-navy" />
          <span className="text-lg font-google">Get a Quote</span>
        </button>
      </div>
    </nav>
  );
}