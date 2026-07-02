/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import {
  Lightbulb,
  DollarSignIcon,
  Handshake,
  Gauge,
  BrickWallShield,
  Leaf,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Renders a star rating with accurate partial fill (e.g. 4.7 -> last star 70% filled)
function StarRating({ rating, size = 24 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercent = Math.min(Math.max(rating - i, 0), 1) * 100;
        return (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            {/* Empty star (base outline) */}
            <Star
              size={size}
              className="absolute top-0 left-0 stroke-gold stroke-1 fill-transparent"
            />
            {/* Filled star, clipped to percentage */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent}%`, height: size }}
            >
              <Star size={size} className="fill-gold stroke-gold" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  const router = useRouter();

  // Array of services for clean, scannable grid rendering
  const serviceList = [
    {
      stars: <StarRating rating={5} size={20} />,
      review:
        '"If y\'all need a good mechanic this is it. I needed new struts. The chain stores were raking me over the coals. They got me in and out in half a day. They noticed my brake pads were really worn and they replaced them not to increase my bill, but to keep me safe. The world needs more people like this. Thanks"',
      name: "Todd J.",
      data: "Verified Google Review",
    },
    {
      stars: <StarRating rating={5} size={20} />,
      review:
        '"These guys are the best of the best. I was anxious about trying a new mechanic in a new city, but these guys put my mind at absolute ease. I first took my 2013 Subaru Forester in for A/C issues and they fixed it right up for a VERY reasonable price. This morning, my check engine light was on and they ran the diagnostic and immediately found the issue and didn\'t charge me a dime for it..They have my business for life!"',
      name: "Kayla M.",
      data: "Verified Google Review",
    },
    {
      stars: <StarRating rating={5} size={20} />,
      review:
        '"I had such a positive experience at Interparts of Tulsa. The team was honest, fast, and thorough — they explained what was going on without any pressure or upselling, and had my car back to me in less than a day. It’s rare to find an auto shop that makes you feel taken care of and respected. I\'ll definitely be back and highly recommend them!"',
      name: "Leiha S.",
      data: "Verified Google Review",
    },
    {
      stars: <StarRating rating={5} size={20} />,
      review:
        '"I have been using this shop for 15-20 years. Have had all type of repair work done on multiple vehicles. Honest mechanics, fair pricing, and excellent work. Highly recommended."',
      name: "David B.",
      data: "Verified Google Review",
    },
    {
      stars: <StarRating rating={5} size={20} />,
      review:
        '"I\'ve had several cars repaired at Interparts of Tulsa and received advice on an issue from Robert, and results and prices have always been good and fair. I definitely recommend them."',
      name: "Michael K.",
      data: "Verified Google Review",
    },
    {
      stars: <StarRating rating={5} size={20} />,
      review:
        "\"Started taking our vehicles to Interparts around 2006. Everything repaired stayed fixed. Surprisingly reasonable and Robert will not rake you over the coals. Upfront about whether or not it's worth it to repair. Won't suggest unnecessary work. And I'm always amazed at how quickly they can get you in and get it done.\"",
      name: "Matt A.",
      data: "Verified Google Review",
    },
  ];

  return (
    <div
      id="reviews"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-24"
    >
      {/* Background Subtle Blueprint Grid (Optional: Matches the Hero design language) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-14 relative z-10 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          {/* Rating badges - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Google rating box */}
            <div className="flex flex-col items-start gap-3 bg-white/3 border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-3">
                <StarRating rating={4.7} size={24} />
                <p className="font-bebas text-3xl text-white">4.7/5</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/google-full.png"
                  width={80}
                  height={24}
                  alt="google-icon"
                  unoptimized
                />
                <p className="font-sans text-sm text-slate-400">100+ Reviews</p>
              </div>
            </div>

            {/* Carfax rating box */}
            <div className="flex flex-col items-start gap-3 bg-white/3 border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-3">
                <StarRating rating={5} size={24} />
                <p className="font-bebas text-3xl text-white">5/5</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/carfax.webp"
                  width={80}
                  height={24}
                  alt="carfax-logo"
                  unoptimized
                />
                <p className="font-sans text-sm text-slate-400">30+ Reviews</p>
              </div>
            </div>

            {/* Facebook rating box */}
            <div className="flex flex-col items-start gap-3 bg-white/3 border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-3">
                <StarRating rating={4.9} size={24} />
                <p className="font-bebas text-3xl text-white">4.9/5</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/facebook.svg"
                  width={24}
                  height={24}
                  alt="facebook-icon"
                  unoptimized
                />
                <p className="font-sans text-sm text-slate-400">30+ Votes</p>
              </div>
            </div>

            {/* Yelp rating box */}
            <div className="flex flex-col items-start gap-3 bg-white/3 border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-3">
                <StarRating rating={4.5} size={24} />
                <p className="font-bebas text-3xl text-white">4.5/5</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/yelp.svg"
                  width={60}
                  height={60}
                  alt="yelp-icon"
                  unoptimized
                />
                <p className="font-sans text-sm text-slate-400">15+ Reviews</p>
              </div>
            </div>
          </div>

          {/* Heading - right */}
          <div className="flex flex-col items-end font-bebas tracking-wide leading-[0.95]">
            <p className="text-3xl mb-4 text-white/30">// Customer Reviews</p>
            <h1 className="text-6xl md:text-8xl text-white">Tulsa Speaks</h1>
            <h2 className="text-6xl md:text-8xl text-gold mt-1">For Itself</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white/3 border border-white/10 hover:border-gold/40 p-6 rounded-sm transition-all duration-300 group hover:bg-white/5 flex flex-col h-full"
            >
              <div className="text-gold stroke-gold mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                {service.stars}
              </div>
              <h3 className="font-google text-lg md:text-lg text-white tracking-wide mb-2">
                {service.review}
              </h3>
              <div className="flex flex-col items-start mt-auto">
                <p className="font-bebas text-sm md:text-2xl text-white leading-relaxed">
                  {service.name}
                </p>
                <p className="flex gap-2 font-sans text-sm md:text-base text-slate-400 leading-relaxed">
                  <Image
                    src="/google.svg"
                    width={25}
                    height={25}
                    alt="google-icon"
                    unoptimized
                  />
                  {service.data}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}