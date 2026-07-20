/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  return (
    <div
      id="location"
      className="relative w-full flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-16 md:py-24"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col gap-8 md:gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-start border-b border-white/10 pb-8 text-left">
          <div className="flex flex-col items-start font-bebas tracking-wide leading-[0.95]">
            <p className="text-2xl md:text-3xl mb-3 md:mb-4 text-white/30">// Find Us</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">Located in the</h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold mt-1">
              Heart of Tulsa.
            </h2>
          </div>
        </div>

        {/* Map and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Map Container */}
          <div className="w-full overflow-hidden rounded-sm shadow-2xl border border-white/10">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=3615+E+11th+St,+Tulsa,+OK+74112`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full aspect-video lg:aspect-square"
              title="Interparts of Tulsa Location"
            />
          </div>

          {/* Contact Information Sidebar */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-bebas text-3xl text-white tracking-wide">Visit Us</h3>
              
              <div className="flex flex-col gap-6">
                {/* Address */}
                <a 
                  href="https://maps.google.com/?q=3615+E+11th+St,+Tulsa,+OK+74112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-gold/10 p-3 rounded-md text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bebas text-lg text-white">Our Shop</span>
                    <span className="font-google text-slate-300">3615 E 11th St, Tulsa, OK 74112</span>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+19188341800" className="flex items-start gap-4 group">
                  <div className="bg-gold/10 p-3 rounded-md text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bebas text-lg text-white">Call Us</span>
                    <span className="font-google text-slate-300">(918) 834-1800</span>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-md text-gold">
                    <Clock size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bebas text-lg text-white">Hours</span>
                    <span className="font-google text-slate-300">Monday through Friday, 8:00AM to 4:30PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gold/5 border border-gold/20 p-6 rounded-sm mt-4">
              <h4 className="font-bebas text-xl text-white mb-2">Need directions?</h4>
              <p className="font-google text-slate-300 text-sm">
                Located right off historic Route 66. Click the map to open in Google Maps and get turn-by-turn navigation directly to our front door.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}