import React, { useState } from 'react';
import { Play, Github, ExternalLink, Sparkles, Folder, Code } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'React App', 'JavaScript Tool'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-description">
            Explore my recent web applications, interactive tools, and React implementations. Click "Live Demo" to test them out!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  <Folder size={24} className="folder-icon" />
                </div>
                <div className="project-badges">
                  {project.featured && (
                    <span className="badge badge-success">
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                  <span className="badge">{project.category}</span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDesc}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-pill-small">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button onClick={() => onSelectProject(project)} className="btn btn-primary btn-demo">
                  <Play size={16} />
                  <span>Try Live Demo</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-icon-only"
                  title="View Source Code on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.2);
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--primary-glow);
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .project-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .project-badges {
          display: flex;
          gap: 0.4rem;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tech-pill-small {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .btn-demo {
          flex: 1;
          font-size: 0.875rem;
        }

        .btn-icon-only {
          padding: 0.75rem;
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
