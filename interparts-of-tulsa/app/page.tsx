import Banner from "./components/banner";
import TheDifference from "./components/difference";
import Hero from "./components/hero";
import OurStory from "./components/ourstory";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Location from "./components/location";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Hero />
      <Banner />
      <Services />
      <hr className="w-full border-t border-gold/50" />
      <OurStory />
      <hr className="w-full border-t border-gold/50" />
      <TheDifference />
      <hr className="w-full border-t border-gold/50" />
      <Testimonials />
      <hr className="w-full border-t border-gold/50" />
      <Location />
      <hr className="w-full border-t border-gold/50" />
      <Contact />
      <hr className="w-full border-t border-gold/50" />
      <Footer />
    </main>
  );
}