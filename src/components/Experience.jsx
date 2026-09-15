import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle, Code2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career Roadmap</span>
          <h2 className="section-title">Professional <span className="gradient-text">Experience & Training</span></h2>
          <p className="section-description">
            Hands-on freelance client work and intensive training under industry leaders.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Marker Icon */}
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>

              {/* Card Content */}
              <div className="timeline-content glass-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-type-badge">{exp.type}</div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="exp-period badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-responsibilities">
                  <h4 className="resp-title">Key Contributions & Accomplishments:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>
                        <CheckCircle size={16} className="check-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-tech-tags">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      <Code2 size={13} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 6rem 0;
          position: relative;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 17px;
          width: 2px;
          background: linear-gradient(180deg, var(--primary) 0%, var(--accent-purple) 100%);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
          z-index: 2;
        }

        .timeline-content {
          padding: 2rem;
          margin-left: 1.5rem;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .exp-type-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .exp-role {
          font-size: 1.35rem;
          color: var(--text-primary);
        }

        .exp-company {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          margin-top: 0.2rem;
        }

        .exp-desc {
          color: var(--text-secondary);
          font-size: 0.98rem;
          margin-bottom: 1.25rem;
        }

        .exp-responsibilities {
          margin-bottom: 1.5rem;
        }

        .resp-title {
          font-size: 0.9rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .exp-responsibilities ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .exp-responsibilities li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .check-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-glass);
        }

        .tech-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .timeline {
            padding-left: 1.5rem;
          }
          .timeline::before {
            left: 10px;
          }
          .timeline-marker {
            left: -1.5rem;
            width: 36px;
            height: 36px;
          }
          .timeline-content {
            margin-left: 0.5rem;
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
