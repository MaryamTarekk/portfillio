import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, FolderCheck, Code, Sparkles } from 'lucide-react';
import { personalInfo, stats, education } from '../data/portfolioData';

export default function AboutEducation() {
  const iconMap = {
    FolderCheck: <FolderCheck size={26} className="stat-icon-svg text-cyan" />,
    GraduationCap: <GraduationCap size={26} className="stat-icon-svg text-purple" />,
    Award: <Award size={26} className="stat-icon-svg text-amber" />,
    Code: <Code size={26} className="stat-icon-svg text-emerald" />
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Background & Education</span>
          <h2 className="section-title">About <span className="gradient-text">Maryam Tarek</span></h2>
          <p className="section-description">
            Passionate Front-End Developer with academic excellence and hands-on experience in building interactive web apps.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-icon-box">
                {iconMap[stat.icon]}
              </div>
              <div className="stat-info">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                {stat.sub && <span className="stat-sub">{stat.sub}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Bio Split Layout */}
        <div className="about-grid">
          {/* Bio Overview */}
          <div className="bio-card glass-card">
            <h3 className="card-heading">
              <Sparkles size={22} className="heading-icon text-cyan" />
              <span>Professional Overview</span>
            </h3>
            <p className="bio-text">
              {personalInfo.summary}
            </p>
            <div className="bio-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Specialized in React Component Architecture & Context API</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>REST API Integration with Axios & Fetch API</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Pixel-Perfect Responsive UI with CSS3, Bootstrap & Tailwind standards</span>
              </div>
            </div>
          </div>

          {/* Academic Education */}
          <div className="education-card glass-card">
            <h3 className="card-heading">
              <GraduationCap size={24} className="heading-icon text-purple" />
              <span>Academic Background</span>
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="edu-item">
                <div className="edu-header">
                  <div>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <div className="edu-faculty">{edu.faculty}</div>
                    <div className="edu-dept">{edu.department}</div>
                  </div>
                  <div className="edu-badge badge">
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="edu-grade-box">
                  <span className="grade-label">Overall Academic Grade:</span>
                  <span className="grade-value">{edu.grade}</span>
                </div>

                <ul className="edu-bullet-list">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.3);
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .stat-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .stat-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-cyan { color: #38bdf8; }
        .text-purple { color: #c084fc; }
        .text-amber { color: #fbbf24; }
        .text-emerald { color: #34d399; }

        .stat-value {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .stat-sub {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .bio-card, .education-card {
          padding: 2rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.35rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .bio-text {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.8rem;
        }

        .bio-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .edu-institution {
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .edu-faculty {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .edu-dept {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .edu-grade-box {
          background: rgba(56, 189, 248, 0.08);
          border: 1px dashed var(--border-accent);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }

        .grade-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .grade-value {
          font-weight: 700;
          color: var(--accent-emerald);
          font-size: 1.05rem;
        }

        .edu-bullet-list {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .edu-bullet-list li {
          position: relative;
          padding-left: 1.4rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .edu-bullet-list li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
