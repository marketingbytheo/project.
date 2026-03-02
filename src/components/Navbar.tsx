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

        {/* Mobile toggle - veća tap zona */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground p-3 -m-2 touch-manipulation rounded-lg active:bg-muted/80 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
        >
          {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </nav>

      {/* Mobile menu - puna širina, više zraka, suptilna podloga */}
      {open && (
        <div className="sm:hidden bg-muted/40 backdrop-blur-sm border-b border-border section-padding py-6 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                {isActive(link.href) ? (
                  <span className="block py-3.5 px-3 text-sm font-semibold text-primary uppercase tracking-wide rounded-lg bg-primary/10">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 px-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/60 active:bg-muted rounded-lg transition-colors uppercase tracking-wide"
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
