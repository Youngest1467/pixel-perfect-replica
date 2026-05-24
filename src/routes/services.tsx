import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Users, Briefcase, TrendingUp, Package, Megaphone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — William Wright Commercial Nanaimo" },
      { name: "description", content: "Commercial property sales, leasing, landlord and tenant representation, investment, self-storage and project marketing in Nanaimo." },
      { property: "og:title", content: "Commercial Real Estate Services — Nanaimo" },
      { property: "og:description", content: "Full-service commercial real estate brokerage on Vancouver Island." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Building2, title: "Commercial Property Sales & Leasing", desc: "Full-cycle brokerage for office, retail, industrial and mixed-use assets in Nanaimo and across Vancouver Island." },
  { icon: Users, title: "Landlord Representation & Services", desc: "Strategic leasing programs, market positioning, and lease negotiation to maximize the value of your asset." },
  { icon: Briefcase, title: "Tenant Representation & Services", desc: "Space search, market intelligence and negotiation — protecting tenants throughout the lease lifecycle." },
  { icon: TrendingUp, title: "Investment & Development Services", desc: "Income property advisory, land assemblies, development sites and feasibility analysis." },
  { icon: Package, title: "Self Storage Services", desc: "Dedicated brokerage and advisory for the self-storage asset class." },
  { icon: Megaphone, title: "Project Marketing", desc: "Tailored marketing campaigns for new commercial developments — from launch strategy to closing." },
];

function Services() {
  return (
    <>
      <section className="bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Services</p>
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">Full-service commercial brokerage, end to end.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every transaction is led from our Nanaimo office and supported by the largest dedicated commercial network in British Columbia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((s) => (
          <article key={s.title} className="bg-background p-10 hover:bg-secondary transition group">
            <s.icon className="h-8 w-8 text-primary mb-6" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </section>

      <section className="bg-charcoal text-charcoal-foreground py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to move forward?</h2>
          <p className="text-charcoal-foreground/75 mb-8 text-lg">Tell us about your property, your tenants, or your next investment.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition">
            Contact our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
