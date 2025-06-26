// Video configuration for Cultural Autopsy Studios
// Update these IDs when you upload new videos to YouTube/Vimeo

export const VIDEO_CONFIG = {
  // Hero section video
  hero: {
    platform: 'youtube', // 'youtube' or 'vimeo'
    videoId: 'VIDEO_ID', // Replace with your YouTube video ID
    title: 'Cultural Autopsy Studios - We kept the tape running',
    autoplay: true,
    muted: true,
    loop: true
  },
  
  // 21 minute feature
  feature: {
    platform: 'youtube',
    videoId: 'FEATURE_VIDEO_ID', // Your 21-minute video
    title: 'Cultural Autopsy - The Full Experience',
    autoplay: false,
    muted: false,
    loop: false
  },
  
  // Additional video buckets for easy swapping
  buckets: {
    'manifesto-bg': {
      platform: 'youtube',
      videoId: 'MANIFESTO_VIDEO_ID',
      title: 'Manifesto Background'
    },
    'episode-trailer': {
      platform: 'youtube', 
      videoId: 'EPISODE_TRAILER_ID',
      title: 'Episode Highlights'
    }
  }
};

// Helper function to get embed URL
export function getEmbedUrl(config: typeof VIDEO_CONFIG.hero): string {
  const params = new URLSearchParams({
    modestbranding: '1',
    rel: '0',
    autoplay: config.autoplay ? '1' : '0',
    mute: config.muted ? '1' : '0',
    loop: config.loop ? '1' : '0',
    ...(config.loop && { playlist: config.videoId })
  });
  
  if (config.platform === 'youtube') {
    return `https://www.youtube.com/embed/${config.videoId}?${params}`;
  } else if (config.platform === 'vimeo') {
    return `https://player.vimeo.com/video/${config.videoId}?autoplay=${config.autoplay ? 1 : 0}&loop=${config.loop ? 1 : 0}&muted=${config.muted ? 1 : 0}`;
  }
  
  return '';
}