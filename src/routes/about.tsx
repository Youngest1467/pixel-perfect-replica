import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — William Wright Commercial Nanaimo" },
      { name: "description", content: "William Wright Commercial is a modern, full-service brokerage with seven dedicated commercial offices across BC. The Nanaimo branch serves Vancouver Island." },
      { property: "og:title", content: "About William Wright Commercial — Nanaimo" },
      { property: "og:description", content: "Founded in 2013. Over $1 billion in closings. The largest network of dedicated commercial offices in BC." },
    ],
  }),
  component: About,
});

const offices = ["Vancouver", "Langley (Fraser Valley)", "Victoria", "Kelowna", "Kamloops", "Nanaimo"];

function About() {
  return (
    <>
      <section className="bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">About</p>
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">Built on local relationships. Backed by a province-wide network.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 prose-lg">
        <p className="text-xl leading-relaxed text-foreground/85 mb-8">
          William Wright Commercial is a modern, full-service commercial real estate brokerage founded in 2013. Our Nanaimo office is one of seven dedicated commercial offices across British Columbia — the largest network of its kind in the province.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Rather than the traditional large corporate model, we operate a decentralized, community-focused brokerage. Each office is rooted in its local market — staffed by professionals who know the streets, the tenants and the opportunities — while supported by the resources of a province-wide platform.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The Nanaimo branch serves Vancouver Island with comprehensive commercial real estate solutions: sales, leasing, landlord and tenant representation, investment advisory, self-storage and project marketing.
        </p>
      </section>

      <section className="bg-charcoal text-charcoal-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Our network</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Seven offices across BC.</h2>
            <p className="text-charcoal-foreground/75 leading-relaxed">
              Every William Wright office is dedicated exclusively to commercial real estate — giving clients hyperlocal expertise wherever they do business in British Columbia.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-y-4 self-center">
            {offices.map((o) => (
              <li key={o} className="flex items-center gap-3 text-lg">
                <span className="h-2 w-2 bg-primary" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-4xl mb-6">Key facts</h2>
          <dl className="border-t border-border">
            {[
              ["Founded", "2013"],
              ["Years in operation", "13+"],
              ["Licence", "BCFSA #X038181"],
              ["Licence type", "Branch Office · Trading"],
              ["Effective", "June 20, 2025"],
              ["Expiry", "January 8, 2027"],
              ["Status", "Active & in good standing"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-2 py-4 border-b border-border text-sm">
                <dt className="text-muted-foreground uppercase tracking-wider text-xs">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="font-serif text-4xl mb-6">Achievements</h2>
          <ul className="space-y-4">
            {[
              "Over $1 billion in successful commercial closings since 2013",
              "Named One of Canada's Top Growing Companies by The Globe and Mail (2022)",
              "Sponsor of the 2026 VIATEC Awards",
              "Represented buyer in the sale of 420 Albert Street (5,944 sq ft)",
              "Marketing SOUNDWØRKS — the revitalized A&B Sound building",
              "Active community giving via William Wright Helping Hands",
            ].map((a) => (
              <li key={a} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
