import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Tailored solutions for your industry",
  "Enterprise-grade security & compliance",
  "End-to-end project management",
  "Ongoing support & optimization",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why TechExec</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Empowering Business Through{" "}
              <span className="text-gradient">Smarter Technology</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Success today demands innovation, security, and smart execution. TechExec delivers the digital strategies and technology solutions businesses need to thrive — from high-performance websites to automation and cybersecurity.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary-foreground">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "10+", label: "Industries Served" },
            ].map((stat) => (
              <div key={stat.label} className="card-glass flex flex-col items-center justify-center rounded-2xl p-8 text-center">
                <span className="font-heading text-3xl font-bold text-gradient">{stat.value}</span>
                <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
