<script lang="ts">
  import { page } from '$app/stores';
  import { SITE_CONFIG } from '$lib/config/site.config';
  import AvatarProfile from '$lib/components/avatars/AvatarProfile.svelte';
  
  $: slug = $page.params.slug;
  $: avatar = SITE_CONFIG.avatars.find(a => 
    a.name.toLowerCase().replace(/\s+/g, '-') === slug
  );
</script>

{#if avatar}
  <AvatarProfile {avatar} />
{:else}
  <div class="min-h-screen bg-tape-gray-900 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-mono text-trauma-red-500 mb-4">[404_AVATAR_NOT_FOUND]</h1>
      <a href="/#avatars" class="text-vcr-blue-400 hover:text-postit-yellow-500 transition-colors">
        → Return to Network
      </a>
    </div>
  </div>
{/if}