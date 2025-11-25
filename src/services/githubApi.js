import axios from 'axios';
import config from '../config/portfolio';

// GitHub API service to fetch user repositories
class GitHubService {
  constructor() {
    this.baseURL = 'https://api.github.com';
    this.username = config.github.username;
  }

  // Fetch user's public repositories
  async getRepositories(limit = config.github.maxRepos) {
    try {
      const response = await axios.get(`${this.baseURL}/users/${this.username}/repos`, {
        params: {
          sort: 'updated',
          direction: 'desc',
          per_page: limit,
          type: 'owner' // Only repos you own, not forked
        }
      });

      return this.formatRepositories(response.data);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw new Error('Failed to fetch repositories');
    }
  }

  // Format repositories for portfolio display
  formatRepositories(repos) {
    return repos
      .filter(repo => 
        (config.github.excludeForks ? !repo.fork : true) && 
        (config.github.excludeArchived ? !repo.archived : true)
      ) // Filter based on config settings
      .map(repo => ({
        title: this.formatTitle(repo.name),
        description: repo.description || this.getDefaultDescription(repo.name),
        tech: this.extractTechnologies(repo),
        gradient: this.getRandomGradient(),
        status: this.getStatus(repo),
        githubUrl: repo.html_url,
        demoUrl: repo.homepage || '',
        category: this.categorizeRepo(repo),
        icon: this.getProjectIcon(repo),
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        updatedAt: new Date(repo.updated_at),
        isGitHubProject: true // Flag to identify GitHub projects
      }));
  }

  // Format repository name for display
  formatTitle(name) {
    // Handle special cases for better formatting
    const specialFormats = {
      'Vehicle-Rental-Android-App-VeeGo-': 'VeeGo - Vehicle Rental App',
      'Habit-tracker-app': 'Habit Tracker App',
      'Delivery-App': 'Delivery Business Platform',
      'Customer-Complaints-Feedback-Management-': 'Customer Feedback Management System',
      'Vehicle-Rental-App-Design-Figma-': 'VeeGo App Design (Figma)',
      'IrushaDilshan': 'GitHub Profile'
    };
    
    if (specialFormats[name]) {
      return specialFormats[name];
    }
    
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Extract technologies from repository data
  extractTechnologies(repo) {
    const technologies = [];
    
    // Add primary language
    if (repo.language) {
      technologies.push(repo.language);
    }

    // Add common technologies based on repository name and topics
    const topics = repo.topics || [];
    const repoName = repo.name.toLowerCase();

    // React projects
    if (topics.includes('react') || repoName.includes('react')) {
      technologies.push('React.js');
    }

    // Node.js projects
    if (topics.includes('nodejs') || repoName.includes('node')) {
      technologies.push('Node.js');
    }

    // Express.js
    if (topics.includes('express') || repoName.includes('express')) {
      technologies.push('Express.js');
    }

    // Database technologies
    if (topics.includes('mongodb') || repoName.includes('mongo')) {
      technologies.push('MongoDB');
    }

    if (topics.includes('mysql') || repoName.includes('mysql')) {
      technologies.push('MySQL');
    }

    // Add more based on common patterns
    if (repoName.includes('api')) {
      technologies.push('REST API');
    }

    if (repoName.includes('mobile') || repoName.includes('android')) {
      technologies.push('Mobile Development');
    }

    // Ensure we have at least some technologies
    if (technologies.length === 0) {
      technologies.push('Development');
    }

    return [...new Set(technologies)]; // Remove duplicates
  }

  // Get random gradient for project cards
  getRandomGradient() {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #a0c4ff 0%, #b9fbc0 100%)',
      'linear-gradient(135deg, #f8bbd9 0%, #e8cdf0 100%)'
    ];
    
    return gradients[Math.floor(Math.random() * gradients.length)];
  }

  // Determine project status
  getStatus(repo) {
    const daysSinceUpdate = (Date.now() - new Date(repo.updated_at)) / (1000 * 60 * 60 * 24);
    
    if (daysSinceUpdate < 7) {
      return 'In Development';
    } else if (repo.homepage) {
      return 'Live';
    } else {
      return 'Completed';
    }
  }

