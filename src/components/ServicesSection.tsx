import { motion } from "framer-motion";
import { Globe, GraduationCap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performing websites that combine sleek design, strong security, and scalable functionality to elevate your digital presence.",
  },
  {
    icon: GraduationCap,
    title: "Training & Onboarding",
    description: "Modern, easy-to-use digital platforms that streamline employee onboarding, training, and compliance management.",
  },
  {
    icon: BarChart3,
    title: "Business Technology Consulting",
    description: "Smart and secure technology strategies to help businesses automate, optimize, and scale operations efficiently.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground sm:text-5xl">Our Expertise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Strengthen your digital presence, enhance your brand's identity, and drive business growth with smart technology and strategic solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass group rounded-2xl p-8 transition-all duration-300 hover:glow-border"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
