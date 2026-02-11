import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle pulse-glow absolute rounded-full bg-primary/30"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 6 + 6}s`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8"
          >
            <Sparkles size={14} />
            Next-Gen Software Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-6"
          >
            Crafting Intelligent{" "}
            <span className="text-gradient">Digital Futures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Bespoke software powered by AI, blockchain, and the latest emerging
            tech — built for the ambitious.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="btn-glow px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base flex items-center gap-2 justify-center"
            >
              Explore Services <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 rounded-full border border-border hover:border-primary/50 text-foreground font-semibold text-base transition-colors duration-300"
            >
              Start Your Project
            </button>
          </motion.div>
        </div>

        {/* Mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="glass-card p-1 glow-cyan rounded-2xl">
            <div className="bg-card rounded-xl p-6 space-y-4">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Revenue", value: "$2.4M", change: "+12%" },
                  { label: "Users", value: "48.2K", change: "+8%" },
                  { label: "Uptime", value: "99.98%", change: "+0.02%" },
                ].map((s) => (
                  <div key={s.label} className="glass-card p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-xl font-display font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-primary">{s.change}</p>
                  </div>
                ))}
              </div>
              <div className="h-32 rounded-lg bg-muted/30 flex items-end gap-1 p-4">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-secondary/60"
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
