import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { navItems } from "../../data/navigation";
import MusicPlayer from "../MusicPlayer";
import "./Navbar.css";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const progressRef = useScrollProgress();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="site-header" ref={navRef}>
      <nav className="nav-container" aria-label="Primary">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "#home")}>
          <svg viewBox="0 0 866 288" fill="none" style={{ width: 170, height: "auto", display: "block" }}>
            <text x="20" y="200" fill="currentColor" fontFamily="Anton" fontSize="180">JJ</text>
          </svg>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener"
            className="cta-btn press"
          >
            RESUME
          </a>
          <a href="/payments/" className="support-btn press">
            Buy me a Coffee
          </a>

          <MusicPlayer />

          <button
            className="theme-toggle press"
            onClick={toggle}
            type="button"
            aria-pressed={theme === "dark"}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
              </svg>
            )}
          </button>

          <button
            className="menu-toggle"
            id="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-bar" aria-hidden="true" />
            <span className="menu-bar" aria-hidden="true" />
            <span className="menu-bar" aria-hidden="true" />
          </button>
        </div>

        <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      </nav>
    </header>
  );
}
