// Types for Strapi CMS integration

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  type: string;
  videoUrl?: string;
  task: string;
  solution: string;
  result: string;
  image?: {
    url: string;
    alt: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  projects?: Project[];
  createdAt: string;
  updatedAt: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  content: string;
  image?: {
    url: string;
    alt: string;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactForm {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  telegram?: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  socialMedia: {
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    telegram?: string;
  };
}
