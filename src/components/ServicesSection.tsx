import { motion } from "framer-motion";
import { Monitor, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Dizajn",
    description:
      "Kreiramo vizualno upečatljive web stranice usmjerene na korisnika koje prenose priču vašeg branda i pretvaraju posjetitelje u klijente.",
  },
  {
    icon: ShoppingCart,
    title: "E-Trgovina",
    description:
      "Prilagođene online trgovine izrađene za performanse, skalabilnost i besprijekorno iskustvo kupovine na svakom uređaju.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background section-padding pt-4 sm:pt-6 md:pt-8 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <motion.p
        className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Što Radimo
      </motion.p>
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 sm:mb-12 md:mb-16 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Usluge
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="group border border-border p-6 sm:p-8 md:p-10 lg:p-14 transition-colors hover:border-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-foreground mb-4 sm:mb-6 group-hover:text-primary transition-colors" />
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{service.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
