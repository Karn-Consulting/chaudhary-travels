import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Briefcase, Wifi, Coffee } from "lucide-react";

const fleet = [
  {
    id: "tempo",
    name: "Luxury Tempo Traveller",
    image: "/images/vehicles/tempo.jpg",
    capacity: "13-26 Seater",
    description: "The ultimate choice for group travel. Featuring reclining seats, individual AC vents, and ample luggage space.",
    features: ["Reclining Seats", "Individual AC", "Charging Points", "Music System"]
  },
  {
    id: "minibus",
    name: "Premium Mini Bus",
    image: "/images/vehicles/minibus.jpg",
    capacity: "27-35 Seater",
    description: "Perfect for mid-sized groups. Combines the agility of a smaller vehicle with the comfort of a large coach.",
    features: ["Pushback Seats", "Air Suspension", "Reading Lights", "PA System"]
  },
  {
    id: "bus",
    name: "Volvo Tourist Bus",
    image: "/images/vehicles/bus.jpg",
    capacity: "45-49 Seater",
    description: "Long-distance travel in absolute comfort. Our Volvo fleet offers a smooth, silent, and luxurious journey.",
    features: ["Climate Control", "Video Coach", "Air Suspension", "Emergency Exit"]
  },
  {
    id: "innova",
    name: "Innova Crysta",
    image: "/images/vehicles/innova-crysta.jpg",
    capacity: "6-7 Seater",
    description: "The gold standard for executive travel. Spacious, reliable, and perfect for both city and outstation trips.",
    features: ["Leather Seats", "Captain Seats", "Climate Control", "GPS Tracking"]
  }
];

export default function Fleet() {
  return (
    <Layout>
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase">Our Collection</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 mb-6">World-Class Fleet</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Each vehicle in our fleet is meticulously maintained to ensure safety, comfort, and reliability.
            </p>
          </div>

          <div className="space-y-24">
            {fleet.map((vehicle, index) => (
              <div key={vehicle.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-serif text-white">{vehicle.name}</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    <Users className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-white/80 text-sm">{vehicle.capacity}</span>
                  </div>
                  
                  <p className="text-white/70 text-lg leading-relaxed">
                    {vehicle.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link href="/get-quote">
                      <Button variant="gold" size="lg">
                        Book This Vehicle
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
