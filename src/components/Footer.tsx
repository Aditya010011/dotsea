import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import dotsealogo from "@/assets/dotsea-logo.png";

const links = ["Home", "Services", "About", "Portfolio", "Contact"];

const Footer = () => {
  const scrollTo = (label: string) => {
    const id = label.toLowerCase();
    document.querySelector(`#${id === "home" ? "home" : id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <img src={dotsealogo} alt="Dotsea" className="h-8 mb-2" />
            <p className="text-xs text-muted-foreground">Crafting Intelligent Digital Futures</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dotsea. All rights reserved.</p>
          <p>Built with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
