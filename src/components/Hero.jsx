import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Sparkles, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onDownloadCV }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-content animate-fade-in">
          <div className="hero-badges">
            <div className="badge badge-success">
              <span className="pulse-dot"></span>
              <span>{personalInfo.badge}</span>
            </div>
            <div className="badge">
              <Sparkles size={14} />
              <span>ReactJS Specialist</span>
            </div>
          </div>

          <h1 className="hero-title">
            Crafting Responsive <br />
            <span className="gradient-text">Web Experiences</span> with React
          </h1>

          <p className="hero-subtitle">
            Hi, I'm <strong>{personalInfo.name}</strong> — a Front-End Developer & IT Graduate from Mansoura University. 
            I build modern, high-performance web applications using React.js, JavaScript, and REST APIs.
          </p>

          {/* Key Tech Pills */}
          <div className="hero-tech-stack">
            <span className="tech-label">Core Stack:</span>
            <div className="tech-pills">
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">JavaScript ES6</span>
              <span className="tech-pill">Context API</span>
              <span className="tech-pill">REST APIs</span>
              <span className="tech-pill">Bootstrap</span>
              <span className="tech-pill">Vite</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onDownloadCV} className="btn btn-secondary">
              <Download size={18} />
              <span>Download CV</span>
            </button>

            <a href="#contact" className="btn btn-outline">
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Quick Contact Links */}
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub Profile">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-link" title="Send Email">
              <Mail size={20} />
            </a>
            <a href={`tel:${personalInfo.phone}`} className="social-link" title="Call Phone">
              <Phone size={20} />
            </a>
            <div className="hero-location">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right Visual Avatar Column */}
        <div className="hero-visual">
          <div className="avatar-frame-wrapper">
            <div className="avatar-glow"></div>
            <div className="avatar-frame glass-card">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="avatar-img"
                onError={(e) => {
                  e.target.src = '/avatar.svg';
                }}
              />
              <div className="avatar-fallback" style={{ display: 'none' }}>
                <Code2 size={70} className="fallback-icon" />
                <span className="fallback-name">Maryam Tarek</span>
                <span className="fallback-role">React Developer</span>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="floating-card card-top glass-card">
              <div className="card-icon bg-cyan"><Cpu size={18} /></div>
              <div>
                <div className="floating-title">Front-End Trainee</div>
                <div className="floating-sub">ITI Alumni 2025</div>
              </div>
            </div>

            <div className="floating-card card-bottom glass-card">
              <div className="card-icon bg-purple"><Sparkles size={18} /></div>
              <div>
                <div className="floating-title">Mansoura University</div>
                <div className="floating-sub">Grade: Very Good (83%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 9rem 0 5rem 0;
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badges {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .hero-title {
          font-size: 3.4rem;
          line-height: 1.15;
          margin-bottom: 1.2rem;
          font-weight: 800;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 580px;
          line-height: 1.7;
        }

        .hero-tech-stack {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .tech-label {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .tech-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tech-pill {
          padding: 0.25rem 0.75rem;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--primary);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-link:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px var(--primary-glow);
        }

        .hero-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-left: auto;
        }

        /* Avatar Visual Styles */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .avatar-frame-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .avatar-glow {
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          border-radius: var(--radius-xl);
          opacity: 0.35;
          filter: blur(25px);
          z-index: 0;
        }

        .avatar-frame {
          position: relative;
          z-index: 1;
          border-radius: var(--radius-xl);
          overflow: hidden;
          padding: 12px;
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
        }

        .avatar-img {
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1.1;
          object-fit: cover;
          object-position: top center;
          border-radius: var(--radius-lg);
          display: block;
        }

        .avatar-fallback {
          width: 100%;
          aspect-ratio: 1 / 1.1;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          color: var(--primary);
          text-align: center;
        }

        .fallback-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .fallback-role {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* Floating Cards */
        .floating-card {
          position: absolute;
          z-index: 2;
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid var(--border-accent);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .card-top {
          top: -20px;
          right: -20px;
        }

        .card-bottom {
          bottom: -20px;
          left: -20px;
        }

        .card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .bg-cyan { background: linear-gradient(135deg, #38bdf8, #0284c7); }
        .bg-purple { background: linear-gradient(135deg, #c084fc, #9333ea); }

        .floating-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .floating-sub {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-badges, .hero-tech-stack, .hero-actions, .hero-socials {
            justify-content: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-title {
            font-size: 2.6rem;
          }
          .hero-location {
            margin-left: 0;
          }
          .hero-visual {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
