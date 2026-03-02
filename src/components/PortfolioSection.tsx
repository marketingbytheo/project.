import { motion } from "framer-motion";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const projects = [
  { img: project1, title: "Swiss Commerce", category: "E-Trgovina" },
  { img: project2, title: "FinTrack Aplikacija", category: "Mobilna Aplikacija" },
  { img: project3, title: "Brand Identitet", category: "Brendiranje" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-secondary section-padding section-spacing">
      <motion.p
        className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Odabrani Radovi
      </motion.p>
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 sm:mb-12 md:mb-16 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Istaknuti Projekti
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-300 flex items-end p-4 sm:p-6 md:p-8">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1">
                  {project.category}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-background">{project.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
