import React from 'react';
import { Code2, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <Code2 size={20} className="brand-icon-svg" />
            <span>Maryam Tarek</span>
          </div>
          <p className="footer-tagline">
            Front-End Developer (ReactJS) — Crafting high quality web solutions.
          </p>
        </div>

        <div className="footer-center">
          <span className="copyright">
            © {new Date().getFullYear()} Maryam Tarek. Designed & Built with React.js & Vite.
          </span>
        </div>

        <div className="footer-right">
          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 3rem 0 2rem 0;
          background: rgba(11, 15, 25, 0.95);
          border-top: 1px solid var(--border-glass);
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .brand-icon-svg {
          color: var(--primary);
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .scroll-top-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .scroll-top-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
