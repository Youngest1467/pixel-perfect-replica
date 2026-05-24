import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — William Wright Commercial Nanaimo" },
      { name: "description", content: "Get in touch with William Wright Commercial's Nanaimo office. 205-335 Wesley Street, Nanaimo BC. Call 250-586-1226." },
      { property: "og:title", content: "Contact — William Wright Commercial Nanaimo" },
      { property: "og:description", content: "Reach the Nanaimo office for commercial real estate sales, leasing and representation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">Let's talk about your next move.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you're leasing, selling, investing or expanding — the Nanaimo team is here to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-serif text-3xl mb-6">Nanaimo office</h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="h-10 w-10 grid place-items-center bg-primary text-primary-foreground shrink-0"><MapPin className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Address</div>
                  <a href="https://maps.google.com/?q=205-335+Wesley+Street+Nanaimo+BC" target="_blank" rel="noopener" className="font-medium hover:text-primary">205-335 Wesley Street<br />Nanaimo, BC V9R 2T5</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="h-10 w-10 grid place-items-center bg-primary text-primary-foreground shrink-0"><Phone className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</div>
                  <a href="tel:2505861226" className="font-medium hover:text-primary">250-586-1226</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="h-10 w-10 grid place-items-center bg-primary text-primary-foreground shrink-0"><Mail className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</div>
                  <a href="mailto:reception@williamwright.ca" className="font-medium hover:text-primary break-all">reception@williamwright.ca</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="h-10 w-10 grid place-items-center bg-primary text-primary-foreground shrink-0"><Clock className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Hours</div>
                  <p className="font-medium">Mon–Fri · 9:00am – 5:00pm</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="aspect-[4/3] overflow-hidden border border-border">
            <iframe
              title="William Wright Nanaimo office map"
              src="https://www.google.com/maps?q=205-335+Wesley+Street+Nanaimo+BC&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 bg-secondary p-8 md:p-12 space-y-5"
        >
          <h2 className="font-serif text-3xl mb-2">Send an inquiry</h2>
          <p className="text-sm text-muted-foreground mb-6">We typically respond within one business day.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Inquiry type</label>
            <select className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary">
              <option>General inquiry</option>
              <option>Buying / Investing</option>
              <option>Selling</option>
              <option>Leasing — Tenant</option>
              <option>Leasing — Landlord</option>
              <option>Development</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
            <textarea required rows={5} className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <button type="submit" disabled={sent} className="bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition disabled:opacity-60">
            {sent ? "Thank you — we'll be in touch." : "Send inquiry"}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}{required && <span className="text-primary"> *</span>}</label>
      <input name={name} type={type} required={required} className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
