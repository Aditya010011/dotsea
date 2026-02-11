import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code, Brain, Smartphone, Globe, Cloud, Blocks, Shield, Glasses, Database, Workflow,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

const services = [
  { icon: Code, title: "Custom Software Development", desc: "Tailored enterprise solutions architected for scale, performance, and long-term maintainability.", details: "We build bespoke software from the ground up — ERP systems, SaaS platforms, internal tools, and complex integrations. Our team uses modern architectures (microservices, event-driven, serverless) to deliver solutions that grow with your business." },
  { icon: Brain, title: "AI & Generative AI", desc: "LLMs, intelligent agents, computer vision, and predictive analytics that transform operations.", details: "From fine-tuning foundation models to building autonomous AI agents, we help you harness the full power of artificial intelligence. We specialize in RAG pipelines, multi-modal AI, computer vision systems, and custom model training for your domain." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform and native apps with fluid UX, built in React Native, Flutter, or Swift/Kotlin.", details: "We craft mobile experiences that users love. Whether you need a cross-platform app with React Native or Flutter, or a fully native iOS/Android application, we deliver pixel-perfect, performant apps with offline-first capabilities." },
  { icon: Globe, title: "Web Development", desc: "Next.js, Remix, PWAs, and headless architectures for blazing-fast web experiences.", details: "Modern web applications built with the latest frameworks. We create progressive web apps, headless CMS integrations, e-commerce platforms, and complex dashboards — all optimized for Core Web Vitals and SEO." },
  { icon: Cloud, title: "Cloud-Native & DevOps", desc: "Kubernetes, Terraform, CI/CD pipelines on AWS, GCP, and Azure for resilient infrastructure.", details: "We architect cloud-native solutions with infrastructure as code, container orchestration, and automated CI/CD pipelines. Our DevOps practice ensures 99.99% uptime, auto-scaling, and cost-optimized cloud deployments." },
  { icon: Blocks, title: "Blockchain & Web3", desc: "Smart contracts, dApps, tokenization, and decentralized protocols on multiple chains.", details: "From DeFi protocols to NFT marketplaces and enterprise blockchain solutions, we build secure, audited smart contracts and decentralized applications. We work across Ethereum, Solana, Polygon, and private chains." },
  { icon: Shield, title: "Cybersecurity", desc: "Zero-trust architecture, penetration testing, and compliance frameworks to protect your assets.", details: "Our security team implements zero-trust architectures, conducts comprehensive penetration testing, and ensures compliance with SOC2, HIPAA, GDPR, and ISO 27001. We embed security into every layer of your stack." },
  { icon: Glasses, title: "AR/VR & Spatial Experiences", desc: "Metaverse environments, training simulations, and immersive product experiences.", details: "We create immersive experiences using WebXR, Unity, and Unreal Engine. From virtual showrooms to industrial training simulations and AR product visualization, we bring your vision into three dimensions." },
  { icon: Database, title: "Data Engineering", desc: "Real-time analytics pipelines, data lakes, and BI dashboards that drive decisions.", details: "We build modern data stacks with real-time streaming (Kafka, Flink), data warehouses (Snowflake, BigQuery), ETL pipelines, and custom BI dashboards. Turn your raw data into actionable intelligence." },
  { icon: Workflow, title: "Low-Code & Automation", desc: "Enterprise automation, workflow orchestration, and rapid internal tool development.", details: "Accelerate digital transformation with low-code platforms, RPA bots, and custom automation workflows. We build internal tools 10x faster while maintaining enterprise-grade security and scalability." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Services = () => {
  const [selected, setSelected] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Next-Generation <span className="text-gradient">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setSelected(s)}
              className="glass-card p-6 cursor-pointer group hover:border-primary/40 transition-all duration-300 hover:glow-cyan"
            >
              <s.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(var(--neon-cyan)/0.6)] transition-all" />
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <p className="text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-primary/20 max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-3">
              {selected && <selected.icon className="w-6 h-6 text-primary" />}
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground leading-relaxed pt-3">
              {selected?.details}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
