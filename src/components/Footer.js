import React, { useState } from 'react';
import config from '../config/portfolio';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: config.social.linkedin,
      color: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
      hoverColor: '#0077B5'
    },
    { 
      name: 'GitHub', 
      icon: '💻', 
      url: `https://github.com/${config.github.username}`,
      color: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)',
      hoverColor: '#333333'
    },
    { 
      name: 'Email', 
      icon: '📧', 
      url: `mailto:${config.personal.email}?subject=Let's collaborate!`,
      color: 'linear-gradient(135deg, #EA4335 0%, #C5221F 100%)',
      hoverColor: '#EA4335'
    },
    { 
      name: 'Phone', 
      icon: '📱', 
      url: `tel:${config.personal.phone}`,
      color: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      hoverColor: '#25D366'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer style={{
      padding: '6rem 0 3rem',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f1419 100%)',
      borderTop: '1px solid rgba(79, 172, 254, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(79, 172, 254, 0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 1
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Section */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#000'
              }}>
                ID
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  margin: 0,
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2
                }}>
                  Irusha Dilshan
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0,
                  fontWeight: 500
                }}>
                  Full-Stack Developer
                </p>
              </div>
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              fontSize: '1.05rem'
            }}>
              Full-Stack Developer & Mobile App Creator specializing in modern web technologies and innovative digital solutions.
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: '55px',
                    height: '55px',
                    background: hoveredSocial === index 
                      ? link.color 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `2px solid ${hoveredSocial === index 
                      ? 'transparent' 
                      : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    textDecoration: 'none',
                    transition: 'all 0.4s ease',
                    transform: hoveredSocial === index ? 'translateY(-5px) scale(1.05)' : 'translateY(0)',
                    boxShadow: hoveredSocial === index 
                      ? `0 10px 30px ${link.hoverColor}40` 
                      : '0 5px 15px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                  title={`Connect on ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '2rem',
              color: '#ffffff',
              position: 'relative'
            }}>
              Quick Links
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '50px',
                height: '3px',
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                borderRadius: '2px'
              }}></div>
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    color: hoveredLink === index ? '#4facfe' : 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '0.5rem 0',
                    borderRadius: '8px',
                    transform: hoveredLink === index ? 'translateX(10px)' : 'translateX(0)'
                  }}
                >
                  <span style={{
                    fontSize: '0.8rem',
                    opacity: hoveredLink === index ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    →
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '2rem',
              color: '#ffffff',
              position: 'relative'
            }}>
              Get In Touch
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '50px',
                height: '3px',
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                borderRadius: '2px'
              }}></div>
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{ fontSize: '1.2rem' }}>📧</span>
                <div>
                  <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Email</p>
                  <a href={`mailto:${config.personal.email}`} style={{
                    color: '#4facfe',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}>
                    {config.personal.email}
                  </a>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div>
                  <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Location</p>
                  <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                    {config.personal.location}
                  </p>
                </div>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.05) 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(79, 172, 254, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#000000',
                  animation: 'pulse 2s infinite'
                }}>
                  <span>🚀</span>
                  Available for Projects
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.95rem',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>©</span>
              {currentYear} Irusha Dilshan. All rights reserved.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Made with <span style={{ color: '#ff6b6b', fontSize: '1rem' }}>❤️</span> using React.js
            </span>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
