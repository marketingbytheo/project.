import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Naslovna", href: "/", isRoute: true },
  { label: "Usluge", href: "/usluge", isRoute: true },
  { label: "O Nama", href: "/o-nama", isRoute: true },
  { label: "Kontakt", href: "/kontakt", isRoute: true },
];

const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border section-padding py-8 sm:py-10 md:py-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
        <Link to="/" className="font-display font-bold text-lg sm:text-xl tracking-tight text-foreground shrink-0 order-2 sm:order-1">
          STUDIO<span className="text-primary">.</span>
        </Link>

        <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-5 md:gap-6 order-1 sm:order-2">
          {footerLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 sm:mt-10 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Studio. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
