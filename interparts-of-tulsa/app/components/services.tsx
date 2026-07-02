/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import {
  Wrench,
  Gauge,
  ShieldAlert,
  Disc,
  Ban,
  ThermometerSnowflake,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  // Array of services for clean, scannable grid rendering
  const serviceList = [
    {
      icon: <ThermometerSnowflake size={28} />,
      title: "AC/Heater Repair",
      desc: "Climate control diagnostics, leak detection, freon recharges, blower motor fixes, and compressor replacements.",
    },
    {
      icon: <Disc size={28} />,
      title: "Brakes & Suspension",
      desc: "Pad and rotor replacements, caliper servicing, shocks, struts, control arms, and steering component repairs.",
    },
    {
      icon: <Gauge size={28} />,
      title: "General Repair",
      desc: "From fluid leaks and belt replacements to full mechanical diagnostics, we handle the essential fixes that keep your daily driver running smoothly.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Engine Repair",
      desc: "Complete engine diagnostics, timing belts, head gaskets, oil leak resolutions, and minor to major mechanical rebuilds.",
    },
    {
      icon: <ShieldAlert size={28} />,
      title: "Transmission Repair",
      desc: "Transmission fluid flushes, clutch adjustments, torque converter fixes, and complete assembly replacements or rebuilds.",
    },
    {
      icon: <Ban size={28} />, // Optional swap: <Activity size={28} /> or <CheckCircle size={28} /> work great here too
      title: "Tune-ups and Maintenance",
      desc: "Spark plug replacements, filter changes, fluid flushes, safety checks, and mileage-interval preventative maintenance.",
    },
  ];

  return (
    <div
      id="services"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-24"
    >
      {/* Background Subtle Blueprint Grid (Optional: Matches the Hero design language) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-14 relative z-10 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col items-start font-bebas tracking-wide leading-[0.95]">
            <p className="text-3xl mb-4 text-white/30">// Services</p>
            <h1 className="text-6xl md:text-8xl text-gold">Same Day</h1>
            <h2 className="text-6xl md:text-8xl text-white mt-1">Auto Repair</h2>
          </div>
          <p className="font-sans text-lg md:text-xl text-slate-300 max-w-md leading-relaxed">
            Every service performed by trained technicians using OEM-quality
            parts.
            <span className="text-white font-semibold">
              {" "}
              No shortcuts. No excuses.
            </span>{" "}
            We explain everything clearly before turning a single wrench, so
            you’re always in complete control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 hover:border-gold/40 p-6 rounded-sm transition-all duration-300 group hover:bg-white/[0.05]"
            >
              <div className="text-gold stroke-gold mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                {service.icon}
              </div>
              <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
