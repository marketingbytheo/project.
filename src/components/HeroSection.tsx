import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen-safe flex items-center bg-background section-padding pt-20 pb-8 sm:pt-28 sm:pb-6 md:pt-32 md:pb-8 lg:pb-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-10 lg:gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4 sm:mb-3 sm:hidden">
            Digitalni dizajn studio
          </p>
          <h1 className="text-3xl min-[480px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-4 sm:mb-6">
            Stvaramo
            <br />
            Snažna Digitalna
            <br />
            <span className="text-primary">Iskustva</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md mb-8 sm:mb-10 leading-relaxed">
            Gradimo moderne web stranice i e-commerce rješenja koja podižu vaš brand.
          </p>
          <div className="flex flex-col min-[480px]:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-display font-medium text-sm uppercase tracking-widest hover:opacity-90 active:opacity-95 transition-opacity w-full min-[480px]:w-auto rounded-sm min-h-[48px]"
            >
              Zatražite Ponudu
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-4 border-2 border-foreground text-foreground font-display font-medium text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors w-full min-[480px]:w-auto rounded-sm min-h-[48px]"
            >
              Pogledajte Radove
            </a>
          </div>
        </motion.div>

        {/* Slika samo na desktopu (lg i veće), skrivena na mobilnim i tabletima */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex justify-end"
        >
          <div className="w-full max-w-lg">
            <img
              src={heroVisual}
              alt="Abstract geometric design composition"
              className="w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
