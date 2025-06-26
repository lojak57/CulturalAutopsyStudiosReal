<script lang="ts">
  import { VIDEO_CONFIG, getEmbedUrl } from '$lib/config/videos.config';
  
  const embedUrl = getEmbedUrl(VIDEO_CONFIG.hero);
</script>

<div class="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono max-w-md">
  <h3 class="text-yellow-500 mb-2">Video Debug Info:</h3>
  <p>Video ID: {VIDEO_CONFIG.hero.videoId}</p>
  <p>Platform: {VIDEO_CONFIG.hero.platform}</p>
  <p class="break-all">Embed URL: {embedUrl}</p>
  <p>Direct Link: <a href="https://youtube.com/watch?v={VIDEO_CONFIG.hero.videoId}" target="_blank" class="text-blue-400 underline">View on YouTube</a></p>
</div>