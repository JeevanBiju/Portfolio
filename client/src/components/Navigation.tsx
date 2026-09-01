/**
 * Instrumented Editorial design system — compact indexed navigation with an editorial mobile overlay.
 */
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact, assetUrls } from "@/data/portfolio";

const navItems = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Experience", "#experience"],
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setHidden(current > previous && current > 160 && !open);
      previous = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""} ${hidden ? "site-nav--hidden" : ""}`}>
        <a href="#top" className="brand-mark" aria-label="Jeevan Biju home" data-cursor="HOME">
          <img src={assetUrls.mark} alt="JB tracking frame monogram" />
          <span>JEEVAN<br />BIJU</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a href={contact.resume} target="_blank" rel="noreferrer" data-cursor="CV">Resume <ArrowUpRight size={14} strokeWidth={1.75} /></a>
        </nav>
        <button className="menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span>Menu</span>{open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__top">Index / 2026 <span>AI / Computer Vision</span></div>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <a key={label} href={href} onClick={closeMenu}><span>0{index + 1}</span>{label}<ArrowUpRight size={24} /></a>
          ))}
          <a href={contact.resume} target="_blank" rel="noreferrer" onClick={closeMenu}><span>04</span>Resume<ArrowUpRight size={24} /></a>
        </nav>
        <a className="mobile-menu__mail" href={`mailto:${contact.email}`} onClick={closeMenu}>{contact.email}</a>
      </div>
    </>
  );
}
