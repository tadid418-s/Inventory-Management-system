"use client";
import { useState } from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  type BillingCycle = "monthly" | "yearly";
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const plans = [
    {
      name: "Basic",
      desc: "Essentials for small shops to stay on top of stock",
      monthlyPriceETB: 600,
      isMostPop: false,
      cta: "Choose Basic",
      features: [
        "1 location",
        "Up to 1,000 SKUs",
        "Real-time stock tracking",
        "CSV import & basic analytics",
      ],
    },
    {
      name: "Premium",
      desc: "Best for teams that need automation, forecasting, and integrations",
      monthlyPriceETB: 1200,
      isMostPop: true,
      cta: "Upgrade to premium",
      features: [
        "3 locations",
        "Up to 10,000 SKUs",
        "AI demand forecasting",
        "Smart reordering & purchase orders",
        "Shopify & marketplace sync",
        "Email & in‑app support",
      ],
    },
    {
      name: "Enterprise",
      desc: "For client-facing teams with advanced reporting and controls",
      monthlyPriceETB: 3900,
      isMostPop: false,
      cta: "Upgrade to enterprise",
      features: [
        "Unlimited locations & SKUs",
        "Team access & permissions",
        "Custom domains & EDI/ERP integrations",
        "Advanced dashboards & exports",
        "Dedicated onboarding & priority support",
      ],
    },
  ];

  const formatETB = (amount: number) =>
    amount.toLocaleString("en-ET", {
      style: "currency",
      currency: "ETB",
      maximumFractionDigits: 0,
    });

  const priceForCycle = (monthlyPriceETB: number, cycle: BillingCycle) => {
    if (cycle === "monthly") return monthlyPriceETB;
    return Math.round(monthlyPriceETB * 0.85);
  };

  return (
    <motion.section
      id="pricing"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="max-w-screen-xl w-full mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 items-center text-center">
        <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-border bg-background/70">Pricing</span>
        <h3 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Pricing for every stage of your inventory journey
        </h3>
        <p className="max-w-xl text-muted-foreground text-center">
          Start free. Upgrade when you need forecasting, automation, and scale.
        </p>
      </div>
      <div className="mt-6">
        <Tabs
          defaultValue={billing}
          onValueChange={(v) => setBilling((v as BillingCycle) ?? "monthly")}
          className="items-center"
        >
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly"></TabsContent>
          <TabsContent value="yearly"></TabsContent>
        </Tabs>
      </div>
      <div className="mt-16 gap-10 grid lg:grid-cols-3 place-content-center">
        {plans.map((item, idx) => (
          <Card
            key={idx}
            shadow="none"
            className={`relative rounded-[20px] p-[3px] will-change-transform ${
              item.isMostPop ? "sm:scale-110" : ""
            }`}
          >
            {item.isMostPop ? (
              <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#016FEE_70%,#C7DBFB_100%)]" />
            ) : (
              <span className="absolute inset-[-1000%] bg-border" />
            )}
            <div className="z-[2] flex flex-col justify-between w-full h-full bg-card rounded-[18px] p-5">
              <CardBody className="w-full flex items-start gap-3">
                <div className="flex flex-col">
                  <h4 className="text-xl font-light">{item.name}</h4>
                  <span className="text-muted-foreground text-sm font-light">
                    {item.desc}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  {billing === "yearly" ? (
                    <>
                      <span className="text-2xl font-light">
                        {formatETB(priceForCycle(item.monthlyPriceETB, "yearly"))}
                        <span className="text-sm"> / month</span>
                      </span>
                      <span className="text-xs text-muted-foreground">billed yearly</span>
                    </>
                  ) : (
                    <span className="text-2xl font-light">
                      {formatETB(priceForCycle(item.monthlyPriceETB, "monthly"))}
                      <span className="text-sm"> / month</span>
                    </span>
                  )}
                </div>

                <Divider />

                <div className="flex flex-col gap-5 pb-5">
                  <span className="text-muted-foreground text-sm font-light">
                    Includes
                  </span>
                  <ul className="flex flex-col gap-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="text-sm font-light">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
              <CardFooter className="p-0">
                <Button
                  className="w-full"
                  variant="solid"
                  color={item.isMostPop ? "primary" : "default"}
                >
                  {item.cta}
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
