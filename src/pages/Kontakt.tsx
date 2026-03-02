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
        <p className="text-muted-foreground max-w-lg">
          Imate projekt na umu? Pošaljite nam poruku i odgovorit ćemo u najkraćem mogućem roku.
        </p>
      </section>
      <CtaSection />
    </main>
    <FooterSection />
  </>
);

export default Kontakt;
