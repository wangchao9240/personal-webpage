/**
 * Skills Data
 * 
 * Contains the technical skills displayed in both the Hero section terminal
 * and the Skills section with icons.
 * Based on Chasen Wang's resume.
 */

import { IconType } from 'react-icons';
import { 
  FaReact, 
  FaVuejs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiExpress,
  SiFastapi,
  SiOpenstreetmap,
} from 'react-icons/si';
import { TbServerCog, TbWorldWww } from 'react-icons/tb';

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
 * Skill item with icon for the Skills section
 */
export interface SkillWithIcon {
  name: string;
  icon: IconType;
}

/**
 * Categorized skills with icons for the Skills section display
 */
export interface CategorizedSkills {
  frontend: SkillWithIcon[];
  backend: SkillWithIcon[];
  tools: SkillWithIcon[];
}

/**
 * Skills with icons mapped for the Skills section
 */
export const skillsWithIcons: CategorizedSkills = {
  frontend: [
    { name: 'React', icon: FaReact },
    { name: 'React Native', icon: FaReact },
    { name: 'Vue', icon: FaVuejs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: SiJavascript },
  ],
  backend: [
    { name: 'Node.js', icon: FaNode },
    { name: 'Express', icon: SiExpress },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Python', icon: FaPython },
  ],
  tools: [
    { name: 'Git', icon: FaGitAlt },
    { name: 'CMS management', icon: TbServerCog },
    { name: 'SSR', icon: TbWorldWww },
    { name: 'OpenStreetMap', icon: SiOpenstreetmap },
  ],
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