  // Categorize repository based on language and topics
  categorizeRepo(repo) {
    const language = repo.language?.toLowerCase() || '';
    const name = repo.name.toLowerCase();
    const topics = repo.topics || [];

    // Mobile development
    if (language === 'java' && (name.includes('android') || topics.includes('android'))) {
      return 'Mobile';
    }

    if (language === 'kotlin' || topics.includes('android')) {
      return 'Mobile';
    }

    // Frontend
    if (language === 'javascript' || language === 'typescript' || topics.includes('react') || topics.includes('vue') || topics.includes('angular')) {
      return 'Frontend';
    }

    // Backend
    if (topics.includes('api') || name.includes('api') || name.includes('server') || topics.includes('nodejs')) {
      return 'Backend';
    }

    // Full Stack
    if (topics.includes('fullstack') || (topics.includes('react') && topics.includes('nodejs'))) {
      return 'Full Stack';
    }

    // Desktop Application
    if (language === 'java' && !name.includes('android')) {
      return 'Desktop Application';
    }

    if (language === 'c#' || language === 'c++') {
      return 'Desktop Application';
    }

    // Default based on primary language
    switch (language) {
      case 'html':
      case 'css':
        return 'Frontend';
      case 'python':
        return 'Backend';
      default:
        return 'Development';
    }
  }

  // Get default description when none is provided
  getDefaultDescription(repoName) {
    const descriptions = {
      'Vehicle-Rental-Android-App-VeeGo-': 'Modern Android application for vehicle rental services with booking system and real-time availability.',
      'Habit-tracker-app': 'Android application for tracking daily habits with progress analytics and motivational features.',
      'Delivery-App': 'Comprehensive delivery business platform with order management and real-time tracking capabilities.',
      'Customer-Complaints-Feedback-Management-': 'Web-based system for managing customer feedback and service complaints with analytics dashboard.',
      'Vehicle-Rental-App-Design-Figma-': 'Complete UI/UX design system for VeeGo vehicle rental application created in Figma.',
      'IrushaDilshan': 'GitHub profile repository showcasing development journey and technical expertise.'
    };
    
    return descriptions[repoName] || `${this.formatTitle(repoName)} - A development project showcasing modern programming practices and innovative solutions.`;
  }

  // Get appropriate icon for project
  getProjectIcon(repo) {
    const language = repo.language?.toLowerCase() || '';
    const name = repo.name.toLowerCase();
    const topics = repo.topics || [];

    // Specific project types
    if (name.includes('portfolio')) return '💼';
    if (name.includes('ecommerce') || name.includes('shop')) return '🛒';
    if (name.includes('chat') || name.includes('message')) return '💬';
    if (name.includes('blog')) return '📝';
    if (name.includes('game')) return '🎮';
    if (name.includes('weather')) return '🌤️';
    if (name.includes('todo') || name.includes('task')) return '📋';
    if (name.includes('pos') || name.includes('point-of-sale')) return '💳';
    if (name.includes('delivery')) return '🚚';

    // By technology/language
    if (topics.includes('react') || name.includes('react')) return '⚛️';
    if (language === 'java' && name.includes('android')) return '📱';
    if (language === 'java') return '☕';
    if (language === 'javascript' || language === 'typescript') return '🟨';
    if (language === 'python') return '🐍';
    if (language === 'html' || language === 'css') return '🌐';
    if (topics.includes('api') || name.includes('api')) return '⚙️';

    // Default
    return '💻';
  }

  // Fetch additional repository details (languages used)
  async getRepositoryLanguages(repoName) {
    try {
      const response = await axios.get(`${this.baseURL}/repos/${this.username}/${repoName}/languages`);
      return Object.keys(response.data);
    } catch (error) {
      console.error(`Error fetching languages for ${repoName}:`, error);
      return [];
    }
  }
}

export default new GitHubService();