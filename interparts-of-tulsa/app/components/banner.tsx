import { Star } from "lucide-react";

// Renders a star rating with accurate partial fill (e.g. 4.7 -> last star 70% filled)
function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercent = Math.min(Math.max(rating - i, 0), 1) * 100;
        return (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            {/* Empty star (base outline) */}
            <Star
              size={size}
              className="absolute top-0 left-0 stroke-navy fill-transparent"
            />
            {/* Filled star, clipped to percentage */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent}%`, height: size }}
            >
              <Star size={size} className="fill-navy stroke-navy" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Banner() {
  return (
    <div className="w-full bg-gold py-8 md:py-10 px-4 sm:px-6 lg:px-14 text-navy">
      {/* Grid shifts cleanly: 1 col on mobile, 2 col on tablet/small mobile, 4 col on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 items-center justify-items-center">
        
        {/* Stat 1 */}
        <div className="flex items-center justify-center md:justify-start lg:justify-center gap-3 w-full font-bebas px-4">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">45+</p>
          <p className="text-base lg:text-lg font-google font-bold leading-tight uppercase">
            Years in
            <br /> Business
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center justify-center md:justify-start lg:justify-center gap-3 w-full font-bebas px-4 border-t md:border-t-0 md:border-l border-navy/20 pt-10 md:pt-0 md:h-12">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">12K+</p>
          <p className="text-base lg:text-lg font-google font-bold leading-tight uppercase">
            Vehicles
            <br /> Serviced
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center justify-center md:justify-start lg:justify-center gap-3 w-full font-bebas px-4 border-t md:border-t-0 lg:border-l border-navy/20 pt-10 md:pt-0 md:h-12">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">4.7</p>
          <div className="flex flex-col gap-1 items-start">
            <StarRating rating={4.7} size={18} />
            <p className="text-base lg:text-lg font-google font-bold leading-none uppercase tracking-wide mt-1">
              Google Rating
            </p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex items-center justify-center md:justify-start lg:justify-center gap-3 w-full font-bebas px-4 border-t md:border-t-0 md:border-l border-navy/20 pt-10 md:pt-0 md:h-12">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">6</p>
          <p className="text-base lg:text-lg font-google font-bold leading-tight uppercase">
            Month Guarantee <br /> on all Labor
          </p>
        </div>

      </div>
    </div>
  );
}