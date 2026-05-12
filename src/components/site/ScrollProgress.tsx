import { motion, useScroll, useSpring } from "framer-motion";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX: x, transformOrigin: "0%" }} className="fixed top-0 left-0 right-0 h-[2px] bg-ember-gradient z-[60]" />;
}
