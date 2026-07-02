import Banner from "./components/banner";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Hero />
      <Banner />
    </main>
  );
}