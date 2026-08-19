/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I know a repair is actually necessary?",
    answer:
      "We tell you exactly what's wrong before we touch a wrench. Every visit gets a printed inspection sheet with photos of what we found — not a verbal estimate that shifts once your car is on the lift.",
  },
  {
    question: "Will the final bill match the quote?",
    answer:
      "The price you see is the price you pay. If we open something up and find additional work, we stop and call you first. Nothing gets added to your invoice without your approval.",
  },
  {
    question: "How long will my car be in the shop?",
    answer:
      "We give our best estimate when you drop off your vehicle. If a part is backordered or the job runs long, you hear it from us the same day — you should never have to call and ask.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section
      id="faq"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden md:py-24"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col gap-8 md:gap-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8 text-left">
          <div className="flex flex-col items-start font-bebas tracking-wide leading-[0.95]">
            <p className="text-2xl md:text-3xl mb-3 md:mb-4 text-white/30">// FAQ</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
              Frequently Asked
            </h2>
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold mt-1">
              Questions.
            </p>
          </div>

          <p className="font-google text-sm md:text-base text-slate-400 max-w-sm leading-relaxed">
            Still have something we didn&apos;t cover? Call the shop and ask for a
            technician — not a call center.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-white/10">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="group w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/60"
                  >
                    <span
                      className={`font-bebas text-2xl md:text-4xl tracking-wide transition-colors duration-300 ${
                        isOpen ? "text-gold" : "text-white group-hover:text-gold/80"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <Plus size={28} strokeWidth={1.5} />
                    </span>
                  </button>
                </h3>

                {/* Height-animated panel (0fr -> 1fr grid trick) */}
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-google text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl pb-6 md:pb-8 pr-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}