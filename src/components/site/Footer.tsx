import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.72_0.21_45/0.15),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" className="h-12 w-12 rounded-full ring-1 ring-primary/40" />
            <div>
              <div className="font-display font-bold text-lg">NOMAD BIKERS CLUB</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Estd 2021 — Ride Free</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            India's premium riding community. Learn, ride, and explore with expert guidance and unforgettable journeys.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/nomadbikersclub" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:shadow-glow transition" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="mailto:support@nomadbikersclub.in" className="p-3 glass rounded-full hover:shadow-glow transition" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href="tel:+919087030060" className="p-3 glass rounded-full hover:shadow-glow transition" aria-label="Phone">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/booking" className="hover:text-foreground">Booking</Link></li>
            <li><Link to="/testimonials" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +91 90870 30060</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> support@nomadbikersclub.in</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> India</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nomad Bikers Club. All rights reserved.
      </div>
    </footer>
  );
}
