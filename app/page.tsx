import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
