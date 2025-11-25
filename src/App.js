import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/globals.css';

// Import all components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Modern Loading Component
const LoadingScreen = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  }}>
    {/* Animated Logo */}
    <div style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      marginBottom: '2rem',
      animation: 'pulse 2s ease-in-out infinite',
      boxShadow: '0 0 50px rgba(99, 102, 241, 0.5)'
    }}>
      👨‍💻
    </div>
    
    {/* Loading Text */}
    <h2 style={{
      fontSize: '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      textAlign: 'center'
    }}>
      Irusha Dilshan
    </h2>
    
    <p style={{
      fontSize: '1.125rem',
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '2rem',
      textAlign: 'center'
    }}>
      Crafting Digital Excellence
    </p>
    
    {/* Modern Progress Bar */}
    <div style={{
      width: '200px',
      height: '4px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '2px',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
        backgroundSize: '200% 100%',
        animation: 'loading-bar 2s ease-in-out infinite',
        borderRadius: '2px'
      }}></div>
    </div>

    <style jsx>{`
      @keyframes loading-bar {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `}</style>
  </div>
);

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        border: 'none',
        color: '#ffffff',
        fontSize: '1.25rem',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px) scale(1.1)';
        e.target.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
      }}
    >
      ↑
    </button>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for a smooth user experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App" style={{ position: 'relative' }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Additional modern styling */}
      <style jsx global>{`
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Improved focus styles */
        *:focus {
          outline: 2px solid rgba(99, 102, 241, 0.5);
          outline-offset: 2px;
        }
        
        /* Selection styling */
        ::selection {
          background: rgba(99, 102, 241, 0.3);
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}

export default App;
