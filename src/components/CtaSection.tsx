import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section id="contact" className="bg-cta section-padding py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-center">
      <motion.h2
        className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cta-foreground mb-4 sm:mb-6 leading-tight px-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Spremni za pokretanje projekta?
      </motion.h2>
      <motion.p
        className="text-sm sm:text-base text-cta-foreground/70 mb-8 sm:mb-10 max-w-md mx-auto px-2 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Zajedno izgradimo nešto izvanredno.
      </motion.p>
      <motion.a
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 bg-primary text-primary-foreground font-display font-medium text-sm uppercase tracking-widest hover:opacity-90 active:opacity-95 transition-opacity min-w-[200px] sm:min-w-0 min-h-[48px] rounded-sm"
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
