import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onDownloadCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-brand">
          <div className="brand-icon">
            <Code2 size={22} className="brand-logo" />
          </div>
          <span className="brand-name">
            Maryam<span className="brand-dot">.</span>Tarek
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button onClick={onDownloadCV} className="btn btn-primary nav-cv-btn">
            <Download size={16} />
            <span>Download CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-card">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setMobileMenuOpen(false); onDownloadCV(); }} 
            className="btn btn-primary mobile-cv-btn"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </button>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 75px;
          z-index: 999;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-glass);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          height: 68px;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 0 12px var(--primary-glow);
        }

        .brand-dot {
          color: var(--primary);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-glass);
          background: var(--bg-card);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: rotate(15deg);
        }

        .nav-cv-btn {
          padding: 0.55rem 1.2rem;
          font-size: 0.875rem;
        }

        .mobile-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .desktop-only { display: flex; }
        .mobile-only { display: none; }

        .mobile-menu {
          position: absolute;
          top: 75px;
          left: 1rem;
          right: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          border: 1px solid var(--border-accent);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1.05rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-glass);
        }

        @media (max-width: 850px) {
          .desktop-only { display: none; }
          .mobile-only { display: flex; }
          .nav-cv-btn { display: none; }
        }
      `}</style>
    </header>
  );
}
