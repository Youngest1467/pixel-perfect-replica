import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Users, Briefcase, TrendingUp, MapPin, Award, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-nanaimo.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "William Wright Commercial Nanaimo — Commercial Real Estate Vancouver Island" },
      { name: "description", content: "Nanaimo's commercial real estate experts. Sales, leasing, and representation for landlords, tenants, investors and developers across Vancouver Island." },
      { property: "og:title", content: "William Wright Commercial — Nanaimo Office" },
      { property: "og:description", content: "Commercial real estate sales, leasing, and representation in Nanaimo and Vancouver Island." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Building2, title: "Sales & Leasing", desc: "Acquisition, disposition and leasing of office, retail and industrial properties." },
  { icon: Users, title: "Landlord & Tenant Representation", desc: "Strategic advisory for both sides of the transaction." },
  { icon: Briefcase, title: "Investment & Development", desc: "Income properties, land assemblies and development advisory." },
  { icon: TrendingUp, title: "Project Marketing", desc: "Full-cycle marketing programs for new commercial projects." },
];

const listings = [
  { img: p1, type: "Office", title: "420 Albert Street", area: "5,944 sq ft", status: "Sold" },
  { img: p2, type: "Retail · Mixed-Use", title: "SOUNDWØRKS", area: "1 Commercial Street", status: "Marketing" },
  { img: p3, type: "Industrial", title: "Vancouver Island Logistics", area: "Available", status: "For Lease" },
];

const stats = [
  { v: "$1B+", l: "In closings since 2013" },
  { v: "13+", l: "Years serving BC" },
  { v: "7", l: "Offices across BC" },
  { v: "#1", l: "Dedicated commercial network in BC" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Nanaimo waterfront skyline at sunset"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 text-white">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/80 mb-6">
            <span className="h-px w-10 bg-primary" />
            Nanaimo · Vancouver Island
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] max-w-4xl">
            Commercial real estate, grounded in <span className="text-primary">local expertise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
            From the harbour to the highway — sales, leasing and representation for the businesses shaping Vancouver Island.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium hover:opacity-90 transition">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-white/30 backdrop-blur px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.l} className="px-6 py-10 text-center">
              <div className="font-serif text-4xl md:text-5xl text-primary">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">What we do</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">A full-service commercial brokerage in Nanaimo.</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed self-end">
            We represent landlords, tenants, investors and developers across every asset class — backed by the largest network of dedicated commercial offices in British Columbia.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 group hover:bg-secondary transition">
              <s.icon className="h-7 w-7 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Selected work</p>
              <h2 className="font-serif text-4xl md:text-5xl">Recent transactions</h2>
            </div>
            <Link to="/services" className="text-sm font-medium inline-flex items-center gap-1 text-primary hover:gap-2 transition-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {listings.map((l) => (
              <article key={l.title} className="group bg-background shadow-[var(--shadow-card)] overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={l.img} alt={l.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    <span>{l.type}</span>
                    <span className="text-primary font-semibold">{l.status}</span>
                  </div>
                  <h3 className="font-serif text-xl">{l.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{l.area}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Recognition</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">A brokerage built on results.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Named one of Canada's Top Growing Companies by The Globe and Mail. Sponsor of the 2026 VIATEC Awards. Active community partner through William Wright Helping Hands.
          </p>
          <ul className="space-y-3">
            {[
              "Largest network of dedicated commercial offices in BC",
              "Over $1 billion in closings since 2013",
              "BCFSA Licence #X038181 · Active & in good standing",
              "Decentralized, community-focused model",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <div className="bg-charcoal text-charcoal-foreground p-8 aspect-square flex flex-col justify-between">
            <Award className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <div>
              <div className="font-serif text-3xl">2022</div>
              <div className="text-xs uppercase tracking-wider text-charcoal-foreground/70 mt-1">Globe &amp; Mail Top Growing</div>
            </div>
          </div>
          <div className="bg-primary text-primary-foreground p-8 aspect-square flex flex-col justify-between mt-12">
            <MapPin className="h-8 w-8" strokeWidth={1.5} />
            <div>
              <div className="font-serif text-3xl">7 Offices</div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/80 mt-1">Across British Columbia</div>
            </div>
          </div>
          <div className="bg-secondary p-8 aspect-square flex flex-col justify-between -mt-12">
            <TrendingUp className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <div>
              <div className="font-serif text-3xl">$1B+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">In closings</div>
            </div>
          </div>
          <div className="border border-border p-8 aspect-square flex flex-col justify-between">
            <Building2 className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <div>
              <div className="font-serif text-3xl">2013</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-3 gap-10 items-center">
          <h2 className="md:col-span-2 font-serif text-4xl md:text-5xl leading-tight">
            Looking to lease, sell or invest in Nanaimo? <span className="text-primary">Let's talk.</span>
          </h2>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="inline-flex items-center justify-between bg-primary text-primary-foreground px-6 py-4 text-sm font-medium hover:opacity-90 transition">
              Send an inquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:2505861226" className="inline-flex items-center justify-between border border-white/20 px-6 py-4 text-sm font-medium hover:bg-white/5 transition">
              Call 250-586-1226 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
