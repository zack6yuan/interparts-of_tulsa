/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MapPin, Phone, Clock } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error" | "recaptcha-missing";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzjvbkk";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setStatus("recaptcha-missing");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("g-recaptcha-response", recaptchaValue);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");
        form.reset();
        recaptchaRef.current?.reset();
        return;
      }

      setStatus("error");
      setErrorMessage(
        result?.error ||
          result?.errors?.[0]?.message ||
          "Something went wrong. Please try again or call us directly.",
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please try again or call us directly at (918) 834-1800.",
      );
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: Info Metadata */}
        <div className="w-full flex flex-col gap-8 md:gap-10 max-w-xl mx-auto lg:mx-0">
          <div className="flex flex-col items-start font-bebas tracking-wide leading-[0.95] w-full border-b border-white/10 pb-6">
            <p className="text-2xl md:text-3xl mb-3 text-white/30">
              // Quick Quote
            </p>
            <h2 className="text-5xl sm:text-7xl md:text-8xl text-gold mt-1">
              <span className="text-white">Let&apos;s</span> Talk.
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-white/80 text-base md:text-lg leading-relaxed font-google font-normal">
            <p>
              Located right on Route 66 in the heart of Tulsa. Call, stop in, or
              send us a message, and we&apos;ll get you back on the road fast.
            </p>
            <p>
              Whether it&apos;s a check engine light, a strange noise, or
              routine maintenance, our team will give you a straight answer. No
              upselling, no pressure.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 font-google text-sm sm:text-base">
            <div className="flex items-center gap-4">
              <MapPin className="stroke-gold shrink-0" size={20} />
              <a
                href="http://maps.google.com/?q=3615+E+11th+St+Tulsa+OK+74112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-gold transition-colors"
              >
                3615 E 11th St, Tulsa, OK 74112
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="stroke-gold shrink-0" size={20} />
              <a
                href="tel:+19188341800"
                className="text-white/80 hover:text-gold transition-colors"
              >
                (918) 834-1800
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="stroke-gold shrink-0" size={20} />
              <p className="text-white/80">
                Monday through Friday, 8:00AM to 4:30PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form Block */}
        <div className="w-full max-w-xl mx-auto lg:mx-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white/3 border border-white/10 rounded-sm p-5 sm:p-8"
          >
            <div className="flex flex-col gap-2 font-google">
              <label
                htmlFor="name"
                className="text-xs sm:text-sm text-white/60 font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div className="flex flex-col gap-2 font-google">
              <label
                htmlFor="email"
                className="text-xs sm:text-sm text-white/60 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-2 font-google">
              <label
                htmlFor="phone"
                className="text-xs sm:text-sm text-white/60 font-medium"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors"
                placeholder="(918) 555-0123"
              />
            </div>

            <div className="flex flex-col gap-2 font-google">
              <label
                htmlFor="message"
                className="text-xs sm:text-sm text-white/60 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us what's going on with your vehicle..."
              />
            </div>

            {RECAPTCHA_SITE_KEY ? (
              <div className="my-1 flex w-full justify-center overflow-hidden">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  theme="dark"
                  onChange={() => setStatus((s) => (s === "recaptcha-missing" ? "idle" : s))}
                  onExpired={() => recaptchaRef.current?.reset()}
                />
              </div>
            ) : (
              <p className="font-google text-sm text-red-400 text-center">
                reCAPTCHA is not configured. Please call us at (918) 834-1800.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting" || !RECAPTCHA_SITE_KEY}
              className="mt-2 bg-gold text-navy font-bebas text-xl tracking-wide py-3 rounded-sm hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer w-full"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="font-google text-sm text-green-400 text-center mt-1">
                Thanks, we&apos;ll be in touch soon.
              </p>
            )}

            {status === "recaptcha-missing" && (
              <p className="font-google text-sm text-yellow-400 text-center mt-1">
                Please complete the reCAPTCHA verification step.
              </p>
            )}

            {status === "error" && errorMessage && (
              <p className="font-google text-sm text-red-400 text-center mt-1">
                {errorMessage}
              </p>
            )}

            <p className="mt-4 text-center font-google text-[11px] leading-relaxed text-white/40 font-normal">
              By submitting this form, you agree to receive communications from
              Interparts of Tulsa regarding your service request. View our{" "}
              <a
                href="/terms"
                className="underline hover:text-gold transition-colors"
              >
                Terms & Conditions
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
