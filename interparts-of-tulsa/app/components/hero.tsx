"use client"
import { CircleDollarSign, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const bgImageURL = "/hero-bg.png"; 

  return (
    <div 
      className="relative w-full min-h-[calc(100vh-120px)] flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.95) 35%, rgba(10, 25, 47, 0.70) 100%), url(${bgImageURL})`
      }}
    >
      <div className="w-full px-40 py-20 relative z-10 flex flex-col justify-center">
        
        <div className="flex flex-col items-start font-bebas max-w-4xl tracking-wide leading-[0.95]">
          <h1 className="text-7xl md:text-9xl text-gold">
            <span className="text-white">45+</span>YEARS STRONG.
          </h1>
          <h2 className="text-6xl md:text-8xl text-white mt-2">
            BUILT ON TULSA&apos;S TRUST.
          </h2>
          <p className="font-google text-xl md:text-2xl mt-6 text-slate-300 normal-case max-w-2xl leading-relaxed font-normal">
            Tulsa&apos;s most respected independent auto shop. We&apos;ve been
            fixing it right, the first time, since 1979.
          </p>
        </div>
        
        <div className="flex gap-5 mt-10">
          <button 
            onClick={() => router.push('/services')} 
            className="flex items-center gap-4 bg-gold px-8 py-4 text-navy font-bold rounded-sm uppercase text-xl transition-all duration-200 hover:bg-yellow-500 active:scale-[0.98] shadow-md"
          >
            <Wrench size={24} strokeWidth={2} className="stroke-navy fill-navy" />
            View Services
          </button>
          <button 
            onClick={() => router.push('/contact')} 
            className="flex items-center gap-4 bg-transparent px-8 py-4 text-white border-2 border-white font-bold rounded-sm uppercase text-xl transition-all duration-200 hover:bg-white hover:text-navy active:scale-[0.98]"
          >
            <CircleDollarSign size={24} strokeWidth={2} className="stroke-current" />
            Get a Quote
          </button>
        </div>

      </div>
    </div>
  );
}