/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import router from "next/router";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-navy overflow-hidden pt-16 md:pt-20 pb-8 border-t border-white/5">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col gap-10 md:gap-12">
        {/* Top Link Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-left border-b border-white/10 pb-10 md:pb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start text-left gap-4 col-span-1 sm:col-span-2 md:col-span-1 max-w-sm">
            <h1 className="font-bebas text-3xl md:text-4xl tracking-wide text-white leading-none">
              <span className="text-gold">INTERPARTS</span> OF TULSA
            </h1>
            <p className="font-google text-white/60 text-sm leading-relaxed font-normal">
              Tulsa's most trusted independent auto repair specialist since
              1980. Honest diagnostics, fair pricing, guaranteed labor — right
              on Route 66.
            </p>
            <a
              href="https://www.facebook.com/interpartsoftulsa"
              target="_blank"
              rel="noopener noreferrer"
              // Added -ml-1 to nudge it left and counteract the asset's internal spacing
              className="-ml-2 inline-block transition-transform duration-200 hover:scale-105 cursor-pointer"
              aria-label="Visit our Facebook page"
            >
              <Image
                src="/facebook-icon.svg"
                alt="Facebook"
                width={50}
                height={50}
              />
            </a>
          </div>

          {/* Quick Nav Anchor Controls */}
          <div className="flex flex-col items-start gap-4">
            <p className="font-bebas text-xl tracking-wide text-gold">
              Quick Links
            </p>
            <nav className="flex flex-col items-start gap-2.5">
              <button
                onClick={() => scrollTo("services")}
                className="text-white/60 hover:text-gold transition-colors text-sm font-google font-normal cursor-pointer text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo("testimonials")}
                className="text-white/60 hover:text-gold transition-colors text-sm font-google font-normal cursor-pointer text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollTo("location")}
                className="text-white/60 hover:text-gold transition-colors text-sm font-google font-normal cursor-pointer text-left"
              >
                Location
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-white/60 hover:text-gold transition-colors text-sm font-google font-normal cursor-pointer text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Direct Connect Column */}
          <div className="flex flex-col items-start gap-4">
            <p className="font-bebas text-xl tracking-wide text-gold">
              Get In Touch
            </p>
            <div className="flex flex-col items-start gap-3.5 text-sm font-google font-normal">
              <a
                href="https://maps.google.com/?q=3615+E+11th+St,+Tulsa,+OK+74112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors text-left"
              >
                <MapPin size={18} className="stroke-gold shrink-0 mt-0.5" />
                <span>
                  3615 E 11th St, <br className="hidden sm:inline" /> Tulsa, OK
                  74112
                </span>
              </a>

              <a
                href="tel:+19188341800"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-left"
              >
                <Phone size={18} className="stroke-gold shrink-0" />
                <span>(918) 834-1800</span>
              </a>

              <div className="flex items-center gap-3 text-white/60 text-left">
                <Clock size={18} className="stroke-gold shrink-0" />
                <span>Mon – Fri, 8:00AM – 4:30PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Author Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white/40 text-xs font-google font-normal">
          <p>
            © {new Date().getFullYear()} Interparts of Tulsa. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-red-500 animate-pulse">❤️</span> in
            Tulsa, Oklahoma.
          </p>
        </div>
      </div>
    </footer>
  );
}
