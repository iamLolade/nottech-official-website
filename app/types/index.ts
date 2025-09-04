// Common TypeScript interfaces and types

export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  socialLinks?: SocialLink[];
}

export interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}
