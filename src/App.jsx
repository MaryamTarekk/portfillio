import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CVDownloadModal from './components/CVDownloadModal';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCVModal, setShowCVModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="app-main">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onDownloadCV={() => setShowCVModal(true)} 
      />

      <main>
        <Hero onDownloadCV={() => setShowCVModal(true)} />
        <AboutEducation />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Contact showToast={showToast} />
      </main>

      <Footer />

      {/* Project Interactive Preview Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* CV Download / Print Preview Modal */}
      {showCVModal && (
        <CVDownloadModal 
          onClose={() => setShowCVModal(false)} 
          showToast={showToast} 
        />
      )}

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle size={20} className="text-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
