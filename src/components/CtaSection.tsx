import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section id="contact" className="bg-cta section-padding section-spacing text-center">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cta-foreground mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Spremni za pokretanje projekta?
      </motion.h2>
      <motion.p
        className="text-sm sm:text-base text-cta-foreground/60 mb-8 sm:mb-10 max-w-md mx-auto px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Zajedno izgradimo nešto izvanredno.
      </motion.p>
      <motion.a
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 bg-primary text-primary-foreground font-display font-medium text-xs sm:text-sm uppercase tracking-widest hover:opacity-90 transition-opacity min-w-[200px] sm:min-w-0"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
      >
        Kontaktirajte Nas
      </motion.a>
    </section>
  );
};

export default CtaSection;
