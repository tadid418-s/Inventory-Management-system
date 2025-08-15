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
    <Navbar 
      isBlurred 
      maxWidth="xl" 
      className="px-4 sm:px-6 lg:px-8"
      classNames={{
        wrapper: "px-0",
        base: "bg-background/95 backdrop-blur-md",
      }}
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Brand */}
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="font-light tracking-tighter text-inherit text-lg hover:opacity-80 transition-opacity"
          >
            InventoryOS
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarBrand className="mr-8">
          <Link
            href="/"
            className="font-light tracking-tighter text-2xl hover:opacity-80 transition-opacity"
          >
            InventoryOS
          </Link>
        </NavbarBrand>
        
        <div className="flex items-center gap-2">
          <NavbarItem>
            <Button as={Link} href="#product" variant="light" size="sm" className="px-3">
              Product
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#pricing" variant="light" size="sm" className="px-3">
              Pricing
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#testimonials" variant="light" size="sm" className="px-3">
              Testimonials
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#faq" variant="light" size="sm" className="px-3">
              FAQ
            </Button>
          </NavbarItem>
        </div>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<ChevronDownIcon className="text-default-500" />}
                variant="light"
                size="sm"
                className="px-3"
              >
                Features
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

      {/* Right Side Actions */}
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            color="primary"
            href="#pricing"
            variant="solid"
            size="sm"
            className="px-4"
          >
            Book a demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-lg"
              href={item.href}
              size="lg"
              color="foreground"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="pt-4">
          <Button
            as={Link}
            color="primary"
            href="#pricing"
            variant="solid"
            className="w-full"
            size="lg"
          >
            Book a demo
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
