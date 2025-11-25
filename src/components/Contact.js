import React, { useState } from 'react';
import config from '../config/portfolio';
import emailService from '../services/emailService';

const Contact = () => {
  const [hoveredContact, setHoveredContact] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = emailService.validateForm(formData);
    if (errors.length > 0) {
      alert('Please fix the following errors:\n' + errors.join('\n'));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using the email service
      await emailService.sendEmail(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000); // Clear status after 5 seconds
  };
  
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: config.personal.email || 'irushadilshan@gmail.com',
      link: `mailto:${config.personal.email || 'irushadilshan@gmail.com'}?subject=Let's Collaborate!&body=Hi Irusha,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0ABest regards,`,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      action: 'Send Email'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 76 185 9187',
      link: 'tel:+94761859187',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      action: 'Call Now'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: config.social.linkedin || 'https://linkedin.com/in/irusha-dilshan',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      action: 'Connect'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: `@${config.github.username}`,
      link: `https://github.com/${config.github.username}`,
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      action: 'View Code'
    }
  ];

  return (
    <section id="contact" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #0f1419 100%)',
      position: 'relative'
    }}>
      <div className="floating-blob blob-4"></div>
      
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
             Get In Touch
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
            Let's Collaborate
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Let's collaborate and bring your ideas to life
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '4rem',
          marginBottom: '4rem'
        }}>
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="glass-card"
              onMouseEnter={() => setHoveredContact(index)}
              onMouseLeave={() => setHoveredContact(null)}
              style={{
                padding: '2.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                transform: hoveredContact === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
                border: `1px solid ${hoveredContact === index ? 'rgba(79, 172, 254, 0.3)' : 'rgba(255, 255, 255, 0.1)'}` 
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: method.gradient,
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                position: 'relative',
                transform: hoveredContact === index ? 'scale(1.1) rotate(10deg)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '3px',
                  background: '#0a0a0f',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {method.icon}
                </div>
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                background: method.gradient,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {method.title}
              </h3>

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '1.5rem',
                fontWeight: 500
              }}>
                {method.value}
              </p>

              <a
                href={method.link}
                target={method.link.startsWith('mailto:') || method.link.startsWith('tel:') ? '_self' : '_blank'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                style={{
                  background: method.gradient,
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  color: '#000000',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: hoveredContact === index ? 'scale(1.05)' : 'scale(1)',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass-card" style={{
          padding: '3rem',
          marginTop: '4rem',
          maxWidth: '800px',
          margin: '4rem auto 0'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Send Me a Message
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Have a project in mind? Let's discuss how we can work together!
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid rgba(79, 172, 254, 0.5)'}
                  onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid rgba(79, 172, 254, 0.5)'}
                  onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.border = '1px solid rgba(79, 172, 254, 0.5)'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.border = '1px solid rgba(79, 172, 254, 0.5)'}
                onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                placeholder="Tell me about your project, timeline, and budget..."
              />
            </div>

            {/* Submit Status */}
            {submitStatus && (
              <div style={{
                padding: '1rem',
                borderRadius: '10px',
                textAlign: 'center',
                background: submitStatus === 'success' 
                  ? 'rgba(67, 233, 123, 0.1)' 
                  : 'rgba(255, 107, 107, 0.1)',
                border: `1px solid ${
                  submitStatus === 'success' 
                    ? 'rgba(67, 233, 123, 0.3)' 
                    : 'rgba(255, 107, 107, 0.3)'
                }`,
                color: submitStatus === 'success' ? '#43e97b' : '#ff6b6b'
              }}>
                {submitStatus === 'success' 
                  ? '✅ Message received! Running in demo mode. Check HOW_TO_MAKE_CONTACT_FORM_WORK.md to enable real emails.' 
                  : '❌ Failed to send message. Please try again or email me directly at irushadilsha2@gmail.com'
                }
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: isSubmitting 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: isSubmitting ? 'rgba(255, 255, 255, 0.5)' : '#000',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                margin: '0 auto',
                minWidth: '200px'
              }}
            >
              {isSubmitting ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Sending...
                </>
              ) : (
                <>
                  🚀 Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Call to Action */}
        <div className="glass-card" style={{
          padding: '3rem',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 700,
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
            I'm always excited to work on new projects and collaborate with amazing people. 
            Let's discuss how we can bring your vision to life!
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href={`mailto:${config.personal.email || 'irushadilshan@gmail.com'}?subject=New Project Inquiry`}
              style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: '#000',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 700,
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
            >
              Start a Project
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              style={{
                background: 'transparent',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Add CSS animation for loading spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Contact;
