import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reasons from "@/components/Reasons";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Reasons />
      <Accordion />
      <Footer />
    </div>
  );
}
