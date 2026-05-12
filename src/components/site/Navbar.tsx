import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";
import { useTheme } from "./theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/booking", label: "Booking" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const loc = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass shadow-elevated" : ""}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Nomad Bikers Club" className="h-10 w-10 rounded-full ring-1 ring-primary/40 group-hover:ring-primary transition" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-sm font-bold tracking-wider">NOMAD</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Bikers Club</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-full glass hover:shadow-glow transition">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link to="/booking" className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-ember-gradient text-primary-foreground text-sm font-semibold shadow-glow hover:scale-105 transition">
              Book Ride
            </Link>
            <button onClick={() => setOpen(o => !o)} className="lg:hidden p-2 rounded-full glass" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 glass rounded-2xl p-4 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="px-4 py-3 rounded-xl hover:bg-secondary text-foreground">{l.label}</Link>
            ))}
            <Link to="/booking" className="mt-2 px-4 py-3 rounded-xl bg-ember-gradient text-primary-foreground text-center font-semibold">Book Ride</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
