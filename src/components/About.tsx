import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Target, Users, Clock } from "lucide-react";

const stats = [
  { icon: Target, value: 50, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 25, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 100, suffix: "%", label: "On-Time Delivery" },
];

function useCounter(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    let startTime: number | null = null;
    requestAnimationFrame(step);
  }, [inView, target]);
  return count;
}

const StatCard = ({ icon: Icon, value, suffix, label, inView }: typeof stats[0] & { inView: boolean }) => {
  const count = useCounter(value, inView);
  return (
    <div className="glass-card p-6 text-center">
      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
      <p className="text-4xl font-display font-bold text-foreground">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Dotsea</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              We Don't Just Code — We Architect{" "}
              <span className="text-gradient">Competitive Advantage</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Born in Bengaluru's thriving tech ecosystem, Dotsea is a collective of engineers, designers, and strategists
              obsessed with building software that moves the needle. We combine deep technical expertise with business
              acumen to deliver solutions that don't just work — they win.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From AI-powered platforms to blockchain protocols, every project we take on is treated as a partnership.
              We embed with your team, understand your domain, and build technology that becomes your unfair advantage
              in the market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <StatCard key={s.label} {...s} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
