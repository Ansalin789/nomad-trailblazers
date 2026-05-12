import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Ride — Nomad Bikers Club" },
      { name: "description", content: "Reserve your spot for training or a guided trip with Nomad Bikers Club." },
      { property: "og:title", content: "Book your ride" },
      { property: "og:description", content: "Quick booking — limited slots per session." },
    ],
  }),
  component: Booking,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d\s-]{8,15}$/, "Enter a valid phone"),
  email: z.string().trim().email("Enter a valid email").max(160),
  service: z.string().min(1, "Select a service"),
  date: z.string().min(1, "Pick a date"),
  notes: z.string().max(500).optional(),
});

const services = ["Bike Riding Lessons", "Scooty Training", "Beginner to Advanced", "Guided Bike Trip"];

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</div>
      {children}
      {error && <div className="text-xs text-destructive mt-1">{error}</div>}
    </label>
  );
}

const inputCls = "w-full px-4 py-3.5 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition placeholder:text-muted-foreground/60";

function Booking() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); (e.target as HTMLFormElement).reset(); }, 900);
  }

  return (
    <section className="pt-40 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Reserve Your Spot</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold">Book a <span className="text-gradient">Ride</span></h1>
          <p className="mt-4 text-muted-foreground">Tell us a bit about you — we'll confirm within 24 hours.</p>
        </div>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-6 md:p-10 shadow-elevated space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full name" error={errors.name}><input name="name" className={inputCls} placeholder="Arjun Sharma" /></Field>
            <Field label="Mobile" error={errors.phone}><input name="phone" className={inputCls} placeholder="+91 9XXXXXXXXX" /></Field>
          </div>
          <Field label="Email" error={errors.email}><input name="email" type="email" className={inputCls} placeholder="you@example.com" /></Field>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Preferred service" error={errors.service}>
              <select name="service" className={inputCls} defaultValue="">
                <option value="" disabled>Select...</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
            <Field label="Preferred date" error={errors.date}>
              <input name="date" type="date" className={inputCls} />
            </Field>
          </div>
          <Field label="Notes (optional)"><textarea name="notes" rows={4} className={inputCls} placeholder="Anything we should know..." /></Field>

          <button disabled={loading} className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-ember-gradient text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition disabled:opacity-60">
            {loading ? "Sending..." : <>Submit booking <Send className="h-4 w-4" /></>}
          </button>
        </motion.form>
      </div>

      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/80 backdrop-blur p-6">
            <motion.div initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
              className="glass rounded-3xl p-10 text-center max-w-md shadow-elevated">
              <div className="inline-flex p-4 rounded-full bg-ember-gradient mb-4 shadow-glow">
                <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl font-bold">You're in!</h3>
              <p className="mt-3 text-muted-foreground">We've received your booking. Our team will reach out within 24 hours.</p>
              <button onClick={() => setDone(false)} className="mt-6 px-6 py-3 rounded-full glass font-semibold">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
