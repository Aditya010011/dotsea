import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  { title: "NeuralTrade AI", tags: ["Python", "TensorFlow", "React", "AWS"], category: "AI/ML", desc: "An AI-driven trading analytics platform processing 2M+ data points per second with real-time predictive signals and automated portfolio rebalancing for institutional investors.", color: "from-primary/20 to-secondary/20" },
  { title: "ChainVault DeFi", tags: ["Solidity", "Ethereum", "Next.js", "GraphQL"], category: "Web3", desc: "A decentralized lending protocol with $50M+ TVL, featuring multi-collateral vaults, flash loans, and governance token staking across Ethereum and Polygon.", color: "from-secondary/20 to-primary/20" },
  { title: "MediSync Health", tags: ["React Native", "Node.js", "FHIR", "GCP"], category: "Healthcare", desc: "A HIPAA-compliant telemedicine platform connecting 10K+ patients with specialists. Features real-time video consultations, AI symptom triage, and EHR integration.", color: "from-primary/20 to-emerald-500/20" },
  { title: "LogiFlow ERP", tags: ["Next.js", "PostgreSQL", "Kubernetes", "Terraform"], category: "Enterprise", desc: "A cloud-native ERP system managing logistics for a Fortune 500 supply chain — 99.99% uptime, processing 500K+ orders daily with real-time tracking.", color: "from-amber-500/20 to-primary/20" },
  { title: "SpaceView AR", tags: ["Unity", "ARKit", "Three.js", "WebXR"], category: "AR/VR", desc: "An augmented reality interior design app allowing users to place and customize 3D furniture in their real space. 4.8★ rating with 200K+ downloads.", color: "from-secondary/20 to-pink-500/20" },
  { title: "DataPulse Analytics", tags: ["Apache Kafka", "Spark", "React", "Snowflake"], category: "Data", desc: "A real-time analytics dashboard ingesting 10TB+ daily from IoT sensors, providing predictive maintenance alerts and operational intelligence for manufacturing.", color: "from-primary/20 to-violet-500/20" },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => setSelected(p)}
              className="glass-card overflow-hidden cursor-pointer group hover:border-primary/40 transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
                <span className="text-3xl font-display font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                  {p.category}
                </span>
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-primary">View Case Study →</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-primary/20 max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{selected?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground leading-relaxed pt-3">
              {selected?.desc}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 mt-2">
            {selected?.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {t}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
