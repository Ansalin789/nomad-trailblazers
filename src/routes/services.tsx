import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bike, Gauge, Mountain, GraduationCap, ArrowRight, Clock, Award } from "lucide-react";
import lessons from "@/assets/lessons.jpg";
import scooty from "@/assets/scooty.jpg";
import advanced from "@/assets/advanced.jpg";
import trips from "@/assets/trips.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nomad Bikers Club" },
      { name: "description", content: "Bike & scooty training, beginner to advanced programs, and guided trips." },
      { property: "og:title", content: "Riding Services & Programs" },
      { property: "og:description", content: "Choose a structured program — beginner to expert." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Bike, t: "Bike Riding Lessons", d: "From clutch control to highway confidence — fully structured curriculum.", img: lessons, dur: "10 days", level: "Beginner" },
  { icon: Gauge, t: "Scooty Training", d: "Stress-free scooter classes with patient instructors.", img: scooty, dur: "5 days", level: "Beginner" },
  { icon: GraduationCap, t: "Beginner to Advanced", d: "Progressive program covering balance, cornering, defensive riding.", img: advanced, dur: "4 weeks", level: "All levels" },
  { icon: Mountain, t: "Guided Bike Trips", d: "Convoy expeditions across the Himalayas, Western Ghats, and beyond.", img: trips, dur: "3-12 days", level: "Intermediate+" },
];

function Services() {
  return (
    <>
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Programs</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold">Train. Ride. <span className="text-gradient">Conquer.</span></h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">Choose your path — every program is hands-on and led by certified mentors.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass shadow-elevated hover:shadow-glow transition-all">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5 sm:p-8">
                <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                  <div className="inline-flex p-3 rounded-2xl bg-ember-gradient text-primary-foreground"><s.icon className="h-5 w-5" /></div>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 text-xs glass rounded-full px-3 py-1"><Clock className="h-3 w-3" /> {s.dur}</span>
                    <span className="inline-flex items-center gap-1 text-xs glass rounded-full px-3 py-1"><Award className="h-3 w-3" /> {s.level}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
                <Link to="/booking" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ember-gradient text-primary-foreground text-sm font-semibold hover:scale-105 transition">
                  Enroll <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">Course Structure</h2>
          <div className="glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-elevated">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { t: "Week 1", d: "Foundations: balance, posture, controls, low-speed manoeuvres." },
                { t: "Week 2", d: "Traffic riding, defensive techniques, gear-shifting mastery." },
                { t: "Week 3", d: "Cornering, braking dynamics, highway riding." },
                { t: "Week 4", d: "Off-road basics, emergency handling, certification ride." },
                { t: "Trip Prep", d: "Convoy etiquette, navigation, mechanical basics, gear setup." },
                { t: "Expedition", d: "Multi-day guided ride with mechanic & support van." },
              ].map((p, i) => (
                <div key={i} className="border-l-2 border-primary/40 pl-4">
                  <div className="text-xs uppercase tracking-widest text-primary">{p.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
