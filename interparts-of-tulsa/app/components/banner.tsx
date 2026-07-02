import { Star } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full bg-gold py-10 px-6 text-navy font-bebas">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-y-10 gap-x-4 md:flex md:flex-row md:justify-around md:items-center">
        {/* Stat 1 */}
        <div className="flex items-center justify-center md:justify-start gap-3 w-full">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">45+</p>
          <p className="text-lg lg:text-xl leading-none uppercase">
            Years in
            <br /> Business
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center justify-center gap-3 w-full md:border-l md:border-navy/30 md:pl-6 lg:pl-12">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">
            12K+
          </p>
          <p className="text-lg lg:text-xl leading-none uppercase">
            Vehicles
            <br /> Serviced
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center justify-center gap-3 w-full md:border-l md:border-navy/30 md:pl-6 lg:pl-12">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">4.7</p>
          <div className="flex flex-col gap-1.5 items-start">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-navy stroke-navy" />
              ))}
            </div>
            <p className="text-lg lg:text-xl leading-none uppercase tracking-wide">
              Google Rating
            </p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex items-center justify-center gap-3 w-full md:border-l md:border-navy/30 md:pl-6 lg:pl-12">
          <p className="text-5xl lg:text-6xl font-medium tracking-tight">
            100%
          </p>
          <p className="text-lg lg:text-xl leading-none uppercase">
            Guarantee <br /> on all Labor
          </p>
        </div>
      </div>
    </div>
  );
}
