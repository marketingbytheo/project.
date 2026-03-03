import { motion } from "framer-motion";
import { Monitor, ShoppingCart, BarChart2, Megaphone } from "lucide-react";

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
  {
    icon: BarChart2,
    title: "Google Ads",
    description:
      "Kampanje na Google pretraživanju i mreži Displaya. Povećavamo vidljivost, dovodimo kvalitetan promet i pratimo rezultate putem podataka.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Oglašavanje na Facebooku i Instagramu. Ciljane kampanje prema vašoj publici za veću prepoznatljivost brenda i prodaju.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background section-padding pt-10 sm:pt-6 md:pt-8 lg:pt-12 pb-14 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <motion.p
        className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Što Radimo
      </motion.p>
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-12 md:mb-16 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Usluge
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="group border border-border p-6 sm:p-8 md:p-10 lg:p-14 transition-all hover:border-primary bg-muted/30 sm:bg-transparent rounded-sm sm:rounded-none shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:shadow-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center rounded-lg bg-primary/10 sm:bg-transparent mb-4 sm:mb-6">
              <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary sm:text-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">{service.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
