import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Compass, Heart, Shield, Users } from "lucide-react";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nomad Bikers Club" },
      { name: "description", content: "Born in 2021, Nomad Bikers Club trains riders and curates legendary trips across India." },
      { property: "og:title", content: "About Nomad Bikers Club" },
      { property: "og:description", content: "A community built on freedom, safety and the open road." },
      { property: "og:image", content: about },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.21_45/0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Story</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Built by riders, <br /><span className="text-gradient">for the wild ones.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Since 2021, Nomad Bikers Club has trained beginners, mentored advanced riders, and led convoys across India's most breathtaking terrains.
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-elevated">
            <img src={about} alt="Riders convoy" loading="lazy" className="w-full h-[40vh] sm:h-[60vh] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16">The Journey</h2>
          <div className="relative space-y-10">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
            {[
              { y: "2021", t: "The Spark", d: "Founded by passionate riders craving a safer, more curated club experience." },
              { y: "2022", t: "First Convoys", d: "Launched guided trips to Coorg, Ooty and the Western Ghats." },
              { y: "2023", t: "Training Academy", d: "Opened structured beginner-to-advanced courses with certified instructors." },
              { y: "2024", t: "Himalayan Era", d: "Spiti & Ladakh expeditions become flagship experiences." },
              { y: "2025", t: "5,000+ Riders", d: "Crossed five thousand trained riders and a thriving community." },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="relative pl-12">
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-ember-gradient shadow-glow" />
                <div className="text-sm uppercase tracking-widest text-primary">{m.y}</div>
                <div className="font-display text-2xl font-bold mt-1">{m.t}</div>
                <p className="text-muted-foreground mt-2">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-14">Our Values</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Shield, t: "Safety First", d: "Gear checks, briefings, and certified leads on every ride." },
              { icon: Heart, t: "Passion", d: "We ride because we love it. Period." },
              { icon: Users, t: "Community", d: "A circle, not a club. We grow together." },
              { icon: Compass, t: "Adventure", d: "Roads less travelled, stories to tell." },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass rounded-3xl p-6 text-center hover:shadow-glow transition">
                <div className="inline-flex p-3 rounded-2xl bg-ember-gradient text-primary-foreground mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg font-bold">{v.t}</div>
                <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
