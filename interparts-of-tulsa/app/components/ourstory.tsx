/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

export default function OurStory() {
  return (
    <div
      id="Story"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-24"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-14 relative z-10 flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-end gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col items-end font-bebas tracking-wide leading-[0.95]">
            <p className="text-3xl mb-4 text-white/30">// Our Story</p>
            <h1 className="text-6xl md:text-8xl text-white">TULSA BUILT.</h1>
            <h2 className="text-6xl md:text-8xl text-gold mt-1">TULSA PROUD.</h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center lg:items-start justify-between">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/neonsign.png"
              width={500}
              height={500}
              alt="Store front of Interparts of Tulsa with neon sign and painted Golden Driller on front of building"
              className="object-contain rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 text-white/80 text-lg leading-relaxed max-w-xl">
            <p>
              Interparts of Tulsa opened its doors in 1979 with a simple promise:
              honest work, fair prices, and the kind of service that brings
              neighbors back. That hasn&apos;t changed.
            </p>
            <p>
              We&apos;ve grown from a single bay shop to a full-service facility,
              but we&apos;ve never lost what matters most – the personal relationship
              between a mechanic and the community he serves.
            </p>
            <p>
              Backed by generations of Tulsa families that keep coming back, Interparts
              is not a chain, not a franchise – we&apos;re a family-owned business that
              happens to know more about your vehicle than anyone else in town.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}