import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — William Wright Commercial Nanaimo" },
      { name: "description", content: "Meet the Nanaimo office team: Managing Broker Cory Wright and representatives Santanna Portman and Amandeep Singh." },
      { property: "og:title", content: "Our Team — William Wright Commercial Nanaimo" },
      { property: "og:description", content: "The local team behind William Wright Commercial's Nanaimo office." },
    ],
  }),
  component: Team,
});

const team = [
  { name: "Cory William Wright", role: "Managing Broker", initials: "CW", bio: "Leads the Nanaimo branch and oversees brokerage operations across the William Wright Commercial network." },
  { name: "Santanna Jade Portman", role: "Commercial Representative", initials: "SP", bio: "Represents landlords, tenants and investors across the Vancouver Island commercial market." },
  { name: "Amandeep Singh", role: "Commercial Representative", initials: "AS", bio: "Specializes in commercial sales, leasing and investment opportunities in Nanaimo." },
];

function Team() {
  return (
    <>
      <section className="bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Our team</p>
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">The people behind the Nanaimo office.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A focused, local team with deep knowledge of Vancouver Island's commercial real estate market.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-8">
        {team.map((m) => (
          <article key={m.name} className="bg-background border border-border group hover:shadow-[var(--shadow-elegant)] transition">
            <div className="aspect-[4/5] bg-gradient-to-br from-charcoal to-primary/30 flex items-center justify-center relative overflow-hidden">
              <span className="font-serif text-7xl text-white/95">{m.initials}</span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>
            <div className="p-7">
              <h2 className="font-serif text-2xl">{m.name}</h2>
              <p className="text-xs uppercase tracking-[0.18em] text-primary mt-1">{m.role}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{m.bio}</p>
              <div className="mt-6 flex gap-3 text-xs">
                <a href="tel:2505861226" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"><Phone className="h-3.5 w-3.5" /> Call</a>
                <a href="mailto:reception@williamwright.ca" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"><Mail className="h-3.5 w-3.5" /> Email</a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
