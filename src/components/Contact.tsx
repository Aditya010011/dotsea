import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.03] to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required className="bg-muted/30 border-border/50 focus:border-primary/50" />
              <Input type="email" placeholder="Email Address" required className="bg-muted/30 border-border/50 focus:border-primary/50" />
            </div>
            <Input placeholder="Company (optional)" className="bg-muted/30 border-border/50 focus:border-primary/50" />
            <Select>
              <SelectTrigger className="bg-muted/30 border-border/50 focus:border-primary/50">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent className="glass-card border-border">
                {["Custom Software", "AI & GenAI", "Mobile Apps", "Web Development", "Cloud & DevOps", "Blockchain & Web3", "Cybersecurity", "AR/VR", "Data Engineering", "Automation"].map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea placeholder="Tell us about your project..." rows={4} required className="bg-muted/30 border-border/50 focus:border-primary/50 resize-none" />
            <button
              type="submit"
              disabled={loading}
              className="btn-glow w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            Based in Bengaluru, India
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
