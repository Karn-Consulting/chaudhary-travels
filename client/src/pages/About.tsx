import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#D4AF37] text-sm font-medium tracking-[0.2em] uppercase mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Redefining Luxury Travel <br /> Since 2010
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Chaudhary Travels began with a simple vision: to provide a travel experience that transcends mere transportation. Today, we are India's premier concierge service, trusted by global leaders and discerning travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "We don't just meet standards; we set them. Every journey is executed with military precision and white-glove service."
              },
              {
                icon: Users,
                title: "Client Focus",
                desc: "Your comfort is our obsession. We tailor every aspect of the journey to your personal preferences."
              },
              {
                icon: ShieldCheck,
                title: "Safety",
                desc: "Zero compromise on safety. Our fleet is rigorously maintained and our chauffeurs are extensively trained."
              },
              {
                icon: Globe,
                title: "Reach",
                desc: "With a presence in 11 major cities, we offer a seamless travel experience across India."
              }
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/5 hover:border-[#D4AF37]/30 transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#D4AF37] text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50k+", label: "Happy Clients" },
              { number: "100+", label: "Luxury Vehicles" },
              { number: "11", label: "Cities Covered" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.number}</div>
                <div className="text-black/70 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
