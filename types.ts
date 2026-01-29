export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Achievement {
  id: number;
  title: string;
  event: string;
  badge: 'Winner' | 'Finalist' | 'Participant' | 'PARTICIPANT' | 'RUNNER UP';
  description: string;
  tags: string[];
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}