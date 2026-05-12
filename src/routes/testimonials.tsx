import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Nomad Bikers Club" },
      { name: "description", content: "Real stories from riders who trained and travelled with Nomad Bikers Club." },
      { property: "og:title", content: "Rider Reviews" },
      { property: "og:description", content: "Loved by riders across India." },
    ],
  }),
  component: Testimonials,
});

const reviews = [
  { n: "Arjun Reddy", t: "Best riding club I've joined. The Spiti expedition was life-changing — flawlessly organized.", r: 5 },
  { n: "Priya Sharma", t: "Learnt scooty as a complete beginner. Patient instructors and a safe environment.", r: 5 },
  { n: "Rahul Khanna", t: "Their convoys are precision-organized. Will ride with Nomad again and again.", r: 5 },
  { n: "Sneha Iyer", t: "From shaky beginner to confident rider in 4 weeks. The structured program works.", r: 5 },
  { n: "Vikram Singh", t: "Mechanic-backed convoys give such peace of mind on long trips. Highly recommend.", r: 5 },
  { n: "Aditi Mehta", t: "The community is so welcoming. Made friends for life on my first guided ride.", r: 5 },
  { n: "Karan Joshi", t: "Top-notch trainers. They focus on safety without making it boring.", r: 5 },
  { n: "Neha Patil", t: "Loved the Western Ghats convoy — well-paced, scenic and unforgettable.", r: 5 },
];

function Card({ r, i }: { r: typeof reviews[number]; i: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
      className="glass rounded-3xl p-7 shadow-elevated">
      <Quote className="h-6 w-6 text-primary mb-4" />
      <p className="text-sm text-muted-foreground leading-relaxed">"{r.t}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-ember-gradient flex items-center justify-center font-bold text-primary-foreground">{r.n[0]}</div>
        <div>
          <div className="font-semibold text-sm">{r.n}</div>
          <div className="flex gap-0.5 mt-0.5">{Array.from({ length: r.r }).map((_, j) => <Star key={j} className="h-3 w-3 fill-primary text-primary" />)}</div>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <>
      <section className="pt-40 pb-12 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Reviews</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold">Loved by <span className="text-gradient">riders.</span></h1>
          <div className="mt-6 inline-flex items-center gap-3 glass rounded-full px-5 py-3">
            <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
            <span className="font-semibold">4.9 / 5</span>
            <span className="text-muted-foreground text-sm">on Google Reviews</span>
          </div>
        </div>
      </section>

      {/* Marquee row */}
      <section className="py-8 overflow-hidden">
        <div className="flex gap-4 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="glass rounded-2xl px-5 py-3 inline-flex items-center gap-3 shrink-0">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-semibold">{r.n}</span>
              <span className="text-sm text-muted-foreground truncate max-w-[280px]">{r.t}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { from {transform: translateX(0)} to {transform: translateX(-50%)} }`}</style>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => <Card key={i} r={r} i={i} />)}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10">Reviews sourced from our Google Business Profile.</p>
      </section>
    </>
  );
}
