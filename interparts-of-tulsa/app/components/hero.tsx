"use client";
import { CircleDollarSign, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import GradientText from "./gradientText";

export default function Hero() {
  const router = useRouter();
  const bgImageURL = "/hero-bg.png"; 

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goldGradient = "linear-gradient(90deg, #eab308 0%, #fef08a 30%, #ffffff 50%, #fef08a 70%, #eab308 100%)";

  return (
    <div 
      /* CHANGES MADE BELOW:
        1. Changed mobile height from `min-h-[calc(100vh-140px)]` to `min-h-[70vh]` or `min-h-[calc(100vh-240px)]` to make it shorter.
        2. Swapped `justify-center` to `justify-start md:justify-center` to pull content upward on mobile.
      */
      className="relative w-full min-h-[calc(100vh-240px)] md:min-h-[calc(100vh-120px)] flex flex-col justify-start md:justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.95) 40%, rgba(10, 25, 47, 0.80) 100%), url(${bgImageURL})`
      }}
    >
      {/* Desktop Specific Masking Gradient Layer */}
      <div className="absolute inset-0 hidden md:block bg-linear-to-r from-navy via-navy/90 to-transparent pointer-events-none" />

      {/* CHANGES MADE BELOW:
        3. Changed padding-y from `py-16 md:py-24` to `pt-12 pb-16 md:py-24`. 
           The smaller top padding (`pt-12`) shifts everything closer to the navbar on small screens.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-30 pb-16 md:py-24 relative z-10 flex flex-col justify-center">
        
        {/* Main Typography Header Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left font-bebas max-w-4xl tracking-wide leading-[0.95]">
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
            <GradientText 
              text="Fast, Honest Work" 
              gradient={goldGradient}
              neon={true}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </h1>

          <h2 className="text-6xl lg:text-7xl xl:text-8xl text-white mt-2">
            RIGHT ON ROUTE 66.
          </h2>
          <p className="font-google text-base sm:text-lg md:text-xl lg:text-2xl mt-6 text-slate-300 normal-case max-w-md lg:max-w-2xl leading-relaxed font-normal">
            Tulsa&apos;s most respected independent auto shop. We&apos;ve been
            fixing it right, the first time, since 1980. Experience precise diagnostics, transparent pricing, and efficient service designed to get you back on the road safely and swiftly.
          </p>
        </div>
        
        {/* CTA Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 w-full sm:w-auto max-w-md sm:max-w-none mx-auto md:mx-0">
          <button 
            onClick={() => handleScroll('services')} 
            className="flex items-center justify-center gap-4 bg-gold px-6 sm:px-8 py-3.5 sm:py-4 text-navy font-bold rounded-sm uppercase text-lg sm:text-xl transition-all duration-200 hover:bg-yellow-500 active:scale-[0.98] shadow-md group w-full sm:w-auto cursor-pointer"
          >
            <Wrench size={22} strokeWidth={2} className="stroke-navy fill-navy transition-transform duration-300 group-hover:rotate-45" />
            View Services
          </button>
          <button 
            onClick={() => handleScroll('contact')} 
            className="flex items-center justify-center gap-4 bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-white border-2 border-white font-bold rounded-sm uppercase text-lg sm:text-xl transition-all duration-200 hover:bg-white hover:text-navy active:scale-[0.98] w-full sm:w-auto cursor-pointer"
          >
            <CircleDollarSign size={22} strokeWidth={2} className="stroke-current" />
            Get a Quote
          </button>
        </div>

      </div>
    </div>
  );
}