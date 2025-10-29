/**
 * Project Type Definitions
 * 
 * Defines the structure for project data used in the Projects showcase section.
 */

/**
 * Project interface
 * 
 * Represents a single project with all necessary information for display.
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  
  /** Project name/title */
  name: string;
  
  /** One-sentence description of the project */
  description: string;
  
  /** Array of technology names used in the project */
  techStack: string[];
  
  /** Path to project screenshot/concept image */
  imagePath: string;
  
  /** Optional URL to live demo (if available) */
  liveUrl?: string;
  
  /** GitHub repository URL */
  githubUrl: string;
}

