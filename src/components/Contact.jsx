import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ showToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-description">
            Looking for a skilled Front-End React Developer for your team or freelance project? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Info */}
          <div className="contact-info-col">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-subtext">
              I am actively seeking full-time, remote, or freelance front-end developer roles. Let's build something great together.
            </p>

            <div className="contact-cards">
              {/* Email Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon text-cyan">
                  <Mail size={22} />
                </div>
                <div className="contact-card-body">
                  <span className="card-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="card-value">{personalInfo.email}</a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.email, 'Email')} 
                  className="copy-btn"
                  title="Copy Email"
                >
                  {copiedField === 'Email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon text-purple">
                  <Phone size={22} />
                </div>
                <div className="contact-card-body">
                  <span className="card-label">Phone / WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="card-value">{personalInfo.phone}</a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.phone, 'Phone')} 
                  className="copy-btn"
                  title="Copy Phone Number"
                >
                  {copiedField === 'Phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon text-amber">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-body">
                  <span className="card-label">Location</span>
                  <span className="card-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="social-links-box">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn glass-card">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn glass-card">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <h3 className="form-heading">Send a Message</h3>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Job Opportunity / Project Request"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  required 
                  placeholder="Hello Maryam, I reviewed your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="form-input textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                <Send size={18} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 6rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
        }

        .contact-heading {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .contact-subtext {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          padding: 1.2rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .contact-card-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .card-value {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .card-value:hover {
          color: var(--primary);
        }

        .copy-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
        }

        .social-links-box {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          flex: 1;
          padding: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Form Styles */
        .contact-form {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-heading {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .textarea {
          resize: vertical;
        }

        .form-submit-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
