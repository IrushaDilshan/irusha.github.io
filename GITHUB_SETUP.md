# GitHub Portfolio Integration Guide

Your portfolio now automatically fetches and displays your GitHub repositories! Here's how to customize it:

## 🔧 Configuration

### 1. Update Your GitHub Username

Edit `src/config/portfolio.js` and update your GitHub username:

```javascript
export const config = {
  github: {
    username: 'YourGitHubUsername', // ← Change this to your GitHub username
    maxRepos: 8,
    excludeForks: true,
    excludeArchived: true
  }
};
```

### 2. Personal Information

Update your personal details in the same config file:

```javascript
personal: {
  name: 'Your Name',
  email: 'your.email@example.com',
  location: 'Your Location'
},

social: {
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/your-handle',
  instagram: 'https://instagram.com/your-handle'
}
```

## 🎨 Project Display Features

Your portfolio now includes:

### **Three Project Views:**
- **All Projects**: Shows both featured projects and GitHub repositories
- **Featured**: Shows only your manually curated projects
- **GitHub Repos**: Shows only repositories from GitHub

### **GitHub Repository Information:**
- ⭐ Star count
- 🍴 Fork count
- 💻 Primary programming language
- 📅 Last updated date
- 🔗 Direct links to repository and live demos

### **Smart Categorization:**
The system automatically categorizes your repositories based on:
- Programming languages used
- Repository names and descriptions
- Topics/tags you've added to your repos

## 🚀 Enhancing Your GitHub Repositories

To make your repositories look better in your portfolio:

### 1. Add Descriptions
Make sure each repository has a clear, concise description:
```
Settings → General → Description
```

### 2. Add Topics/Tags
Add relevant topics to help with categorization:
```
Settings → General → Topics
```

Examples: `react`, `nodejs`, `mobile-app`, `api`, `fullstack`

### 3. Set Homepage URLs
If you have a live demo, add it as the homepage:
```
Settings → General → Website
```

### 4. Use Clear Repository Names
Use descriptive names with hyphens:
- ✅ `ecommerce-react-app`
- ✅ `weather-api-nodejs`
- ❌ `project1`
- ❌ `test-repo`

## 🎯 Featured Projects

You can still manually add special projects to the "Featured" section by editing:
`src/components/Projects.js` → `featuredProjects` array

```javascript
const featuredProjects = [
  {
    title: 'Special Project',
    description: 'This is a highlighted project',
    tech: ['React.js', 'Node.js'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    status: 'Live',
    githubUrl: 'https://github.com/YourUsername/repo',
    demoUrl: 'https://your-demo.com',
    category: 'Full Stack',
    icon: '🚀'
  }
];
```

## 🔄 Refreshing Repository Data

The GitHub repositories are automatically fetched when someone visits your portfolio. The data includes:

- Repository name and description
- Programming languages used
- Star and fork counts
- Last update date
- Homepage URL (if set)

## 📱 Responsive Design

Your portfolio is fully responsive and will look great on:
- 🖥️ Desktop computers
- 📱 Mobile phones
- 📊 Tablets

## 🛠️ Troubleshooting

### Repositories not showing?
1. Check your GitHub username in `src/config/portfolio.js`
2. Make sure your repositories are public
3. Check the browser console for API errors

### Want to exclude certain repositories?
1. Make them private on GitHub, or
2. Add custom filtering logic in `src/services/githubApi.js`

### Repository descriptions not showing?
Make sure to add descriptions to your GitHub repositories in their settings.

## 🎨 Customization Options

You can customize colors, animations, and layouts by editing:
- `src/components/Projects.js` - Main projects component
- `src/services/githubApi.js` - GitHub API integration
- `src/config/portfolio.js` - Configuration settings

---

**Tip**: Star ⭐ your own repositories and add detailed descriptions to make them stand out in your portfolio!