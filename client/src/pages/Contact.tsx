import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <Layout>
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Get in Touch</h1>
            <p className="text-white/60 text-lg">We are at your service 24/7.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid gap-6">
                <Card className="bg-white/5 border-white/5">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="text-white font-serif text-lg mb-1">Phone</h3>
                      <p className="text-white/60 mb-2">24/7 Concierge Support</p>
                      <a href="tel:+919540726566" className="text-white hover:text-[#D4AF37] transition-colors text-lg font-medium">
                        +91 95407 26566
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/5">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="text-white font-serif text-lg mb-1">Email</h3>
                      <p className="text-white/60 mb-2">For bookings and inquiries</p>
                      <a href="mailto:info@chaudharytravels.in" className="text-white hover:text-[#D4AF37] transition-colors text-lg font-medium">
                        info@chaudharytravels.in
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/5">
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="text-white font-serif text-lg mb-1">Headquarters</h3>
                      <p className="text-white/60">
                        123 Luxury Lane, Business District,<br />
                        New Delhi, India 110001
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-[#0a0a0a] border-[#D4AF37]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-white/60">Name</label>
                      <Input className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-white/60">Phone</label>
                      <Input className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Email</label>
                    <Input type="email" className="bg-white/5 border-white/10 text-white focus:border-[#D4AF37]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60">Message</label>
                    <textarea 
                      className="w-full min-h-[120px] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]"
                    ></textarea>
                  </div>
                  <Button type="submit" variant="gold" className="w-full h-12">
                    SendMessage
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
