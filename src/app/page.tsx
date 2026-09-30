import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ShortForm from "@/components/sections/ShortForm";
import LongForm from "@/components/sections/LongForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper selection:bg-accent selection:text-paper">
      <Header />
      <Hero />
      <ShortForm />
      <LongForm />
      <Footer />
    </main>
  );
}
