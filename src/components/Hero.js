import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaMapMarkerAlt, FaCode, FaMobile, FaServer } from 'react-icons/fa';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    { name: 'React.js', icon: '⚛️', delay: '0s' },
    { name: 'Android', icon: '📱', delay: '0.5s' },
    { name: 'Node.js', icon: '🟢', delay: '1s' },
    { name: 'MongoDB', icon: '🍃', delay: '1.5s' },
  ];

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
    }}>
      {/* Dynamic Animated Background */}
      <div className="floating-blob blob-1" style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }}></div>
      <div className="floating-blob blob-2" style={{
        transform: `translate(${-mousePosition.x * 0.01}px, ${mousePosition.y * 0.015}px)`
      }}></div>
      <div className="floating-blob blob-3" style={{
        transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.02}px)`
      }}></div>
      
      {/* Mesh Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        pointerEvents: 'none'
      }}></div>
      
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 768 ? '1.2fr 0.8fr' : '1fr',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          {/* Left Column - Main Content */}
          <div style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '50px',
              marginBottom: '2rem',
              fontSize: '0.875rem',
              color: '#10b981'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#10b981',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>
              Available for new opportunities
            </div>

            {/* Main Heading */}
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              marginBottom: '1rem',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              Hello, I'm
            </div>
            
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em'
            }}>
              Irusha Dilshan
            </h1>

            {/* Role & Expertise */}
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Full-Stack Developer & Mobile App Specialist
            </div>

            {/* Specialization Pills */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {[
                { icon: '⚛️', text: 'React.js' },
                { icon: '📱', text: 'Android' },
                { icon: '🔧', text: 'MERN Stack' },
                { icon: '☁️', text: 'Cloud' }
              ].map((skill, index) => (
                <div key={skill.text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}>
                  <span>{skill.icon}</span>
                  {skill.text}
                </div>
              ))}
            </div>

            {/* Enhanced Description Card */}
            <div className="glass-card" style={{
              padding: '2rem',
              marginBottom: '2.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)'
              }}></div>
              
              <p style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                🚀 Building <strong style={{color: '#06b6d4'}}>ServSync</strong> - A cutting-edge service management platform that revolutionizes business operations
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaCode style={{ color: '#8b5cf6', fontSize: '1.2rem' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
                    5+ Years Coding
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaMobile style={{ color: '#06b6d4', fontSize: '1.2rem' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
                    Mobile Expert
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaServer style={{ color: '#10b981', fontSize: '1.2rem' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
                    Full-Stack Pro
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                fontStyle: 'italic'
              }}>
                💡 Passionate about Cars 🚗, Travel 🌍, and Photography 📷 | Always exploring new technologies
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <a 
                href="#contact" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
                }}
              >
                Let's Connect
                <FaArrowRight />
              </a>
              
              <a 
                href="#projects" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                View Portfolio
              </a>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <span style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.875rem',
                marginRight: '0.5rem'
              }}>
                Follow me:
              </span>
              <a
                href="https://github.com/IrushaDilshan"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/irusha-dilshan"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.color = '#0077b5';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Right Column - Profile & Stats */}
          {(typeof window !== 'undefined' && window.innerWidth > 768) && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}>
              {/* Main Profile Card */}
              <div className="glass-card" style={{
                padding: '2.5rem',
                textAlign: 'center',
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                maxWidth: '320px',
                width: '100%'
              }}>
                {/* Gradient Border Effect */}
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '-1px',
                  right: '-1px',
                  bottom: '-1px',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))',
                  borderRadius: '24px',
                  zIndex: -1,
                  opacity: 0.5
                }}></div>

                {/* Profile Image */}
                <div style={{
                  width: '140px',
                  height: '140px',
                  margin: '0 auto 2rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                  padding: '4px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src="https://github.com/IrushaDilshan.png"
                      alt="Irusha Dilshan"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '👨‍💻';
                      }}
                    />
                  </div>
                  
                  {/* Online Status */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    width: '24px',
                    height: '24px',
                    background: '#10b981',
                    borderRadius: '50%',
                    border: '3px solid #1e293b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: '#ffffff',
                      borderRadius: '50%',
                      animation: 'pulse 2s infinite'
                    }}></div>
                  </div>
                </div>

                {/* Profile Info */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: '#ffffff'
                }}>
                  Irusha Dilshan
                </h3>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '0.5rem',
                  fontSize: '0.95rem'
                }}>
                  Software Engineering Student
                </p>
                
                <p style={{
                  color: 'rgba(6, 182, 212, 1)',
                  marginBottom: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  📍 SLIIT, Sri Lanka
                </p>

                {/* Stats Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                      marginBottom: '0.25rem'
                    }}>
                      50+
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '500'
                    }}>
                      Projects
                    </span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                      marginBottom: '0.25rem'
                    }}>
                      5+
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '500'
                    }}>
                      Years
                    </span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                      marginBottom: '0.25rem'
                    }}>
                      15+
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: '500'
                    }}>
                      Skills
                    </span>
                  </div>
                </div>

                {/* Quick Contact */}
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '50px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)';
                  }}
                >
                  <span>💬</span>
                  Let's Talk
                </a>
              </div>
              
              {/* Floating Tech Stack Badges */}
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  style={{
                    position: 'absolute',
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50px',
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: tech.delay,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    ...(index === 0 && { top: '15%', right: '-60px' }),
                    ...(index === 1 && { top: '45%', left: '-70px' }),
                    ...(index === 2 && { bottom: '35%', right: '-50px' }),
                    ...(index === 3 && { bottom: '15%', left: '-60px' })
                  }}
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'bounce-soft 3s ease-in-out infinite'
      }}>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent)',
          borderRadius: '2px'
        }}></div>
        <div style={{
          width: '6px',
          height: '10px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '6px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '2px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '1px',
            margin: '2px auto',
            animation: 'scroll-indicator 2s ease-in-out infinite'
          }}></div>
        </div>
        <span style={{
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.5)',
          fontWeight: '500',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginTop: '0.5rem'
        }}>
          Scroll
        </span>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scroll-indicator {
          0%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.3;
            transform: translateY(4px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
