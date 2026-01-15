import { useState } from "react";
import { Link } from "wouter";
import { 
  Phone, 
  MapPin, 
  Users, 
  Star, 
  ChevronRight,
  ShieldCheck,
  Clock,
  Award,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Layout from "@/components/Layout";

// Vehicle Data
const vehicles = [
  {
    id: 1,
    name: "Luxury Tempo Traveller",
    image: "/images/vehicles/tempo.jpg",
    seats: "13 | 17 | 20 | 26",
    description: "Experience group travel redefined. Our luxury tempo travellers offer reclining seats, ample legroom, and premium interiors for a journey as comfortable as the destination."
  },
  {
    id: 2,
    name: "Premium Mini Bus",
    image: "/images/vehicles/minibus.jpg",
    seats: "27 | 29 | 35",
    description: "The perfect balance of luxury and capacity. Ideal for corporate outings and extended family trips, featuring modern amenities and superior suspension for a smooth ride."
  },
  {
    id: 3,
    name: "Volvo Tourist Bus",
    image: "/images/vehicles/bus.jpg",
    seats: "37 | 45 | 49",
    description: "Travel in grand style. Our fleet of Volvo buses brings aviation-grade comfort to the road, with panoramic windows, climate control, and entertainment systems."
  },
  {
    id: 4,
    name: "Executive Fleet",
    image: "/images/vehicles/innova-crysta.jpg",
    seats: "4 | 6 | 7",
    description: "From the reliable Dzire to the commanding Innova Crysta, our car fleet is meticulously maintained to ensure punctuality and prestige for every business meeting or airport transfer."
  }
];

// Features
const features = [
  {
    icon: Award,
    title: "Premium Fleet",
    description: "Meticulously maintained vehicles that define luxury and reliability."
  },
  {
    icon: ShieldCheck,
    title: "Verified Chauffeurs",
    description: "Professional, uniformed drivers vetted for safety and courtesy."
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description: "Round-the-clock support to manage your itinerary changes seamlessly."
  },
  {
    icon: MapPin,
    title: "Pan-India Network",
    description: "Consistent premium service across 11 major Indian cities."
  }
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Director, TechCorp",
    text: "Chaudhary Travels has transformed our corporate logistics. The attention to detail and punctuality is unmatched in the industry."
  },
  {
    id: 2,
    name: "Priya Malhotra",
    role: "Wedding Planner",
    text: "For my premium clients, I only trust Chaudhary Travels. Their fleet quality adds that extra touch of elegance to every wedding entrance."
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "International Traveler",
    text: "The airport transfer service is flawless. Clean cars, polite drivers, and always on time. A truly five-star experience on the road."
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received! Our concierge will call you shortly.");
    setFormData({ from: "", to: "", date: "", phone: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-luxury.jpg" 
            alt="Luxury Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-sm">
                <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium tracking-wide uppercase">Premium Concierge Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
                Travel with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">Distinction</span>
              </h1>
              
              <p className="text-lg text-white/80 max-w-xl leading-relaxed font-light">
                Experience the art of travel with Chaudhary Travels. From luxury corporate fleets to bespoke wedding transportation, we orchestrate every journey with precision and elegance.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/get-quote">
                  <Button variant="gold" size="lg" className="text-base px-8">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/fleet">
                  <Button variant="outline-gold" size="lg" className="text-base px-8">
                    View Fleet
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Booking Form */}
            <div className="lg:ml-auto w-full max-w-md animate-in slide-in-from-right duration-700 delay-200">
              <Card className="bg-black/40 backdrop-blur-md border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white">Begin Your Journey</h3>
                    <p className="text-white/60 text-sm">Get a customized quote for your premium travel needs.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium">From</label>
                        <Input 
                          placeholder="Pickup Location" 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4AF37]"
                          value={formData.from}
                          onChange={(e) => setFormData({...formData, from: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium">To</label>
                        <Input 
                          placeholder="Drop Location" 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4AF37]"
                          value={formData.to}
                          onChange={(e) => setFormData({...formData, to: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium">Date</label>
                      <Input 
                        type="date" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4AF37] [color-scheme:dark]"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium">Phone</label>
                      <Input 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4AF37]"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <Button type="submit" variant="gold" className="w-full h-12 text-base mt-2">
                      Get Instant Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#050505] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">The Chaudhary Standard</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase">Our Collection</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white">Premium Fleet</h2>
            </div>
            <Link href="/fleet">
              <Button variant="outline-gold" className="group">
                View All Vehicles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="group relative overflow-hidden rounded-2xl aspect-[16/10]">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-white">{vehicle.name}</h3>
                    <span className="px-3 py-1 rounded-full border border-white/20 text-xs text-white/80 backdrop-blur-sm">
                      {vehicle.seats} Seats
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {vehicle.description}
                  </p>
                  <Button variant="gold" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Client Experiences</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Trusted by Fortune 500 companies and discerning travelers across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/5 border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-white/80 italic font-serif text-lg mb-8 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-[#D4AF37] text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D4AF37]" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-black font-bold mb-6">Ready for an Exceptional Journey?</h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
            Contact our concierge team today to plan your next corporate event, wedding, or luxury tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote">
              <Button className="bg-black text-white hover:bg-black/80 border-none h-14 px-8 text-lg">
                Get Custom Quote
              </Button>
            </Link>
            <a href="tel:+919540726566">
              <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black/10 h-14 px-8 text-lg">
                <Phone className="w-5 h-5 mr-2" /> Call Concierge
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
