import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CtaSection from "@/components/CtaSection";

const Kontakt = () => (
  <>
    <Navbar />
    <main className="pt-14 sm:pt-16 md:pt-20">
      <section className="section-padding pt-12 sm:pt-16 md:pt-20 pb-8">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3">Kontakt</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-xl mb-6">
          Javite nam se
        </h1>
        <p className="text-muted-foreground max-w-lg mb-6">
          Imate projekt na umu? Pošaljite nam poruku i odgovorit ćemo u najkraćem mogućem roku.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <a
            href="tel:+385976534487"
            className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            +385 97 653 4487
          </a>
          <a
            href="mailto:info@studio1.tech"
            className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            info@studio1.tech
          </a>
        </div>
      </section>
      <CtaSection />
    </main>
    <FooterSection />
  </>
);

export default Kontakt;
