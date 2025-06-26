<script lang="ts">
  import ProfileHeader from './profile/ProfileHeader.svelte';
  import ProfileBio from './profile/ProfileBio.svelte';
  import ProfileShows from './profile/ProfileShows.svelte';
  import ProfileQuotes from './profile/ProfileQuotes.svelte';
  
  export let avatar: {
    name: string;
    role: string;
    quote: string;
    setting: string;
  };
</script>

<div class="min-h-screen bg-tape-gray-900 text-paper-white">
  <!-- VHS static overlay -->
  <div class="fixed inset-0 bg-gradient-to-br from-vcr-blue-950/20 to-transparent animate-vhs-flicker pointer-events-none"></div>
  
  <div class="relative z-10">
    <!-- Back navigation -->
    <div class="max-w-7xl mx-auto px-6 pt-8">
      <a 
        href="/#avatars" 
        class="inline-flex items-center text-vcr-blue-400 hover:text-postit-yellow-500 
               transition-colors font-mono text-sm group"
      >
        <span class="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
        [BACK_TO_NETWORK]
      </a>
    </div>
    
    <!-- Profile sections -->
    <div class="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <ProfileHeader {avatar} />
      <ProfileBio {avatar} />
      <ProfileShows {avatar} />
      <ProfileQuotes {avatar} />
    </div>
  </div>
</div>