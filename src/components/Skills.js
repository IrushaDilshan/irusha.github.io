import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillCategories = [
    {
      category: 'Mobile Development', 
      icon: '📱',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: [
        { name: 'Kotlin', level: 92, icon: '🟣', description: 'Native Android Development' },
        { name: 'Android Studio', level: 90, icon: '🤖', description: 'Native Android Apps' },
        { name: 'Java', level: 85, icon: '☕', description: 'Android & Backend Development' },
        { name: 'Mobile UI/UX', level: 88, icon: '🎨', description: 'Modern Mobile Interfaces' }
      ]
    },
    {
      category: 'Full-Stack Web Development',
      icon: '⚡',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: [
        { name: 'MERN Stack', level: 85, icon: '🔥', description: 'MongoDB, Express, React, Node' },
        { name: 'JavaScript/ES6+', level: 88, icon: '🟨', description: 'Modern JavaScript Development' },
        { name: 'React.js', level: 82, icon: '⚛️', description: 'Component-based UI Development' },
        { name: 'Node.js', level: 80, icon: '🟢', description: 'Server-side JavaScript' }
      ]
    },
    {
      category: 'Design & Business Systems',
      icon: '⚙️', 
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'Figma', level: 85, icon: '🎨', description: 'UI/UX Design & Prototyping' },
        { name: 'Business Logic', level: 82, icon: '💼', description: 'Vehicle Rental & Delivery Apps' },
        { name: 'Customer Management', level: 78, icon: '👥', description: 'Feedback & Complaint Systems' },
        { name: 'Bootstrap', level: 80, icon: '🅱️', description: 'Responsive Web Design' }
      ]
    }
  ];

  return (
    <section id="skills" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)'
    }}>
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
            ✨ Skills & Expertise
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
            Crafting Digital Excellence
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Specialized in modern web development, mobile applications, and innovative digital solutions 
            that drive business growth and user engagement.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100vw - 2rem), 1fr))',
          gap: '2.5rem',
          marginTop: '4rem',
          maxWidth: '1400px',
          margin: '4rem auto 0',
          padding: '0 1rem'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card"
              style={{
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.4s ease',
                transform: hoveredSkill === categoryIndex ? 'translateY(-8px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredSkill(categoryIndex)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '2rem',
                minHeight: '70px'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: category.gradient,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  position: 'relative',
                  transform: hoveredSkill === categoryIndex ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '3px',
                    background: '#0a0a0f',
                    borderRadius: '17px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {category.icon}
                  </div>
                </div>
                <div style={{
                  flex: 1,
                  paddingTop: '8px'
                }}>
                  <h3 
                    className="skill-card-header"
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      margin: 0,
                      background: category.gradient,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: '1.3'
                    }}
                  >
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    style={{
                      padding: '1.25rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                        <div>
                          <span style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#ffffff'
                          }}>
                            {skill.name}
                          </span>
                          <p style={{
                            fontSize: '0.875rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            margin: '0.25rem 0 0 0',
                            lineHeight: 1.4
                          }}>
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        background: category.gradient,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {skill.level}%
                      </div>
                    </div>
                    
                    {/* Modern Progress Bar */}
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: category.gradient,
                        borderRadius: '4px',
                        transition: 'width 1.5s ease-out',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '30px',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                          animation: hoveredSkill === categoryIndex ? 'shimmer 2s ease-in-out infinite' : 'none'
                        }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
