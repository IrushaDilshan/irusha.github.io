import React, { useState, useEffect } from 'react';
import githubService from '../services/githubApi';
import { realProjects } from '../config/realProjects';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'featured', 'github'
  
  // Fetch GitHub repositories on component mount
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        const repos = await githubService.getRepositories(8); // Fetch top 8 repositories
        console.log('Fetched GitHub projects:', repos); // Debug log
        setGithubProjects(repos);
        setError(null);
      } catch (err) {
        setError('Failed to fetch GitHub projects');
        console.error('Error fetching GitHub projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Your real featured projects from GitHub
  const featuredProjects = realProjects;

  // Combine featured and GitHub projects based on active tab
  const getDisplayProjects = () => {
    switch (activeTab) {
      case 'featured':
        return featuredProjects;
      case 'github':
        return githubProjects;
      case 'all':
      default:
        return [...featuredProjects, ...githubProjects];
    }
  };

  const displayProjects = getDisplayProjects();

  return (
    <section id="projects" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #0f1419 0%, #1a1a2e 100%)',
      position: 'relative'
    }}>
      <div className="floating-blob blob-3"></div>
      
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
             My Projects
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
            Showcase of Recent Work
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400,
            marginBottom: '3rem'
          }}>
            Showcase of my recent work and development expertise
          </p>

          {/* Project filter tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {[
              { key: 'all', label: 'All Projects', count: featuredProjects.length + githubProjects.length },
              { key: 'featured', label: 'Featured', count: featuredProjects.length },
              { key: 'github', label: 'GitHub Repos', count: githubProjects.length }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '50px',
                  border: 'none',
                  background: activeTab === tab.key 
                    ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: activeTab === tab.key ? '#000' : '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(10px)',
                  transform: hoveredProject === `tab-${tab.key}` ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: activeTab === tab.key 
                    ? '0 10px 30px rgba(79, 172, 254, 0.3)'
                    : '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHoveredProject(`tab-${tab.key}`)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {tab.label}
                <span style={{
                  background: activeTab === tab.key ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                  padding: '4px 8px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  minWidth: '20px',
                  textAlign: 'center'
                }}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Loading state */}
          {loading && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid rgba(79, 172, 254, 0.3)',
                borderTop: '3px solid #4facfe',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginRight: '1rem'
              }}></div>
              Loading GitHub repositories...
            </div>
          )}

          {/* Error state */}
          {error && (
            <div style={{
              background: 'rgba(255, 0, 0, 0.1)',
              border: '1px solid rgba(255, 0, 0, 0.3)',
              borderRadius: '10px',
              padding: '1rem',
              margin: '2rem auto',
              maxWidth: '500px',
              textAlign: 'center',
              color: '#ff6b6b'
            }}>
              {error}
            </div>
          )}
        </div>
        
        {!loading && displayProjects.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100vw - 2rem), 1fr))',
            gap: '2.5rem',
            marginTop: '2rem',
            maxWidth: '1400px',
            margin: '2rem auto 0',
            padding: '0 1rem'
          }}>
            {displayProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                transform: hoveredProject === index ? 'translateY(-12px) scale(1.02)' : 'translateY(0)',
                border: `1px solid ${hoveredProject === index ? 'rgba(79, 172, 254, 0.3)' : 'rgba(255, 255, 255, 0.1)'}` 
              }}
            >
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                padding: '0.5rem 1rem',
                background: project.gradient,
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#000000'
              }}>
                {project.status}
              </div>

              <div style={{
                width: '80px',
                height: '80px',
                background: project.gradient,
                borderRadius: '20px',
                marginBottom: '2rem',
                position: 'relative',
                transform: hoveredProject === index ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '3px',
                  background: '#0a0a0f',
                  borderRadius: '17px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}>
                  {project.icon}
                </div>
              </div>

              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '1rem',
                background: project.gradient,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                minHeight: '2.5rem',
                lineHeight: '1.3',
                wordWrap: 'break-word',
                hyphens: 'auto'
              }}>
                {project.title || 'Untitled Project'}
              </h3>

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                {project.description}
              </p>

              {/* GitHub-specific stats */}
              {project.isGitHubProject && (
                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {project.stars > 0 && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <span style={{ color: '#ffd700' }}>⭐</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                        {project.stars} {project.stars === 1 ? 'star' : 'stars'}
                      </span>
                    </div>
                  )}
                  {project.forks > 0 && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <span style={{ color: '#4facfe' }}>🍴</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                        {project.forks} {project.forks === 1 ? 'fork' : 'forks'}
                      </span>
                    </div>
                  )}
                  {project.language && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: project.gradient
                      }}></div>
                      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                        {project.language}
                      </span>
                    </div>
                  )}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.85rem',
                    marginLeft: 'auto'
                  }}>
                    Updated {project.updatedAt ? new Date(project.updatedAt).toLocaleDateString() : 'recently'}
                  </div>
                </div>
              )}

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2rem'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '15px',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: project.gradient,
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '25px',
                      color: '#000000',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    🚀 Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  📂 Source Code
                </a>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && displayProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📁</div>
            <h3 style={{ margin: '0 0 1rem 0', color: 'rgba(255, 255, 255, 0.8)' }}>
              No projects found
            </h3>
            <p>Please check back later for updates.</p>
          </div>
        )}
      </div>

      {/* Add CSS animation for loading spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
