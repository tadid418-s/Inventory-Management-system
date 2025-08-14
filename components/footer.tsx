import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-between items-center">
      <h5 className="font-medium bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
        InventoryOS — Smart inventory for modern teams
      </h5>

      <Button as={Link} href="#pricing" color="default" variant="light" size="sm">
        View pricing
      </Button>
    </footer>
  );
};

export default Footer;
