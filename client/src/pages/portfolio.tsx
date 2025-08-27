import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioComponent from "../components/Portfolio";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export default function PortfolioPage() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PortfolioComponent />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
