/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useState, useRef } from "react";
import { MapPin, Phone, Clock, ShieldAlert } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "recaptcha-missing"
  >("idle");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    // 1. Extract the reCAPTCHA token value from the ref
    const recaptchaValue = recaptchaRef.current?.getValue();

    if (!recaptchaValue) {
      setStatus("recaptcha-missing");
      return;
    }

    // 2. Append the reCAPTCHA token to match Formspree's background validation rules
    data.append("g-recaptcha-response", recaptchaValue);

    try {
      const response = await fetch("https://formspree.io/f/mvzjvbkk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        recaptchaRef.current?.reset(); // Clear the reCAPTCHA checkbox state on success
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  console.log("RECAPTCHA KEY:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat overflow-hidden py-16 md:py-24"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col gap-8 md:gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-start md:items-end md:justify-end gap-6 border-b border-white/10 pb-8 text-left md:text-right">
          <div className="flex flex-col items-start md:items-end font-bebas tracking-wide leading-[0.95] w-full">
            <p className="text-2xl md:text-3xl mb-3 md:mb-4 text-white/30">
              // Quick Quote
            </p>
            <h2 className="text-5xl sm:text-7xl md:text-8xl text-gold mt-1">
              <span className="text-white">Let&apos;s</span> Talk.
            </h2>
          </div>
        </div>

        {/* Form & Info Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Info Metadata */}
          <div className="w-full flex flex-col gap-8 md:gap-10 max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-col gap-4 text-white/80 text-base md:text-lg leading-relaxed font-google font-normal">
              <p>
                Located right on Route 66 in the heart of Tulsa. Call, stop in,
                or send us a message, and we&apos;ll get you back on the road
                fast.
              </p>
              <p>
                Whether it&apos;s a check engine light, a strange noise
                you&apos;ve been ignoring, or routine maintenance you&apos;ve
                been putting off, our team will give you a straight answer. No
                upselling, no pressure. Just tell us what&apos;s going on and
                we&apos;ll take it from there.
              </p>
              <p>
                Most repairs are completed same-day, so you&apos;re not stuck
                without a car any longer than you have to be.
              </p>
              <p>
                Have a quick question? Feel free to give us a call as well. We&apos;d
                be more than happy to help you.
              </p>
              <div className="flex flex-col gap-3 border border-white/10 rounded-sm p-4 bg-white/3">
                <div className="flex flex-row items-center gap-2">
                  <ShieldAlert className="text-gold"/>
                  <p className="font-bebas text-2xl">Form Submission Notice</p>
                </div>
                <p>By submitting this form, you agree to receive communications from Interparts of Tulsa regarding your service request. This site is protected by <span className="text-gold hover:text-gold/60 transition duration-200"><a href="https://www.google.com/recaptcha/about/">ReCAPTCHA</a></span>, the <span className="text-gold hover:text-gold/60 transition duration-200"><a href="https://policies.google.com/privacy">Google Privacy Policy</a></span> and our <span className="text-gold hover:text-gold/60 transition duration-200"><a href="/terms">Terms and Conditions</a></span>.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 border-t border-white/10 pt-8 font-google font-normal text-sm sm:text-base">
              <div className="flex items-center gap-4">
                <MapPin className="stroke-gold shrink-0" size={20} />
                <a
                  href="https://maps.google.com/?q=3615+E+11th+St,+Tulsa,+OK+74112"
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
              method="POST" // <-- Add this
              action="https://formspree.io/f/mvzjvbkk" // <-- Add this fallback
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
                  className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors font-normal"
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
                  className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors font-normal"
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
                  className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors font-normal"
                  placeholder="(123) 456-7890"
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
                  className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-gold transition-colors resize-none font-normal"
                  placeholder="Tell us what's going on with your vehicle..."
                />
              </div>

              {/* 3. Render reCAPTCHA v2 Widget centered perfectly */}
              <div className="my-1 flex w-full justify-center overflow-hidden">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcX4EEtAAAAADnhoqO2SJoDA19bVJLZUFhGNnnU"
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 bg-gold text-navy font-bebas text-xl tracking-wide py-3 rounded-sm hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="font-google text-sm text-green-400 text-center font-normal mt-1">
                  Thanks, we&apos;ll be in touch soon.
                </p>
              )}
              {status === "recaptcha-missing" && (
                <p className="font-google text-sm text-yellow-400 text-center font-normal mt-1">
                  Please complete the reCAPTCHA verification step.
                </p>
              )}
              {status === "error" && (
                <p className="font-google text-sm text-red-400 text-center font-normal mt-1">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
