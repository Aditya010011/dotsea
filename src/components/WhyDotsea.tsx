import { motion } from "framer-motion";
import { Brain, Zap, Layers, Rocket } from "lucide-react";

const features = [
  { icon: Brain, title: "AI-First Approach", desc: "Every solution we build is infused with intelligent automation and machine learning from day one." },
  { icon: Zap, title: "Agile + 24/7 Delivery", desc: "Sprint-based delivery with round-the-clock engineering across time zones for maximum velocity." },
  { icon: Layers, title: "End-to-End Ownership", desc: "From strategy and design to development, deployment, and ongoing support — we own the full stack." },
  { icon: Rocket, title: "Future-Proof Architecture", desc: "We build on modern, scalable foundations so your technology evolves with your business." },
];

const WhyDotsea = () => (
  <section className="py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Why Us</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          The Dotsea <span className="text-gradient">Difference</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 text-center group hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDotsea;
