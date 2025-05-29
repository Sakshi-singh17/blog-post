
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";


export default function Home() {
  return (
   <main className="px-6 py-3">
    <HeroSection />
    <Cards />
    <Footer />
   </main>
  );
}
