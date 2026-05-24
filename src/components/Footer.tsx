import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground font-serif text-lg font-bold">W</span>
            <span className="font-serif text-lg">William Wright Commercial</span>
          </div>
          <p className="text-sm text-charcoal-foreground/70 max-w-md leading-relaxed">
            The Nanaimo branch of BC's largest network of dedicated commercial real estate offices. Local expertise, provincial reach.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="h-9 w-9 grid place-items-center border border-white/15 hover:bg-primary hover:border-primary transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal-foreground/60 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/team" className="hover:text-primary">Team</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal-foreground/60 mb-4">Nanaimo Office</h4>
          <ul className="space-y-3 text-sm text-charcoal-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 205-335 Wesley Street, Nanaimo, BC V9R 2T5</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="tel:2505861226" className="hover:text-primary">250-586-1226</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="mailto:reception@williamwright.ca" className="hover:text-primary break-all">reception@williamwright.ca</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-charcoal-foreground/55">
          <p>© {new Date().getFullYear()} William Wright Commercial Inc. BCFSA Licence #X038181.</p>
          <p>Licensed Branch Office · Trading</p>
        </div>
      </div>
    </footer>
  );
}
