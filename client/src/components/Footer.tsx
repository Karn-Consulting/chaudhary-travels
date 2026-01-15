import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center border border-[#D4AF37] rounded-full bg-black/50">
                <span className="font-serif text-[#D4AF37] text-xl font-bold">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif text-xl tracking-wide leading-none">CHAUDHARY</span>
                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase">Travels</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Experience the epitome of luxury travel with Chaudhary Travels. 
              Premium chauffeur services tailored for those who demand excellence.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Fleet", href: "/fleet" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Corporate Travel",
                "Wedding Transportation",
                "Airport Transfers",
                "Employee Transport",
                "Luxury Car Rentals",
              ].map((service) => (
                <li key={service} className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  123 Luxury Lane, Business District,<br />New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a href="tel:+919540726566" className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors">
                  +91 95407 26566
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@chaudharytravels.in" className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors">
                  info@chaudharytravels.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Chaudhary Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy">
              <span className="text-white/40 hover:text-[#D4AF37] text-xs transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="text-white/40 hover:text-[#D4AF37] text-xs transition-colors cursor-pointer">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
