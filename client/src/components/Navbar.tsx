import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Employee Transport", href: "/employee-transport" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#D4AF37] rounded-full bg-black/50 group-hover:bg-[#D4AF37]/10 transition-colors">
              <span className="font-serif text-[#D4AF37] text-xl md:text-2xl font-bold">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-lg md:text-xl tracking-wide leading-none">CHAUDHARY</span>
              <span className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.2em] uppercase">Travels</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-[#D4AF37] cursor-pointer relative group",
                  location === link.href ? "text-[#D4AF37]" : "text-white/80"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : ""
                )} />
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:+919540726566" className="hidden md:flex items-center gap-2 text-white/90 hover:text-[#D4AF37] transition-colors">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium tracking-wide">+91 95407 26566</span>
          </a>
          
          <Link href="/get-quote">
            <Button variant="gold" size="sm" className="hidden md:inline-flex">
              Book Now
            </Button>
          </Link>

          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer",
                  location === link.href ? "text-[#D4AF37] bg-white/5" : "text-white/80"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </span>
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Link href="/get-quote">
            <Button variant="gold" className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
              Book a Ride
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
