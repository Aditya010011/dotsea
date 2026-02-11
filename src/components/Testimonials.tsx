import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Dotsea transformed our entire supply chain with an AI-powered logistics platform. The ROI was visible within 3 months.", name: "Priya Mehta", title: "CTO, LogiCorp India", avatar: "PM" },
  { quote: "Their blockchain team built our DeFi protocol from scratch — secure, scalable, and ahead of schedule. Absolute professionals.", name: "Alex Chen", title: "Founder, ChainVault", avatar: "AC" },
  { quote: "The mobile app they delivered has a 4.8-star rating and 200K downloads. Dotsea doesn't just build apps — they build experiences.", name: "Rahul Kapoor", title: "CEO, HealthFirst", avatar: "RK" },
  { quote: "Working with Dotsea felt like having a world-class engineering team in-house. Their DevOps setup cut our deployment time by 80%.", name: "Sarah Kim", title: "VP Engineering, DataScale", avatar: "SK" },
  { quote: "From concept to production in 8 weeks — the AR experience they built for our product launch was nothing short of spectacular.", name: "Vikram Singh", title: "Head of Innovation, RetailMax", avatar: "VS" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Trusted by <span className="text-gradient">Industry Leaders</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-4 md:basis-1/2">
                <div className="glass-card p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />
                  <p className="text-foreground/90 leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-border hover:border-primary/40 bg-card/60" />
          <CarouselNext className="hidden md:flex border-border hover:border-primary/40 bg-card/60" />
        </Carousel>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
