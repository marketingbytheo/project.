import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Istraživanje", description: "Razumijevanje vaših ciljeva, publike i tržišta." },
  { num: "02", title: "Dizajn", description: "Izrada wireframeova i vizualnih koncepata." },
  { num: "03", title: "Razvoj", description: "Izgradnja s modernom, skalabilnom tehnologijom." },
  { num: "04", title: "Pokretanje", description: "Testiranje, objava i kontinuirana podrška." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-secondary section-padding section-spacing">
      <motion.p
        className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Kako Radimo
      </motion.p>
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-12 md:mb-16 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Naš Proces
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="relative p-5 sm:p-6 md:p-8 border-l-2 border-border first:border-l-2 lg:border-l-2 lg:first:border-l-0 lg:border-t-2 lg:border-l-0 bg-background/60 sm:bg-transparent rounded-r-lg sm:rounded-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:shadow-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="absolute -left-[9px] top-5 sm:top-6 md:top-8 lg:-top-[9px] lg:left-8 w-4 h-4 sm:w-4 sm:h-4 rounded-full bg-primary ring-4 ring-secondary" />
            <span className="text-xs font-display font-bold text-primary tracking-widest mb-2 sm:mb-3 block">
              {step.num}
            </span>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2">{step.title}</h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-snug">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
