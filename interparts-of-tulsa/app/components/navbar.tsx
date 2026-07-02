"use client";
import { Wrench } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center w-full px-14 py-4 bg-navy">
      <h1
        className="text-4xl font-bebas cursor-pointer relative z-10"
        onClick={() => router.push("/")}
      >
        <span className="text-gold">Interparts</span> of Tulsa
      </h1>
      <ul className="flex flex-row gap-6">
        <li
          className="relative group cursor-pointer"
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Services</span>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
        <li
          className="relative group cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Reviews</span>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
        <li
          className="relative group cursor-pointer"
          onClick={() =>
            document
              .getElementById("difference")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Why Us</span>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
        <li
          className="relative group cursor-pointer"
          onClick={() =>
            document
              .getElementById("reviews")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Reviews</span>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
        <li className="relative group cursor-pointer">
          <span>Contact</span>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </li>
      </ul>
      <button className="bg-gold text-navy font-semibold px-4 py-2 flex items-center gap-3">
        <Wrench size={18} className="text-navy fill-navy" />
        <p className="text-lg">Get a Quote</p>
      </button>
    </nav>
  );
}
