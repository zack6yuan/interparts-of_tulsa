import { Phone, MapPin, Star } from "lucide-react";

export default function SubNav() {
  return (
    <div className="flex items-center justify-between w-full px-8 py-2 bg-navy border-b-2 border-gold text-white text-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Phone size={14} className="stroke-gold" />
          <a href="tel:+19188341800" className="hover:text-gold transition">
            (918) 834-1800
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="stroke-gold" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=3615+E+11th+St,+Tulsa,+OK+74112"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition"
          >
            3615 E 11th St, Tulsa, OK 74112
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p>MON-FRI: 8AM-4:30PM</p>
        <div className="flex items-center gap-1 text-gold">
          <Star size={14} fill="currentColor" />
          <p className="text-white">4.7/5.0 Google Stars</p>
        </div>
      </div>
    </div>
  );
}
