"use client";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, Scale, ShieldCheck } from "lucide-react";
import JsonLd from "@/app/components/json-ld";
import { termsBreadcrumbSchema } from "@/app/structured-data";

export default function TermsAndConditions() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full min-h-screen bg-navy text-white font-google overflow-hidden py-16 md:py-24">
      <JsonLd data={termsBreadcrumbSchema} />
      {/* Background Subtle Blueprint Grid for Site Cohesion */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Back Link to Home */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors mb-8 group font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wide mb-3">
            Terms & <span className="text-gold">Conditions</span>
          </h1>
          <p className="text-sm text-white/40 font-normal">
            Last Updated: July 2026
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="flex gap-3 items-start bg-white/3 border border-white/5 rounded-sm p-4">
            <Scale className="text-gold shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-white">Transparent Estimates</h4>
              <p className="text-xs text-white/60 mt-1">We always require your formal authorization before any wrenches turn.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-white/3 border border-white/5 rounded-sm p-4">
            <ShieldCheck className="text-gold shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-white">Secure Processing</h4>
              <p className="text-xs text-white/60 mt-1">Information shared via our Quick Quote tools is strictly protected.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start bg-white/3 border border-white/5 rounded-sm p-4">
            <ShieldAlert className="text-gold shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-white">Vehicle Care</h4>
              <p className="text-xs text-white/60 mt-1">Standard industry limitations apply to vehicle storage and diagnostics.</p>
            </div>
          </div>
        </div>

        {/* Legal Text Content Body */}
        <div className="flex flex-col gap-8 text-white/80 text-sm sm:text-base font-normal leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bebas tracking-wider text-gold">1. Agreement to Terms</h2>
            <p>
              By accessing and utilizing the website or requesting quotes through our automated online system, you agree to be bound by these Terms and Conditions. If you do not agree to all provisions within this document, you are explicitly prohibited from using our site features.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bebas tracking-wider text-gold">2. Service Estimates & Authorizations</h2>
            <p>
              Any quotes, range calculations, or figures delivered through our website’s messaging portals represent a preliminary evaluation based purely on user-provided symptoms. These figures are informational estimations. 
            </p>
            <p>
              A formal, binding repair authorization contract must be signed in person or acknowledged electronically before physical diagnostic work or manual repairs commence on your motor vehicle.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bebas tracking-wider text-gold">3. User Conduct & Messaging Submission</h2>
            <p>
              When utilizing our online form blocks, you represent and warrant that all data input (including legal name, contact telephone configurations, and email routing points) is accurate and belongs to you. You agree not to transmit malicious scripts, automated bot tracking files, or offensive text strings.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bebas tracking-wider text-gold">4. Storage & Property Mechanics Liens</h2>
            <p>
              Vehicles left on site following service finalization may be subjected to standard garage storage fee configurations if pickup thresholds are exceeded. Pursuant to local regulations, standard mechanics lien rules protect our right to secure outstanding balances relative to completed automotive labor.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-bebas tracking-wider text-gold">5. Changes to Terms</h2>
            <p>
              We reserve the absolute right to modify or adjust these responsive digital legal terms at any moment without targeted direct notifications. It remains your responsibility to monitor adjustments upon utilizing our route tools.
            </p>
          </section>

        </div>

        {/* Footer Area */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {currentYear} Interparts of Tulsa. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}