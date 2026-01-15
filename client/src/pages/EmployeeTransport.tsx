import { useState } from "react";
import { Link } from "wouter";
import { 
  Shield, 
  Clock, 
  MapPin, 
  Smartphone, 
  CheckCircle2,
  Building2,
  Users2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const benefits = [
  {
    icon: Clock,
    title: "Punctuality Guaranteed",
    description: "Our advanced tracking systems and disciplined drivers ensure your workforce arrives on time, every time."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "GPS tracking, panic buttons, and verified drivers make us the safest choice for employee transportation."
  },
  {
    icon: Smartphone,
    title: "Tech-Enabled",
    description: "Real-time tracking app for employees and admin dashboard for your transport team."
  },
  {
    icon: Building2,
    title: "Cost Efficient",
    description: "Optimized routing and right-sized vehicles help reduce your transportation costs significantly."
  }
];

const fleet = [
  {
    name: "Force Urbania",
    capacity: "13-17 Seater",
    image: "/images/vehicles/tempo.jpg",
    features: ["Reclining Seats", "AC Vents", "Charging Ports"]
  },
  {
    name: "SML Executive",
    capacity: "20-25 Seater",
    image: "/images/vehicles/minibus.jpg",
    features: ["Pushback Seats", "Ample Legroom", "Luggage Space"]
  },
  {
    name: "Volvo B11R",
    capacity: "45-50 Seater",
    image: "/images/vehicles/bus.jpg",
    features: ["Air Suspension", "Climate Control", "Entertainment"]
  }
];

export default function EmployeeTransport() {
  const [formData, setFormData] = useState({
    company: "",
    employees: "",
    location: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Corporate inquiry received! Our B2B team will contact you.");
    setFormData({ company: "", employees: "", location: "", phone: "", email: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/vehicles/bus.jpg" 
            alt="Corporate Transport" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-sm mb-8">
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium tracking-wide uppercase">Corporate Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Seamless Commutes for <br />
              <span className="text-[#D4AF37]">Modern Workforces</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
              Enhance employee satisfaction and productivity with Chaudhary Travels' managed employee transportation services. Safe, reliable, and technology-driven.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Partner With Us
              </Button>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Why Leading Companies Trust Us</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                    <benefit.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-white">
                End-to-End <span className="text-[#D4AF37]">Transport Management</span>
              </h2>
              <p className="text-white/70 text-lg">
                We don't just provide vehicles; we manage your entire transport ecosystem. From route planning to compliance management, we handle it all.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Automated Rostering & Routing",
                  "Real-time Dashboard & Analytics",
                  "24/7 Control Room Support",
                  "Compliance & Statutory Adherence",
                  "Regular Fleet Audits"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full" />
              <img 
                src="/images/vehicles/tempo.jpg" 
                alt="Fleet Management" 
                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#050505] border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/5">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-serif text-white mb-4">Transform Your Employee Commute</h2>
                  <p className="text-white/60">Fill in the details below and our corporate transport expert will get in touch with a customized proposal.</p>
                </div>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Company Name</label>
                    <Input 
                      placeholder="e.g. Tech Solutions Pvt Ltd"
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Number of Employees</label>
                    <Input 
                      placeholder="e.g. 500+"
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.employees}
                      onChange={(e) => setFormData({...formData, employees: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Office Location</label>
                    <Input 
                      placeholder="e.g. Cyber City, Gurugram"
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-white/80">Contact Person Phone</label>
                    <Input 
                      placeholder="+91 98765 43210"
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm text-white/80">Official Email</label>
                    <Input 
                      type="email"
                      placeholder="name@company.com"
                      className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <Button type="submit" variant="gold" className="w-full h-12 text-lg">
                      Request Corporate Proposal
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
