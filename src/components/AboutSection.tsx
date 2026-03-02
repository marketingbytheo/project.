import { motion } from "framer-motion";
import aboutImg from "@/assets/about-studio.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background section-padding section-spacing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">
            O Nama
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Studio
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mb-6 sm:mb-8 rounded-full" />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 max-w-lg">
            Dugogodišnje iskustvo u web dizajnu i e-commerceu. Svaki projekt vodimo od ideje do pokretanja — vaš brand, vaši ciljevi, naša pažnja na detalj.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
            Dizajniramo i razvijamo rješenja koja su i lijepa i svrhovita — prilagođena vašim potrebama.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="overflow-hidden rounded-lg sm:rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:shadow-none"
        >
          <img
            src={aboutImg}
            alt="Modern creative studio workspace"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
