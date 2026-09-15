import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  FileCode, Palette, Zap, Layout, Atom, Navigation, Layers, Grid, 
  Rocket, Globe, RefreshCw, ArrowRightLeft, Database, GitBranch, 
  Monitor, Box, Sparkles 
} from 'lucide-react';

export default function Skills() {
  const iconMap = {
    FileCode: <FileCode size={20} />,
    Palette: <Palette size={20} />,
    Zap: <Zap size={20} />,
    Layout: <Layout size={20} />,
    Atom: <Atom size={20} />,
    Navigation: <Navigation size={20} />,
    Layers: <Layers size={20} />,
    Grid: <Grid size={20} />,
    Rocket: <Rocket size={20} />,
    Globe: <Globe size={20} />,
    RefreshCw: <RefreshCw size={20} />,
    ArrowRightLeft: <ArrowRightLeft size={20} />,
    Database: <Database size={20} />,
    GitBranch: <GitBranch size={20} />,
    Monitor: <Monitor size={20} />,
    Box: <Box size={20} />,
    Sparkles: <Sparkles size={20} />
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Expertise</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-description">
            A breakdown of my front-end engineering skillset, frameworks, and developer workflows.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              <h3 className="category-title">{cat.name}</h3>
              <p className="category-desc">{cat.description}</p>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-icon">
                      {iconMap[skill.icon] || <Sparkles size={18} />}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.4);
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .category-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          min-height: 2.4rem;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.65rem 0.85rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .skill-item:hover {
          background: var(--primary-glow);
          border-color: var(--border-accent);
          transform: translateX(4px);
        }

        .skill-icon {
          color: var(--primary);
          display: flex;
          align-items: center;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .skill-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .skill-level {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-purple);
        }
      `}</style>
    </section>
  );
}
