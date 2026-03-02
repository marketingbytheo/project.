import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Naslovna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "O Nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="section-padding flex items-center justify-between h-14 sm:h-16 md:h-20">
        <Link to="/" className="font-display font-bold text-lg sm:text-xl tracking-tight text-foreground shrink-0">
          STUDIO<span className="text-primary">.</span>
        </Link>

        {/* Desktop / tablet: prikaži navigaciju od 640px ako stane, inače hamburger */}
        <ul className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {isActive(link.href) ? (
                <span className="text-xs sm:text-sm font-medium text-primary cursor-default tracking-wide uppercase">
                  {link.label}
                </span>
              ) : (
                <Link
                  to={link.href}
                  className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase py-2 block"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle - samo ispod sm */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground p-2 -m-2 touch-manipulation"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-background border-b border-border section-padding pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {isActive(link.href) ? (
                  <span className="text-sm font-medium text-primary cursor-default uppercase tracking-wide">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
