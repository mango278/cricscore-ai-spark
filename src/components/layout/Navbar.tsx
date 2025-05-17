
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CS</span>
            </div>
            <span className="font-heading font-bold text-xl hidden sm:inline-block">
              CricScore AI
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
          >
            Features
          </a>
          <a 
            href="#demo" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('demo');
            }}
          >
            Demo
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            className="hidden md:flex" 
            variant="default"
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('demo');
              }}
            >
              Demo
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
            <Button 
              className="w-full mt-2" 
              variant="default"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
