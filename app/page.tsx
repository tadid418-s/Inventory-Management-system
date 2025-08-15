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
import dynamic from "next/dynamic";

// Dynamically import AnimatedTextHalf with no SSR to prevent hydration issues
const AnimatedTextHalf = dynamic(() => import("@/components/AnimatedTextHalf"), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-2xl font-bold">INNOV8</div>
    </div>
  ),
});

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
      <AnimatedTextHalf />
    </main>
  );
}
