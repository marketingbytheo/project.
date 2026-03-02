import { motion } from "framer-motion";
import aboutImg from "@/assets/about-studio.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background section-padding section-spacing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
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
          <div className="w-12 sm:w-16 h-0.5 bg-primary mb-6 sm:mb-8" />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 max-w-lg">
            Mi smo boutique digitalni dizajn studio fokusiran na izradu značajnih digitalnih proizvoda.
            Naš pristup kombinira strateško razmišljanje s pažljivom izradom kako bismo isporučili
            iskustva koja odjekuju kod vaše publike.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
            Svaki projekt počinje razumijevanjem — vaš brand, vaši korisnici, vaši ciljevi.
            Od toga dizajniramo i razvijamo rješenja koja nisu samo lijepa, već i svrhovita.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
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
