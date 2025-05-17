// src/utils/dataUtils.js

// Import static data
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';
import { comments } from '../data/comments';

// Function to get all projects
export const getProjects = () => {
  return Promise.resolve([...projects]);
};

// Function to get a project by ID
export const getProjectById = (id) => {
  const project = projects.find(p => p.id === id);
  return Promise.resolve(project || null);
};

// Function to get all certificates
export const getCertificates = () => {
  return Promise.resolve([...certificates]);
};

// Function to get all comments
export const getComments = () => {
  return Promise.resolve([...comments]);
};

// Mock function for adding a comment (will only update in-memory)
export const addComment = (newComment) => {
  const comment = {
    id: `comment-${Date.now()}`,
    ...newComment,
    createdAt: new Date()
  };
  
  // In a real app with Firebase, this would save to the database
  // Here we're just returning the comment for the UI to update itself
  return Promise.resolve(comment);
};

// Format date helper for comments
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