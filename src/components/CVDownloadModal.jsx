import React from 'react';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo, education, experiences, projects, skillCategories } from '../data/portfolioData';

export default function CVDownloadModal({ onClose, showToast }) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Generates a downloadable HTML resume file that opens & prints seamlessly as PDF
    const cvHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Maryam Tarek - Resume</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.5; padding: 30px; color: #111; max-width: 800px; margin: 0 auto; }
          h1 { color: #0284c7; margin-bottom: 2px; }
          .subtitle { font-size: 18px; font-weight: bold; color: #444; margin-bottom: 15px; }
          .contact { font-size: 14px; color: #555; margin-bottom: 20px; border-bottom: 2px solid #0284c7; padding-bottom: 10px; }
          .section-title { font-size: 16px; text-transform: uppercase; color: #0284c7; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-top: 20px; }
          ul { padding-left: 20px; }
          li { margin-bottom: 5px; }
          .item-header { display: flex; justify-content: space-between; font-weight: bold; margin-top: 10px; }
        </style>
      </head>
      <body>
        <h1>${personalInfo.name}</h1>
        <div class="subtitle">${personalInfo.title}</div>
        <div class="contact">
          Phone: ${personalInfo.phone} | Email: ${personalInfo.email}<br/>
          LinkedIn: ${personalInfo.linkedinHandle} | GitHub: ${personalInfo.githubHandle}
        </div>
        
        <div class="section-title">PROFILE</div>
        <p>${personalInfo.summary}</p>
        
        <div class="section-title">EDUCATION</div>
        <div class="item-header">
          <span>Bachelor of Computer and Information Sciences (IT Dept)</span>
          <span>2022 - 2026</span>
        </div>
        <div>Mansoura University | Grade: Very Good (83%)</div>

        <div class="section-title">PROFESSIONAL EXPERIENCE</div>
        <div class="item-header">
          <span>Freelance Front-End Developer @ Smart Pharmacy</span>
          <span>2025 - Present</span>
        </div>
        <ul>
          ${experiences[0].responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>

        <div class="item-header">
          <span>Front-End Trainee @ Information Technology Institute (ITI)</span>
          <span>Aug 2025 - Sep 2025</span>
        </div>
        <ul>
          ${experiences[1].responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>

        <div class="section-title">KEY PROJECTS</div>
        <ul>
          ${projects.map(p => `<li><strong>${p.title}:</strong> ${p.shortDesc}</li>`).join('')}
        </ul>

        <div class="section-title">SKILLS</div>
        <p>${skillCategories.flatMap(c => c.skills.map(s => s.name)).join(' • ')}</p>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;

    const blob = new Blob([cvHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Maryam_Tarek_FrontEnd_Developer_CV.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('CV downloaded successfully! You can open and save it as PDF.');
  };

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cv-modal-header">
          <div>
            <h3 className="cv-modal-title">Curriculum Vitae Preview</h3>
            <p className="cv-modal-sub">Maryam Tarek — Front-end Developer (ReactJS)</p>
          </div>
          <button className="cv-modal-close" onClick={onClose} aria-label="Close CV Modal">
            <X size={20} />
          </button>
        </div>

        {/* CV Actions Bar */}
        <div className="cv-actions-bar">
          <button onClick={handleDownloadPDF} className="btn btn-primary">
            <Download size={18} />
            <span>Download CV File</span>
          </button>
          <button onClick={handlePrint} className="btn btn-secondary">
            <Printer size={18} />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        {/* CV Printable Document Paper */}
        <div className="cv-paper">
          <div className="cv-paper-header">
            <h2>{personalInfo.name}</h2>
            <div className="cv-paper-role">{personalInfo.title}</div>
            <div className="cv-paper-contact">
              <span>{personalInfo.phone}</span> • <span>{personalInfo.email}</span> • <span>{personalInfo.location}</span>
              <br />
              <span>LinkedIn: {personalInfo.linkedinHandle}</span> • <span>GitHub: {personalInfo.githubHandle}</span>
            </div>
          </div>

          <div className="cv-paper-section">
            <h4 className="paper-sec-title">PROFILE</h4>
            <p>{personalInfo.summary}</p>
          </div>

          <div className="cv-paper-section">
            <h4 className="paper-sec-title">EDUCATION</h4>
            <div className="paper-item">
              <div className="item-row">
                <strong>Bachelor of Computer and Information Sciences (IT Dept)</strong>
                <span>2022 – 2026</span>
              </div>
              <div className="item-sub">Mansoura University | Grade: Very Good (83%)</div>
            </div>
          </div>

          <div className="cv-paper-section">
            <h4 className="paper-sec-title">PROFESSIONAL EXPERIENCE</h4>
            {experiences.map((exp, i) => (
              <div key={i} className="paper-item">
                <div className="item-row">
                  <strong>{exp.role} — {exp.company}</strong>
                  <span>{exp.period}</span>
                </div>
                <ul>
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cv-paper-section">
            <h4 className="paper-sec-title">PROJECTS</h4>
            <ul>
              {projects.map((p, i) => (
                <li key={i}>
                  <strong>{p.title}:</strong> {p.shortDesc}
                </li>
              ))}
            </ul>
          </div>

          <div className="cv-paper-section">
            <h4 className="paper-sec-title">SKILLS</h4>
            <p className="skills-inline">
              {skillCategories.flatMap(c => c.skills.map(s => s.name)).join(' • ')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .cv-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .cv-modal-container {
          width: 100%;
          max-width: 850px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-accent);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cv-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 1rem;
        }

        .cv-modal-title {
          font-size: 1.5rem;
        }

        .cv-modal-sub {
          color: var(--primary);
          font-size: 0.9rem;
        }

        .cv-modal-close {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cv-actions-bar {
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
        }

        .cv-paper {
          background: #ffffff;
          color: #1e293b;
          padding: 2.5rem;
          border-radius: var(--radius-sm);
          font-family: Arial, sans-serif;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .cv-paper-header {
          border-bottom: 2px solid #0284c7;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .cv-paper-header h2 {
          color: #0284c7;
          font-size: 1.8rem;
        }

        .cv-paper-role {
          font-weight: bold;
          color: #475569;
          font-size: 1rem;
          margin-bottom: 0.4rem;
        }

        .cv-paper-contact {
          font-size: 0.85rem;
          color: #64748b;
        }

        .cv-paper-section {
          margin-bottom: 1.25rem;
        }

        .paper-sec-title {
          color: #0284c7;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 0.2rem;
          margin-bottom: 0.6rem;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .paper-item {
          margin-bottom: 0.75rem;
        }

        .item-row {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }

        .item-sub {
          color: #475569;
          font-size: 0.85rem;
        }

        .cv-paper ul {
          padding-left: 1.2rem;
          margin-top: 0.4rem;
        }

        .cv-paper li {
          margin-bottom: 0.25rem;
        }

        .skills-inline {
          line-height: 1.6;
          color: #334155;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .cv-paper, .cv-paper * {
            visibility: visible;
          }
          .cv-paper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
