/**
 * Projects Data
 * 
 * Contains information for all projects displayed in the Projects showcase section.
 * 
 * **IMPORTANT:** Update the following before deployment:
 * 1. Replace placeholder image paths with actual project screenshots
 * 2. Update liveUrl with actual live demo URLs
 * 3. Update githubUrl with actual GitHub repository URLs
 * 4. Ensure descriptions are accurate and concise (one sentence)
 */

import { Project } from '@/types/project';

/**
 * Projects array (newest first)
 * 
 * Display order: Most recent → Oldest
 */
export const projects: Project[] = [
  {
    id: 'chatgpt-timeline',
    name: 'ChatGPT Timeline Navigator',
    description: 'Browser extension for navigating ChatGPT conversation history with timeline visualization',
    techStack: ['React', 'TypeScript', 'Chrome Extension API'],
    imagePath: '/images/projects/chatgpt-timeline.png',
    // Note: No liveUrl - browser extension (GitHub only)
    githubUrl: 'https://github.com/wangchao9240/ChatGPT-Timeline-Navigator',
  },
  {
    id: 'collaboration-platform',
    name: 'Real-time Collaboration Platform',
    description: 'Web application featuring real-time whiteboard and document collaboration',
    techStack: ['Next.js', 'WebSocket', 'Canvas API', 'TypeScript'],
    imagePath: '/images/projects/collaboration-platform.png',
    liveUrl: 'https://real-time-collaboration-eta.vercel.app/',
    githubUrl: 'https://github.com/wangchao9240/real-time-collaboration',
  },
  {
    id: 'meme-alchemist',
    name: 'MEME Alchemist',
    description: 'AI-powered meme generator combining trending memes with factual information',
    techStack: ['React', 'Node.js', 'OpenAI API', 'Image Processing'],
    imagePath: '/images/projects/meme-alchemist.png',
    liveUrl: 'https://meme-alchemist-web.pages.dev/',
    githubUrl: 'https://github.com/wangchao9240/meme-alchemist',
  },
];

