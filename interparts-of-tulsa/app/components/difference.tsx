/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import {
  Lightbulb,
  DollarSignIcon,
  Handshake,
  Gauge,
  BrickWallShield,
  Leaf,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function TheDifference() {
  const router = useRouter();

  // Array of services for clean, scannable grid rendering
  const serviceList = [
    {
      icon: <Lightbulb size={28} />,
      title: "Honest Diagnostics",
      desc: "We tell you exactly what's wrong before we touch a wrench. Printed inspection sheets, not verbal estimates that shift.",
    },
    {
      icon: <DollarSignIcon size={28} />,
      title: "Fair Pricing",
      desc: "The price you see is the price you pay. No unexpected price changes, we are fully transparent, and up-front.",
    },
    {
      icon: <Handshake size={28} />,
      title: "You Know Your Tech",
      desc: "No rotating staff. Your car gets the same certified technician every time. We build relationships, not just repair orders.",
    },
    {
      icon: <Gauge size={28} />,
      title: "On-Time Delivery",
      desc: "We commit to a time and we honor it. If we run over, you will be the first to know through established communication.",
    },
    {
      icon: <BrickWallShield size={28} />,
      title: "Labor Guarantee",
      desc: "All labor comes with a 12-month/12,000-mile guarantee. If the problem returns, we fix it. No charge. No debate.",
    },
    {
      icon: <Leaf size={28} />, 
      title: "Tulsa Community First",
      desc: "Our roots run in Northeast Oklahoma. We keep Tulsa strong by keeping our workforce local and our service personal.",
    },
  ];

  return (
    <div
      id="difference"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-16 md:py-24"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col gap-8 md:gap-12">
        
        {/* Header Section - Clean left-align baseline alignment */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8 text-left">
          <div className="flex flex-col items-start font-bebas tracking-wide leading-[0.95]">
            <p className="text-2xl md:text-3xl mb-3 md:mb-4 text-white/30">// Why Choose Us</p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl text-white">The Interparts</h1>
            <h2 className="text-5xl sm:text-7xl md:text-8xl text-gold mt-1">Difference.</h2>
          </div>
          
          {/* Paragraph subtitle - Tops out beautifully on desktop via lg:mt-12 */}
          <p className="font-google text-base md:text-lg text-slate-300 w-full lg:max-w-md leading-relaxed font-normal lg:mt-12">
            At Interparts, we believe you deserve dealership-grade precision with family-owned integrity. Every service is executed by trained technicians utilizing only premium, OEM, quality parts. We walk you through our diagnostics and explain every detail clearly before we turn a single wrench, keeping you in complete control.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white/3 border border-white/10 hover:border-gold/40 p-6 rounded-sm transition-all duration-300 group hover:bg-white/5 flex flex-col items-start text-left"
            >
              <div className="text-gold stroke-gold mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                {service.icon}
              </div>
              <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide mb-2">
                {service.title}
              </h3>
              <p className="font-google text-sm md:text-base text-slate-400 leading-relaxed font-normal">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}