"use client";

import { 
  BarChartIcon, 
  ClockIcon, 
  Crosshair2Icon, 
  MagnifyingGlassIcon, 
  BellIcon 
} from "@radix-ui/react-icons";
import { GlowingEffect } from "./ui/glowing-effect";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="relative max-w-screen-xl w-full mx-auto px-4 py-24 gap-5 md:px-8 flex flex-col justify-center items-center">
      {/* Top Right Circular Glare */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-start pointer-events-none z-0"
      >
        <div className="w-full flex justify-end items-start pr-0 pt-0">
          <div className="w-32 h-32 bg-light blur-[60px] rounded-full max-sm:opacity-60 sm:opacity-80 [will-change:transform]"></div>
        </div>
      </motion.div>

      {/* Bottom Left Circular Glare */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -bottom-32 flex justify-start items-end pointer-events-none z-0"
      >
        <div className="w-full flex justify-start items-end pl-0 pb-0">
          <div className="w-40 h-40 bg-light blur-[70px] rounded-full max-sm:opacity-60 sm:opacity-80 [will-change:transform]"></div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-3 text-center mb-16 relative z-10">
        <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Powerful Features for Modern Inventory Management
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-center">
          Everything you need to take control of your inventory with intelligent automation and real-time insights.
        </p>
      </div>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 relative z-10">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<BarChartIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="AI-Powered Stock Forecasting"
          description="Prevent stockouts before they happen and access your inventory data at all times."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<ClockIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Real-Time Inventory Tracking"
          description="View stock levels across all locations instantly with live updates and real-time synchronization."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Crosshair2Icon className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Multi-Location Management"
          description="Keep warehouses, branches, and stores in perfect sync with centralized inventory control."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<MagnifyingGlassIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Barcode & QR Scanning"
          description="Update inventory in seconds with mobile or handheld scanners for lightning-fast operations."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<BellIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Low Stock & Expiry Alerts"
          description="Get notified before problems happen with proactive alerts and smart notifications."
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
