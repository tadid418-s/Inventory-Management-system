"use client";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "COO at UrbanThreads Retail",
      avatar: "https://i.pravatar.cc/150?img=1",
      content:
        "InventoryOS cut our stockouts by 35% in 3 months and slashed excess inventory across 4 stores. The AI reorder points just work.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Operations at Scale Co",
      avatar: "https://i.pravatar.cc/150?img=3",
      content:
        "Connected Shopify, Amazon, and our POS in a day. No more overselling. Replenishment is twice as fast now.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "VP Supply Chain at DataFlow",
      avatar: "https://i.pravatar.cc/150?img=5",
      content:
        "Forecast accuracy improved week over week. We finally trust our numbers and plan purchases with confidence.",
      rating: 5,
    },
    {
      name: "Robert Taylor",
      role: "CTO at FinanceFlow",
      avatar: "https://i.pravatar.cc/150?img=15",
      content:
        "Role-based permissions and audit logs made compliance straightforward. Uptime has been rock solid.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Director of Operations at StreamlineOps",
      avatar: "https://i.pravatar.cc/150?img=17",
      content:
        "Support helped us model supplier lead times and minimums. Purchase orders are now on autopilot.",
      rating: 5,
    },
    {
      name: "Kevin Lee",
      role: "Founder at NextGen Solutions",
      avatar: "https://i.pravatar.cc/150?img=19",
      content:
        "Tried 5 inventory tools. This is the first that scaled with us without duct-tape spreadsheets.",
      rating: 5,
    },
    {
      name: "Sophie Anderson",
      role: "Product Lead at InnovateLab",
      avatar: "https://i.pravatar.cc/150?img=21",
      content:
        "The slow-mover report and dead-stock alerts paid for the subscription in the first month.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Engineering Manager at TechBridge",
      avatar: "https://i.pravatar.cc/150?img=23",
      content:
        "Onboarding took a week including data cleanup. The team held our hand through every step.",
      rating: 5,
    },
    {
      name: "Elena Petrov",
      role: "CEO at GrowthMetrics",
      avatar: "https://i.pravatar.cc/150?img=25",
      content:
        "We expanded to 8 locations without breaking our workflows. Transfers and bin tracking are super clear.",
      rating: 5,
    },
    {
      name: "Michael Chang",
      role: "Head of Product at DataDriven",
      avatar: "https://i.pravatar.cc/150?img=27",
      content:
        "Dashboards are exactly what leadership wanted: turns, aging, and replenishment priorities in one place.",
      rating: 5,
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Trusted by Retail, Wholesale, and DTC Teams
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            Join teams reducing stockouts and unlocking cash with InventoryOS.
          </p>
        </motion.div>

        <InfiniteMovingCards
          className="mt-2"
          items={testimonials.map((t) => ({
            quote: t.content,
            name: t.name,
            title: t.role,
            rating: t.rating,
          }))}
          direction="right"
          speed="slow"
          pauseOnHover
        />
      </div>
    </section>
  );
}
