/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import { Handshake, DollarSignIcon, Gauge, ShieldCheck } from "lucide-react";

export default function OurStory() {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-16 md:py-24"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col gap-8 md:gap-12">
        {/* Header Section - Kept right-aligned on desktop, adapts cleanly on mobile */}
        <div className="flex flex-col items-start lg:items-end lg:justify-end gap-6 border-b border-white/10 pb-8 text-left lg:text-right">
          <div className="flex flex-col items-start lg:items-end font-bebas tracking-wide leading-[0.95] w-full">
            <p className="text-2xl md:text-3xl mb-3 md:mb-4 text-white/30">// Our Story</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">BORN ON</h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold mt-1">ROUTE 66.</h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Image (Preserves high resolution aspect handling) */}
          <div className="relative w-full h-64 sm:h-96 lg:h-auto rounded-lg overflow-hidden min-h-[260px] sm:min-h-[384px] lg:min-h-0">
            <Image
              src="/newfront.jpg"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Store front of Interparts of Tulsa with neon sign and painted Golden Driller on front of building"
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Text + 2x2 Grid */}
          <div className="w-full flex flex-col justify-center gap-8 md:gap-10">
            {/* Paragraphs - Configured to utilize clean font-google tokens */}
            <div className="flex flex-col gap-4 text-white/80 text-base md:text-lg leading-relaxed font-google font-normal">
              <p>
                Interparts of Tulsa opened its doors in 1980 on historic Route 66, with a simple promise: honest work, fair prices, and the kind of service that brings neighbors back. That hasn&apos;t changed.
              </p>
              <p>
                Backed by generations of Tulsa families that keep coming back,
                Interparts is not a chain, not a franchise, we&apos;re a
                family-owned business that happens to know more about your
                vehicle than anyone else in town.
              </p>
            </div>

            {/* 2x2 Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-white/10">
              {/* Card 1: Trusted Quality */}
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/2 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="text-gold w-8 h-8 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-xl text-white tracking-wide leading-tight">
                      Trusted Quality
                    </h3>
                    <h4 className="text-[11px] text-gold/80 font-google font-bold uppercase tracking-wider">
                      Honest Diagnostics
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-white/60 font-google font-normal leading-normal">
                  We pinpoint exactly what your vehicle needs without the upsell. Reliable fixes backed by decades of automotive expertise.
                </p>
              </div>

              {/* Card 2: Timely Repairs */}
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/2 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="text-gold w-8 h-8 flex items-center justify-center shrink-0">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-xl text-white tracking-wide leading-tight">
                      Timely Repairs
                    </h3>
                    <h4 className="text-[11px] text-gold/80 font-google font-bold uppercase tracking-wider">
                      Minimize Your Downtime
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-white/60 font-google font-normal leading-normal">
                  We know you rely on your vehicle. Our experienced team works efficiently to get you safely back on Tulsa roads.
                </p>
              </div>

              {/* Card 3: Transparent Pricing */}
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/2 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="text-gold w-8 h-8 flex items-center justify-center shrink-0">
                    <DollarSignIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-xl text-white tracking-wide leading-tight">
                      Transparent Pricing
                    </h3>
                    <h4 className="text-[11px] text-gold/80 font-google font-bold uppercase tracking-wider">
                      No Hidden Fees
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-white/60 font-google font-normal leading-normal">
                  Clear, upfront estimates before any work begins. Fair rates and straight answers are how we keep our neighbors coming back.
                </p>
              </div>

              {/* Card 4: Local Partnership */}
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/2 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="text-gold w-8 h-8 flex items-center justify-center shrink-0">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-xl text-white tracking-wide leading-tight">
                      Local Partnership
                    </h3>
                    <h4 className="text-[11px] text-gold/80 font-google font-bold uppercase tracking-wider">
                      Community First
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-white/60 font-google font-normal leading-normal">
                  We aren&apos;t just working in Tulsa—we live here. We treat every vehicle like it belongs to our own family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}