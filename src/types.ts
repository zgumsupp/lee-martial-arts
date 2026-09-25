export interface Capability {
  id: string;
  title: string;
  category: string;
  iconName: string;
  badge: string;
  description: string;
  metrics: string;
  tags: string[];
  accentColor?: 'cyan' | 'amber';
}

export interface JourneyMilestone {
  stage: string;
  stageBadge: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverables: string[];
  tools: string[];
}

export interface ComparisonRow {
  aspect: string;
  traditional: string;
  vibeCoding: string;
  highlight?: boolean;
}

export interface ProjectWork {
  id: string;
  title: string;
  category: 'Landing Page' | 'AI SaaS' | '3D WebGL' | 'Design System';
  tagline: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  architecture: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  impact: string;
}

export interface TimezoneNode {
  city: string;
  country: string;
  flag: string;
  timezone: string;
  utcOffset: string;
  coverage: string;
  activeNow: boolean;
}
