"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import {
  ChevronDownIcon,
  FaceIcon,
  GlobeIcon,
  OpenInNewWindowIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

export default function NavBar() {
  const menuItems = [
    { name: "Product", href: "#product" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <Navbar isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-inherit text-lg"
          >
            InventoryOS
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-2xl flex gap-3 justify-center items-center"
          >
            InventoryOS
          </a>
        </NavbarBrand>
        <NavbarItem>
          <Button as={Link} href="#product" variant="light" size="sm">
            Product
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#pricing" variant="light" size="sm">
            Pricing
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#testimonials" variant="light" size="sm">
            Testimonials
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#faq" variant="light" size="sm">
            FAQ
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<ChevronDownIcon />}
                variant="light"
                size="sm"
              >
                Dropdown
              </Button>
            </DropdownTrigger>
               <DropdownMenu
               aria-label="InventoryOS features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="realtime_visibility"
                description="Track stock levels across warehouses, stores, and channels in real time."
                startContent={<OpenInNewWindowIcon />}
              >
                Real-time Visibility
              </DropdownItem>
              <DropdownItem
                key="ai_forecasting"
                description="Predict demand with AI to optimize purchasing and reduce stockouts."
                startContent={<PersonIcon />}
              >
                AI Forecasting
              </DropdownItem>
              <DropdownItem
                key="smart_reordering"
                description="Automate purchase orders with supplier lead times and min/max thresholds."
                startContent={<GlobeIcon />}
              >
                Smart Reordering
              </DropdownItem>
              <DropdownItem
                key="multichannel_sync"
                description="Sync inventory with Shopify, Amazon, and POS systems without overselling."
                startContent={<TimerIcon />}
              >
                Multichannel Sync
              </DropdownItem>
              <DropdownItem
                key="analytics"
                description="Identify slow movers, dead stock, and reorder priorities with actionable analytics."
                startContent={<FaceIcon />}
              >
                Inventory Analytics
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            color="primary"
            href="#pricing"
            variant="solid"
            className="hidden sm:flex"
            size="sm"
          >
            Book a demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
              color="foreground"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
