/**
 * Experience Data
 * 
 * Contains work experience information for the Experience timeline section.
 * Based on Chasen Wang's resume.
 */

/**
 * Work experience entry
 */
export interface WorkExperience {
  /** Company name */
  company: string;
  /** Job title/position */
  position: string;
  /** Duration period (e.g., "Nov 2020 - Apr 2024") */
  duration: string;
  /** Work location (city) */
  location: string;
  /** Key highlights/achievements (1-2 bullet points) */
  highlights: string[];
}

/**
 * Work experiences (newest first)
 * 
 * Display order: Most recent → Oldest
 */
export const experiences: WorkExperience[] = [
  {
    company: 'Shanghai Jiufang Cloud',
    position: 'Frontend Developer',
    duration: 'Nov 2020 - Apr 2024',
    location: 'Shanghai',
    highlights: [
      'Led development of multiple web applications using React and Vue',
      'Optimized application performance resulting in 40% faster load times',
    ],
  },
  {
    company: 'Shanghai YouBiHui Training School',
    position: 'Frontend Teacher',
    duration: 'Aug 2020 - Oct 2020',
    location: 'Shanghai',
    highlights: [
      'Taught HTML, CSS, JavaScript fundamentals to 50+ students',
      'Developed curriculum focusing on practical web development skills',
    ],
  },
  {
    company: 'Huizhong Business Consulting',
    position: 'Frontend Developer',
    duration: 'May 2018 - Jun 2020',
    location: 'Shanghai',
    highlights: [
      'Built responsive websites for 10+ enterprise clients',
      'Implemented CMS solutions for content management',
    ],
  },
  {
    company: 'Qingdao Jiaoyin Information Technology',
    position: 'Web Developer',
    duration: 'Oct 2017 - Aug 2018',
    location: 'Qingdao',
    highlights: [
      'Developed company website and internal management systems',
      'Collaborated with design team on UI/UX improvements',
    ],
  },
];

