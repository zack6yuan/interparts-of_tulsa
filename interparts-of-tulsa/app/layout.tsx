import type { Metadata } from "next";
import { Google_Sans_Flex, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import SubNav from "./components/subnav";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/app/site-config";

const googleSansFlex = Google_Sans_Flex({
  subsets: ['latin'],
  variable: '--font-google-sans-flex',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Interparts of Tulsa | Auto Repair on Route 66",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Interparts of Tulsa | Auto Repair on Route 66",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: ["/newfront.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSansFlex.variable} ${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <body className={googleSansFlex.className}>
        <SubNav />
        <Navbar />
        {children}
      </body>
    </html>
  );
}