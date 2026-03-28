import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Shield className="h-4 w-4" />
            Secure · Scalable · Strategic
          </div>

          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Technology Solutions{" "}
            <span className="text-gradient">Built for Success</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We transform ideas into secure, efficient, and impactful technology solutions that drive business growth — one pixel at a time.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://calendar.app.google/QkZv5VfKgVxivxn69" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary hover:text-foreground">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
