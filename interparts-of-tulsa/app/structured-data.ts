// JSON-LD structured data. Rendered as <script type="application/ld+json"> in
// layout.tsx and app/terms/page.tsx — see the `JsonLd` component below for the
// XSS-escaping this requires.
//
// Everything here describes the same business as the visible page, so if the
// address, phone, or hours change in app/components/, change them here too.
// Validate edits at https://validator.schema.org/ before merging.
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/app/site-config";

// Stable @id so other nodes can reference the business instead of repeating it.
const BUSINESS_ID = `${SITE_URL}/#business`;

// Machine-readable service list. Intentionally written for crawlers rather than
// copied verbatim from services.tsx — the visible copy is marketing prose, this
// is a plain catalog. Keep the six titles in sync; the wording can differ.
const SERVICES: ReadonlyArray<{ name: string; description: string }> = [
  {
    name: "AC/Heater Repair",
    description:
      "Climate control diagnostics, leak detection, refrigerant recharges, blower motor repair, and compressor replacement.",
  },
  {
    name: "Brakes & Suspension",
    description:
      "Brake pad and rotor replacement, caliper service, shocks, struts, control arms, and steering component repair.",
  },
  {
    name: "General Repair",
    description:
      "Fluid leaks, belt replacement, and full mechanical diagnostics for daily drivers.",
  },
  {
    name: "Engine Repair",
    description:
      "Engine diagnostics, timing belts, head gaskets, oil leak repair, and mechanical rebuilds.",
  },
  {
    name: "Transmission Repair",
    description:
      "Transmission fluid flushes, clutch adjustment, torque converter repair, and rebuilds or replacement.",
  },
  {
    name: "Tune-ups and Maintenance",
    description:
      "Spark plug replacement, filter changes, fluid flushes, safety checks, and mileage-interval preventative maintenance.",
  },
];

// AutoRepair is a LocalBusiness subtype — more specific than LocalBusiness and
// still inherits every local-business property Google looks for.
//
// Deliberately NO aggregateRating or Review nodes. The testimonials in
// testimonials.tsx are self-hosted reviews of this business, and Google's
// structured data policy disallows self-serving review markup for
// LocalBusiness. Marking them up risks a manual action. Reviews belong on the
// Google Business Profile instead.
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+1-918-834-1800",
  foundingDate: "1980",
  image: `${SITE_URL}/newfront.jpg`,
  logo: `${SITE_URL}/interparts-logo.webp`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3615 E 11th St",
    addressLocality: "Tulsa",
    addressRegion: "OK",
    postalCode: "74112",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Tulsa",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  // Only profiles confirmed to exist. Adding an unverified URL is worse than
  // omitting one — add the Google Business Profile and Yelp URLs here once
  // their exact addresses are known.
  sameAs: ["https://www.facebook.com/interpartsoftulsa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": BUSINESS_ID },
      },
    })),
  },
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": BUSINESS_ID },
} as const;

export const termsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms & Conditions",
      item: `${SITE_URL}/terms`,
    },
  ],
} as const;
