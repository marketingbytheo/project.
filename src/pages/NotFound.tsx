import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const NotFound = () => (
  <>
    <Navbar />
    <main className="min-h-screen-safe pt-14 sm:pt-16 md:pt-20 flex items-center section-padding">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-8">
          Stranica koju tražite nije pronađena.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground font-display font-medium text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Natrag na naslovnicu
        </Link>
      </div>
    </main>
    <FooterSection />
  </>
);

export default NotFound;
