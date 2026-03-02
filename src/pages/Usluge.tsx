import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

const Usluge = () => (
  <>
    <Navbar />
    <main className="pt-14 sm:pt-16 md:pt-20">
      <section className="section-padding pt-12 sm:pt-16 md:pt-20 pb-8">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium mb-3">Usluge</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-xl">
          Što radimo za vas
        </h1>
      </section>
      <ServicesSection />
    </main>
    <FooterSection />
  </>
);

export default Usluge;
