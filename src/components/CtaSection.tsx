import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass glow-border rounded-3xl p-12 text-center sm:p-16"
        >
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Let's discuss how TechExec can help you achieve your technology goals. Schedule a free consultation today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="https://calendar.app.google/QkZv5VfKgVxivxn69" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="tel:+12105950892">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                Call (210) 595-0892
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
