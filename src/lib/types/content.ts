// Content types for Cultural Autopsy Studios admin system

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  content: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  status: 'draft' | 'published';
  slug: string;
}

export interface Episode {
  id: string;
  showId: string;
  showName: string;
  title: string;
  description: string;
  releaseDate: string;
  emotion: string;
  duration?: string;
  videoUrl?: string;
  audioUrl?: string;
  transcript?: string;
  status: 'draft' | 'published';
}

export interface Show {
  id: string;
  title: string;
  description: string;
  emoji: string;
  vibe: string;
  episodeCount: number;
  latestEpisode?: string;
}

export interface Avatar {
  id: string;
  name: string;
  role: string;
  quote: string;
  setting: string;
  imageUrl?: string;
  bio?: string;
}

export interface VideoBucket {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
  isActive: boolean;
  location: 'hero' | 'about' | 'manifesto' | 'custom';
}

export interface Manifesto {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
  version: number;
}

export interface SiteContent {
  blogs: BlogPost[];
  episodes: Episode[];
  shows: Show[];
  avatars: Avatar[];
  videos: VideoBucket[];
  manifesto: Manifesto;
}

// Admin user type
export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  lastLogin?: string;
}