import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  const linkClass =
    "text-sm text-muted-foreground hover:text-foreground transition-colors";

  return (
    <footer className="w-full px-0 py-16 md:py-24">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-light/20 dark:from-card dark:to-light/10" />

          {/* Constrain inner content to align with navbar brand gutter */}
          <div className="relative z-[1] py-12 md:py-16 max-w-screen-xl mx-auto pr-4 sm:pr-6 lg:pr-8 pl-0 sm:pl-2 lg:pl-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-light tracking-tighter text-2xl">InventoryOS</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  InventoryOS empowers teams to track stock in real time, forecast demand with AI, and automate reordering across channels.
                </p>

                <div className="flex items-center gap-3">
                  <Link href="#" aria-label="X / Twitter" className="text-muted-foreground hover:text-foreground">
                    <TwitterLogoIcon />
                  </Link>
                  <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
                    <LinkedInLogoIcon />
                  </Link>
                  <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
                    <GitHubLogoIcon />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">Product</span>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="#product" className={linkClass}>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className={linkClass}>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className={linkClass}>
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="#cta" className={linkClass}>
                      Get started
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">Resources</span>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="#faq" className={linkClass}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className={linkClass}>
                      Book a demo
                    </Link>
                  </li>
                  <li>
                    <Link href="#product" className={linkClass}>
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Divider className="my-8" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>© {year} InventoryOS. All rights reserved.</span>
                <span className="text-border">|</span>
                <span>
                  Made by: <Link href="/" className="text-xs underline font-semibold underline-offset-2 decoration-1 text-muted-foreground hover:text-foreground">INNOV8</Link>
                </span>
              </div>
              <div className="flex items-center gap-6">
                <Link href="#" className={linkClass}>
                  Privacy Policy
                </Link>
                <Link href="#" className={linkClass}>
                  Terms of Service
                </Link>
                <Link href="#" className={linkClass}>
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
