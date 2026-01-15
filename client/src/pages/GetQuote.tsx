import { useState } from "react";
import { 
  Car, 
  Calendar, 
  MapPin, 
  Users, 
  Briefcase, 
  Plane, 
  PartyPopper 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const tripTypes = [
  { id: "corporate", label: "Corporate", icon: Briefcase },
  { id: "wedding", label: "Wedding", icon: PartyPopper },
  { id: "airport", label: "Airport Transfer", icon: Plane },
  { id: "outstation", label: "Outstation", icon: MapPin },
];

const vehicleTypes = [
  { id: "sedan", label: "Luxury Sedan", seats: "4" },
  { id: "suv", label: "Premium SUV", seats: "6-7" },
  { id: "tempo", label: "Tempo Traveller", seats: "12-26" },
  { id: "bus", label: "Luxury Bus", seats: "35-50" },
];

export default function GetQuote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tripType: "corporate",
    vehicleType: "sedan",
    pickup: "",
    drop: "",
    date: "",
    passengers: "",
    name: "",
    phone: "",
    email: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted successfully! We will contact you shortly.");
    // Reset form or redirect
  };

  return (
    <Layout>
      <div className="min-h-[80vh] bg-[#050505] py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Plan Your Journey</h1>
            <p className="text-white/60 text-lg">Tell us about your travel requirements and let us craft the perfect itinerary for you.</p>
          </div>

          <Card className="max-w-4xl mx-auto bg-[#0a0a0a] border-[#D4AF37]/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Trip Type Selection */}
                <div className="space-y-4">
                  <label className="text-sm text-[#D4AF37] uppercase tracking-wider font-medium">Type of Service</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {tripTypes.map((type) => (
                      <div 
                        key={type.id}
                        onClick={() => setFormData({...formData, tripType: type.id})}
                        className={cn(
                          "cursor-pointer p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-3 hover:border-[#D4AF37]/50",
                          formData.tripType === type.id 
                            ? "bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37]" 
                            : "bg-white/5 border-white/10 text-white/60"
                        )}
                      >
                        <type.icon className="w-6 h-6" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Journey Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-sm text-[#D4AF37] uppercase tracking-wider font-medium">Journey Details</label>
                    <div className="space-y-4">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                        <Input 
                          placeholder="Pickup Location" 
                          className="pl-10 bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                          value={formData.pickup}
                          onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                        />
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                        <Input 
                          placeholder="Drop Location" 
                          className="pl-10 bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                          value={formData.drop}
                          onChange={(e) => setFormData({...formData, drop: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                          <Input 
                            type="date"
                            className="pl-10 bg-white/5 border-white/10 text-white focus:border-[#D4AF37] [color-scheme:dark]"
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                          />
                        </div>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                          <Input 
                            type="number"
                            placeholder="Passengers" 
                            className="pl-10 bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                            value={formData.passengers}
                            onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Selection */}
                  <div className="space-y-4">
                    <label className="text-sm text-[#D4AF37] uppercase tracking-wider font-medium">Preferred Vehicle</label>
                    <div className="grid grid-cols-1 gap-3">
                      {vehicleTypes.map((vehicle) => (
                        <div 
                          key={vehicle.id}
                          onClick={() => setFormData({...formData, vehicleType: vehicle.id})}
                          className={cn(
                            "cursor-pointer p-3 rounded-lg border transition-all duration-300 flex items-center justify-between hover:border-[#D4AF37]/50",
                            formData.vehicleType === vehicle.id 
                              ? "bg-[#D4AF37]/10 border-[#D4AF37] text-white" 
                              : "bg-white/5 border-white/10 text-white/60"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Car className={cn("w-5 h-5", formData.vehicleType === vehicle.id ? "text-[#D4AF37]" : "text-white/40")} />
                            <span className="font-medium">{vehicle.label}</span>
                          </div>
                          <span className="text-xs opacity-60">{vehicle.seats} Seats</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <label className="text-sm text-[#D4AF37] uppercase tracking-wider font-medium">Contact Information</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <Input 
                      placeholder="Phone Number" 
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <Input 
                      type="email"
                      placeholder="Email Address" 
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <Input 
                    placeholder="Any special requirements? (e.g. Child seat, Extra luggage space)" 
                    className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  />
                </div>

                <Button type="submit" variant="gold" className="w-full h-14 text-lg font-semibold tracking-wide">
                  Request Custom Quote
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
