import { motion } from "framer-motion";

const clients = [
  {
    name: "Cougar Completion Services",
    industry: "Oil and Gas",
    logo: "https://techexecsolution.com/wp-content/uploads/2025/04/cougar-completion-services_full-color-1024x603.png",
    description: "Modernized operations with a new website and secure employee onboarding system, reducing paperwork and strengthening compliance.",
    url: "https://cougarsvc.com/",
  },
  {
    name: "Léonce Manufacturing",
    industry: "Manufacturing",
    logo: "https://techexecsolution.com/wp-content/uploads/2025/04/leonce_logo_black.png",
    description: "Built a scalable digital foundation with a custom website and enterprise resource planning system connecting accounting, inventory, and workflows.",
    url: "https://leoncemfg.com/",
  },
  {
    name: "Shifting TechMindset",
    industry: "Education",
    logo: "https://techexecsolution.com/wp-content/uploads/2025/04/stm_logo-1536x576-1-1024x384.png",
    description: "Empowered students and educators with modern digital tools and platforms for technology education and community outreach.",
    url: "https://techmindset.org/",
  },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Case Studies</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground sm:text-5xl">Our Clients</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We support organizations across diverse sectors, including energy, manufacturing, and education.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {clients.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass group flex flex-col rounded-2xl p-8 transition-all duration-300 hover:glow-border"
            >
              <div className="mb-6 flex h-20 items-center justify-center rounded-xl bg-foreground/5 p-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 w-auto object-contain brightness-0 invert opacity-80 transition-opacity group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{client.industry}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{client.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{client.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
