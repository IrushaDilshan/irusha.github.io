import React, { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  
  const services = [
    {
      title: 'Android App Development',
      icon: '📱',
      description: 'Native Android applications using Kotlin with modern Material Design. Specialized in vehicle rental apps, habit trackers, and business solutions.',
      features: ['Kotlin Development', 'Material Design', 'SQLite Database', 'Real-time Features'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      expertise: ['VeeGo Vehicle Rental', 'Habit Tracker App', 'Native Android']
    },
    {
      title: 'MERN Stack Development',
      icon: '🚀',
      description: 'Full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Currently building ServSync service management platform.',
      features: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'RESTful APIs'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      expertise: ['ServSync Platform', 'Full Stack Solutions', 'Modern Web Apps']
    },
    {
      title: 'Business Application Development',
      icon: '💼',
      description: 'Custom business solutions including delivery platforms, customer feedback systems, and service management applications.',
      features: ['Business Logic', 'Customer Management', 'Analytics Dashboard', 'Real-time Operations'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      expertise: ['Delivery Apps', 'Customer Feedback Systems', 'Service Management']
    },
    {
      title: 'UI/UX Design & Prototyping',
      icon: '🎨',
      description: 'Modern mobile and web interface design using Figma. Specialized in creating user-friendly experiences for vehicle rental and business applications.',
      features: ['Figma Prototyping', 'Material Design', 'User Experience', 'Mobile-First Design'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      expertise: ['VeeGo App Design', 'Mobile UI/UX', 'Business App Interfaces']
    },
    {
      title: 'Vehicle Rental Solutions',
      icon: '🚗',
      description: 'Specialized in developing complete vehicle rental systems with booking, tracking, and management features for businesses.',
      features: ['Booking Systems', 'Vehicle Management', 'Real-time Availability', 'Customer Portal'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      expertise: ['VeeGo Platform', 'Rental Management', 'Business Solutions']
    },
    {
      title: 'Custom Mobile Solutions',
      icon: '⚙️',
      description: 'Tailored mobile applications for habit tracking, productivity, and business management with clean architecture and intuitive design.',
      features: ['Custom Features', 'Data Analytics', 'Offline Support', 'Clean Architecture'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      expertise: ['Habit Tracking', 'Productivity Apps', 'Custom Development']
    }
  ];

  return (
    <section id="services" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #16213e 0%, #0f1419 50%, #1a1a2e 100%)',
      position: 'relative'
    }}>
      <div className="floating-blob blob-7"></div>
      
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative'
          }}>
            💼 Services
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
              borderRadius: '2px'
            }}></div>
          </div>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2
          }}>
            Digital Solutions Portfolio
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            I offer comprehensive digital solutions including web development, mobile apps, and POS systems.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: hoveredService === index ? 'translateY(-8px)' : 'translateY(0)',
                background: hoveredService === index 
                  ? 'rgba(255, 255, 255, 0.08)' 
                  : 'rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Gradient Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: service.gradient,
                opacity: hoveredService === index ? 1 : 0.7,
                transition: 'opacity 0.3s ease'
              }}></div>
              
              {/* Service Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: service.gradient,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem',
                position: 'relative',
                transform: hoveredService === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '2px',
                  background: '#0a0a0f',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {service.icon}
                </div>
              </div>
              
              {/* Service Content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                {service.description}
              </p>
              
              {/* Features List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: service.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      color: '#ffffff',
                      flexShrink: 0
                    }}>
                      
                    </div>
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div style={{ marginTop: '2rem' }}>
                <button style={{
                  background: service.gradient,
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: hoveredService === index ? 1 : 0.8,
                  transform: hoveredService === index ? 'scale(1.05)' : 'scale(1)'
                }}>
                  Learn More
                </button>
              </div>
              
              {/* Hover Effect Overlay */}
              {hoveredService === index && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: service.gradient,
                  opacity: 0.03,
                  pointerEvents: 'none'
                }}></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="glass-card glow-blue" style={{
          padding: '3rem',
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Let's discuss how we can bring your ideas to life with cutting-edge technology 
            and innovative solutions tailored to your business needs.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-glass">
              View Portfolio
            </a>
          </div>
        </div>
        
        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
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
          
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#ffffff'
          }}>
            Ready to Start Your Project?
          </h3>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Let's discuss how I can help bring your ideas to life with cutting-edge technology and exceptional design.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: '#ffffff',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                transform: 'translateY(0)'
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
              💬 Let's Talk
            </a>
            
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.color = 'rgba(255, 255, 255, 0.9)';
              }}
            >
              🚀 View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
