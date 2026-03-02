import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Onama = () => (
  <>
    <Navbar />
    <main className="pt-14 sm:pt-16 md:pt-20">
      <AboutSection />
    </main>
    <FooterSection />
  </>
);

export default Onama;
