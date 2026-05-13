export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  industry: string;
  title: string;
  painPoints: string[];
  solution: string;
  benefits: string[];
  icon: string;
}

export interface Case {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  description: string;
  results: {
    metric: string;
    value: string;
  }[];
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}
