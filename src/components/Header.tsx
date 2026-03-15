import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data";
import DecryptText from "./DecryptText";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <nav className="header-nav desktop-nav">
          {navLinks.map((link, i) => (
            <a
              key={link.path}
              href={link.path}
              className="nav-link"
            >
              <DecryptText text={link.label} delay={i * 80} speed={25} />
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {menuOpen && (
          <nav className="header-nav mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="nav-link"
                onClick={closeMenu}
              >
                <DecryptText text={link.label} delay={0} speed={25} />
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
