import React from 'react';

const About = () => {
  return (
    <section id="about" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #0f1419 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative'
    }}>
      <div className="floating-blob blob-4"></div>
      
      <div className="container">
        {/* Enhanced Content Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth > 968 ? '1.2fr 0.8fr' : '1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* About Content */}
          <div>
            <div style={{
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              About Me
            </div>
            <h2 className="heading-lg">
              Crafting Digital Excellence Through Innovation
            </h2>
            <div className="glass-card" style={{
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                Hi 👋, I'm Irusha Dilshan! I'm currently working on <strong>ServSync</strong> and learning the 
                <strong> MERN Stack</strong>. As a passionate developer, I specialize in creating innovative 
                mobile applications and full-stack web solutions that solve real-world problems.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.7
              }}>
                I specialize in React.js ecosystem, Android development with Kotlin, and backend 
                technologies including Node.js and Python. Every project I undertake is driven by 
                a commitment to quality, innovation, and user-centered design principles.
              </p>
            </div>
            
            {/* Download Resume Button */}
            <div style={{ marginTop: '2rem' }}>
              <a href="#" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span></span>
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Stats & Achievements */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div className="glass-card glow-blue" style={{
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  5+
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Projects Completed
                </p>
              </div>
              
              <div className="glass-card glow-purple" style={{
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  2+
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Years Experience
                </p>
              </div>
              
              <div className="glass-card glow-green" style={{
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  10+
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Technologies
                </p>
              </div>
              
              <div className="glass-card glow-orange" style={{
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  100%
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Client Satisfaction
                </p>
              </div>
            </div>
            
            {/* Key Achievements */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1.5rem'
              }}>
                Key Achievements
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>
                      IT Undergraduate at SLIIT
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}>
                      Pursuing Bachelor's in Information Technology
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>
                      Full Stack Developer
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}>
                      React.js, Node.js, Android Development
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>
                      Innovation Enthusiast
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}>
                      Always learning and exploring new technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
