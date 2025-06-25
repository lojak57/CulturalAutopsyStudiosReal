// Content service for TrueForm CRM integration
import type { BlogPost, Episode, Show, Avatar, VideoBucket, Manifesto } from '$lib/types/content';

const API_URL = import.meta.env.VITE_TRUEFORM_API_URL;
const API_KEY = import.meta.env.VITE_TRUEFORM_API_KEY;

class ContentService {
  private headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'X-White-Label': 'cultural-autopsy-studios'
  };

  // Blog posts
  async getBlogPosts(): Promise<BlogPost[]> {
    const response = await fetch(`${API_URL}/content/blogs`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error('Failed to fetch blog posts');
    return response.json();
  }

  async createBlogPost(post: Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt'>): Promise<BlogPost> {
    const response = await fetch(`${API_URL}/content/blogs`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(post)
    });
    if (!response.ok) throw new Error('Failed to create blog post');
    return response.json();
  }

  async updateBlogPost(id: string, post: Partial<BlogPost>): Promise<BlogPost> {
    const response = await fetch(`${API_URL}/content/blogs/${id}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(post)
    });
    if (!response.ok) throw new Error('Failed to update blog post');
    return response.json();
  }

  // Episodes
  async getEpisodes(): Promise<Episode[]> {
    const response = await fetch(`${API_URL}/content/episodes`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error('Failed to fetch episodes');
    return response.json();
  }

  async createEpisode(episode: Omit<Episode, 'id'>): Promise<Episode> {
    const response = await fetch(`${API_URL}/content/episodes`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(episode)
    });
    if (!response.ok) throw new Error('Failed to create episode');
    return response.json();
  }

  // Videos
  async getVideoBuckets(): Promise<VideoBucket[]> {
    const response = await fetch(`${API_URL}/content/videos`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error('Failed to fetch videos');
    return response.json();
  }

  async updateVideoBucket(id: string, video: Partial<VideoBucket>): Promise<VideoBucket> {
    const response = await fetch(`${API_URL}/content/videos/${id}`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(video)
    });
    if (!response.ok) throw new Error('Failed to update video');
    return response.json();
  }

  // Manifesto
  async getManifesto(): Promise<Manifesto> {
    const response = await fetch(`${API_URL}/content/manifesto`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error('Failed to fetch manifesto');
    return response.json();
  }

  async updateManifesto(content: string): Promise<Manifesto> {
    const response = await fetch(`${API_URL}/content/manifesto`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ content })
    });
    if (!response.ok) throw new Error('Failed to update manifesto');
    return response.json();
  }

  // Mock data for development
  async initializeMockData(): Promise<void> {
    // This will be called once to seed the TrueForm CRM with initial data
    const mockData = {
      shows: [
        {
          id: 'boardroom',
          title: 'The Boardroom',
          description: 'Corporate trauma as performance art',
          emoji: '💼',
          vibe: 'corporate-horror'
        },
        {
          id: 'matrix',
          title: 'Matrix Deep Dive',
          description: 'Red pills and blue screens',
          emoji: '💊',
          vibe: 'tech-philosophy'
        }
      ],
      videos: [
        {
          id: 'hero-main',
          name: 'Main Hero Video',
          location: 'hero',
          videoUrl: '/videos/cas-trailer.mp4',
          isActive: true
        }
      ]
    };

    // Initialize data in TrueForm
    await fetch(`${API_URL}/content/initialize`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(mockData)
    });
  }
}

export const contentService = new ContentService();