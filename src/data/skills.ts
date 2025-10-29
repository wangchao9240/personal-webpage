/**
 * Skills Data
 * 
 * Contains the technical skills displayed in the Hero section terminal.
 * Based on Chasen Wang's resume.
 */

export interface SkillsData {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export const skills: SkillsData = {
  frontend: ['React', 'Vue', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express'],
  tools: ['Git', 'CMS management', 'SSR'],
};

/**
 * Generates the code string for the terminal typewriter effect
 */
export function generateSkillsCodeString(): string {
  return `const skills = {
  frontend: ['React', 'Vue', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express'],
  tools: ['Git', 'CMS management', 'SSR']
}`;
}

