import { Phone, MapPin, Star } from "lucide-react";

export default function SubNav() {
  return (
    <div className="w-full bg-navy border-b-2 border-gold text-white text-[11px] sm:text-sm font-google">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-14 py-2 flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-6">
        
        {/* Left Side: Contact Details (Forced Horizontal Rows) */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 w-full md:w-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <Phone size={13} className="stroke-gold shrink-0" />
            <a href="tel:+19188341800" className="hover:text-gold transition-colors whitespace-nowrap">
              (918) 834-1800
            </a>
          </div>
          
          {/* Divider Dot visible only on mobile to split elements neatly */}
          <span className="w-1 h-1 rounded-full bg-white/20 sm:hidden" />

          <div className="flex items-center gap-1.5 shrink-0">
            <MapPin size={13} className="stroke-gold shrink-0" />
            <a
              href="https://maps.google.com/?q=3615+E+11th+St,+Tulsa,+OK+74112"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors whitespace-nowrap"
            >
              {/* Responsive text: compact shorthand on mobile, full address on desktop */}
              <span className="sm:hidden">Get Directons</span>
              <span className="hidden sm:inline">3615 E 11th St, Tulsa, OK 74112</span>
            </a>
          </div>
        </div>

        {/* Right Side: Hours & Social Proof */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 justify-center md:justify-end border-t border-white/10 md:border-none pt-2 md:pt-0 w-full md:w-auto">
          <p className="tracking-wide text-white/90 uppercase whitespace-nowrap">Mon–Fri: 8AM–4:30PM</p>
          <div className="flex items-center gap-1.5 text-gold shrink-0">
            <Star size={13} fill="currentColor" />
            <p className="text-white whitespace-nowrap">4.7/5.0 Google Stars</p>
          </div>
        </div>

      </div>
    </div>
  );
}