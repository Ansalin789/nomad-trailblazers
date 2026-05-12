import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Bike, Compass, Gauge, Mountain, Star, Quote, Instagram,
  Shield, Wrench, MapPin, Calendar, Users, Award, Headphones, Fuel,
  ChevronDown, Play,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import trips from "@/assets/trips.jpg";
import lessons from "@/assets/lessons.jpg";
import advanced from "@/assets/advanced.jpg";
import scooty from "@/assets/scooty.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nomad Bikers Club — Ride Free, Ride Together" },
      { name: "description", content: "Premium riding lessons, beginner programs, and guided adventure trips across India." },
      { property: "og:title", content: "Nomad Bikers Club" },
      { property: "og:description", content: "Ride Free. Ride Together." },
    ],
  }),
  component: Home,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[560px] overflow-hidden">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <img src={hero} alt="Rider on mountain road" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,oklch(0.08_0.01_40/0.6))]" />
        </motion.div>
        <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 self-start px-3 sm:px-4 py-1.5 rounded-full glass text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-4 sm:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Estd 2021 — India
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }}
            className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl">
            Ride Free. <br /> <span className="text-gradient">Ride Together.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            From your first throttle twist to Himalayan passes — Nomad Bikers Club trains, guides and rides with you.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link to="/booking" className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-ember-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition text-sm sm:text-base">
              Book Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 rounded-full glass font-semibold hover:shadow-glow transition text-sm sm:text-base">
              <Play className="h-3.5 w-3.5" /> Explore Trips
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-10 sm:mt-14 hidden sm:flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Shield className="h-3.5 w-3.5 text-primary" /> Certified instructors</span>
            <span className="inline-flex items-center gap-2"><Wrench className="h-3.5 w-3.5 text-primary" /> Mechanic-backed convoys</span>
            <span className="inline-flex items-center gap-2"><Award className="h-3.5 w-3.5 text-primary" /> 4.9★ rated</span>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* PARTNERS / GEAR MARQUEE */}
      <section className="py-8 border-y border-border bg-secondary/30 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-muted-foreground/70">
          {[...Array(2)].flatMap((_, k) => (
            ["Royal Enfield", "KTM", "Bajaj", "TVS", "Honda", "Yamaha", "Hero", "Suzuki", "BMW Motorrad", "Triumph"].map((b, i) => (
              <span key={`${k}-${i}`} className="font-display text-xl sm:text-2xl tracking-widest">{b}</span>
            ))
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-16 sm:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { n: 5000, s: "+", l: "Riders Trained" },
            { n: 120, s: "+", l: "Guided Trips" },
            { n: 50, s: "k", l: "Kilometres" },
            { n: 4.9, s: "★", l: "Avg. Rating", float: true },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-gradient">
                {s.float ? "4.9" : <Counter to={s.n} />}{s.s}
              </div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="What We Do" title="Built for every rider" desc="From the first wobble to the last switchback." />
          <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: Bike, t: "Riding Lessons", d: "Master clutch, balance and control with certified trainers.", img: lessons },
              { icon: Gauge, t: "Scooty Training", d: "Beginner-friendly scooter classes for daily commute confidence.", img: scooty },
              { icon: Mountain, t: "Guided Trips", d: "Curated convoys through India's most legendary roads.", img: trips },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group tilt-card relative overflow-hidden rounded-3xl glass shadow-elevated">
                <div className="tilt-inner">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="inline-flex p-3 rounded-2xl bg-ember-gradient text-primary-foreground mb-4">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="relative py-20 sm:py-28 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="Destinations" title="Where the road takes us" desc="Hand-picked routes across the subcontinent." />
          <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              { name: "Spiti Valley", days: "9 Days", img: trips, d: "High-altitude desert" },
              { name: "Ladakh", days: "12 Days", img: hero, d: "The legendary loop" },
              { name: "Western Ghats", days: "4 Days", img: about, d: "Misty switchbacks" },
              { name: "Coorg & Ooty", days: "3 Days", img: advanced, d: "Coffee country curves" },
              { name: "Goa Coastal", days: "5 Days", img: lessons, d: "Sea breeze sprints" },
              { name: "Rann of Kutch", days: "6 Days", img: scooty, d: "White desert magic" },
              { name: "Meghalaya", days: "7 Days", img: trips, d: "Living-root jungles" },
              { name: "Rajasthan", days: "8 Days", img: hero, d: "Forts & dunes" },
            ].map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.07 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[3/4]">
                <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary mb-1 inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {d.days}
                  </div>
                  <div className="font-display text-base sm:text-xl font-bold">{d.name}</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground">{d.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="The Process" title="From sign-up to sunset ride" desc="Four simple steps to get rolling." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", icon: Calendar, t: "Reserve", d: "Pick a program or trip and lock your seat in seconds." },
              { n: "02", icon: Users, t: "Onboard", d: "Briefing call, gear checklist and skill assessment." },
              { n: "03", icon: Wrench, t: "Train / Prep", d: "Hands-on training or convoy prep with mentors." },
              { n: "04", icon: MapPin, t: "Ride", d: "Hit the road with a tight crew and full support." },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="relative glass rounded-3xl p-6 hover:shadow-glow transition">
                <div className="absolute -top-3 -right-3 font-display text-5xl font-bold text-primary/20">{s.n}</div>
                <div className="inline-flex p-3 rounded-2xl bg-ember-gradient text-primary-foreground mb-4">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TRIP */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img src={advanced} alt="Advanced rider" loading="lazy" className="w-full h-[360px] sm:h-[460px] md:h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 glass rounded-2xl p-4">
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-primary">Featured Trip</div>
                <div className="font-display text-xl sm:text-2xl font-bold mt-1">Spiti Valley Expedition</div>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="glass rounded-full px-2.5 py-1">9 Days</span>
                  <span className="glass rounded-full px-2.5 py-1">2,400 km</span>
                  <span className="glass rounded-full px-2.5 py-1">Intermediate+</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why Choose Us</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">A community that rides with purpose.</h2>
            <p className="mt-4 sm:mt-6 text-muted-foreground">
              Certified trainers, mechanic-backed convoys, premium gear support, and routes designed by riders who've ridden them.
            </p>
            <ul className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-3">
              {[
                { i: Shield, t: "Certified instructors" },
                { i: Wrench, t: "Mechanic-backed convoys" },
                { i: Headphones, t: "24/7 trip support" },
                { i: Compass, t: "Curated routes" },
                { i: Fuel, t: "Fuel & logistics planned" },
                { i: Award, t: "Certified completion" },
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 glass rounded-xl px-3 py-2.5 text-sm">
                  <f.i className="h-4 w-4 text-primary shrink-0" /> {f.t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 sm:mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:shadow-glow transition">
              About the club <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="Voices" title="Loved by riders across India" desc="" />
          <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { n: "Arjun R.", t: "Best riding club I've joined. The Spiti trip was a life-changing experience." },
              { n: "Priya S.", t: "Learnt scooty as a complete beginner — patient trainers and a safe environment." },
              { n: "Rahul K.", t: "Their convoys are organized to perfection. Will ride with Nomad again and again." },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-3xl p-6 sm:p-7 shadow-elevated">
                <Quote className="h-6 w-6 text-primary mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">"{r.t}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-ember-gradient flex items-center justify-center font-bold text-primary-foreground">{r.n[0]}</div>
                  <div>
                    <div className="font-semibold text-sm">{r.n}</div>
                    <div className="flex gap-0.5 mt-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3 w-3 fill-primary text-primary" />)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-primary font-semibold">See all reviews <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader eyebrow="FAQ" title="Common questions" desc="Everything you need before signing up." />
          <div className="mt-10 space-y-3">
            {[
              { q: "Do I need my own bike?", a: "Not for training — we provide certified training bikes and scooters. Trips require your own roadworthy bike, or we can help you arrange a rental." },
              { q: "What if I've never ridden before?", a: "Perfect — most of our students start from zero. The 10-day Beginner program takes you from balance to confident street riding." },
              { q: "How safe are the Himalayan trips?", a: "Every convoy includes certified lead riders, a mechanic, a backup vehicle and 24/7 support. Daily briefings and gear checks are mandatory." },
              { q: "What gear is required?", a: "Helmet (ISI certified), riding jacket, gloves, knee guards and ankle-high boots. We have rental gear available at our base." },
              { q: "Are women solo riders welcome?", a: "Absolutely. ~30% of our community is women riders, and we run women-only batches on request." },
              { q: "Cancellation & refund policy?", a: "Free cancellation up to 14 days before departure. Within 14 days, partial credit toward a future trip." },
            ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} i={i} />)}
          </div>
        </div>
      </section>

      {/* INSTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8 sm:mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Follow the journey</div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">@nomadbikersclub</h2>
            </div>
            <a href="https://www.instagram.com/nomadbikersclub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass font-semibold hover:shadow-glow transition">
              <Instagram className="h-4 w-4" /> Follow
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {[hero, trips, advanced, lessons, scooty, about].map((src, i) => (
              <a key={i} href="https://www.instagram.com/nomadbikersclub" target="_blank" rel="noreferrer"
                className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl group">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition flex items-center justify-center">
                  <Instagram className="h-6 w-6 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center glass shadow-elevated">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.21_45/0.25),transparent_70%)]" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold">Your road is waiting.</h2>
              <p className="mt-3 sm:mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">Book a session or join the next convoy. Slots fill up fast.</p>
              <Link to="/booking" className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-ember-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition">
                Reserve your seat <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
      className="glass rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-sm sm:text-base">{q}</span>
        <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto px-2">
      <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
      {desc && <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base">{desc}</p>}
    </div>
  );
}
