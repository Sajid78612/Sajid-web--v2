import { projects } from '../data/projects';
import { education } from '../data/education';

// Function to get all projects
export const getProjects = () => {
  return Promise.resolve([...projects]);
};

// Function to get a project by ID
export const getProjectById = (id) => {
  const project = projects.find(p => p.id === id);
  return Promise.resolve(project || null);
};

// Function to get all education data
export const getEducation = () => {
  return Promise.resolve([...education]);
};

// Format date helper
export const formatDate = (timestamp) => {
  if (!timestamp) return '';
  
  const date = new Date(timestamp);
  const now = new Date();
  const diffMinutes = Math.floor((now - date) / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return 'Just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
};