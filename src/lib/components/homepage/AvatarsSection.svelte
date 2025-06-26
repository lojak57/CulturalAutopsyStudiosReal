<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  
  let hoveredAvatar: string | null = null;

  function createSlug(name: string) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }
  
  // Avatar images - update these paths once you have the photos
  const avatarImages: { [key: string]: string } = {
    'Holden': '/images/avatars/holden.jpg',
    'Lilly': '/images/avatars/lilly.jpg',
    'Eva': '/images/avatars/eva.jpg',
    'Reese': '/images/avatars/reese.jpg',
    'The Archivist': '/images/avatars/archivist.jpg'
  };
</script>

<section id="avatars" class="py-20 bg-tape-gray-800 text-paper-white">
  <div class="max-w-7xl mx-auto px-6">
    
    <!-- Section header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-6xl font-mono text-vcr-blue-400 mb-4">
        [Our Avatars]
      </h2>
      <p class="text-tape-gray-300 font-serif text-lg italic">
        The voices in the void
      </p>
    </div>

    <!-- Avatars grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each SITE_CONFIG.avatars as avatar}
        <a 
          href={`/avatars/${createSlug(avatar.name)}`}
          class="relative group text-left block"
          on:mouseenter={() => hoveredAvatar = avatar.name}
          on:mouseleave={() => hoveredAvatar = null}
          aria-label={`View details for ${avatar.name}`}
        >
          <!-- Avatar card -->
          <div class="bg-tape-gray-900 border-2 border-vcr-blue-600/30 hover:border-vcr-blue-400 
                      transition-all duration-300 p-6 h-80 flex flex-col justify-between
                      hover:shadow-vhs hover:-translate-y-1 overflow-hidden">
            
            <!-- Avatar image area -->
            <div class="flex-1 flex items-center justify-center mb-6 relative">
              {#if avatarImages[avatar.name]}
                <!-- Photo placeholder - will show actual image when added -->
                <div class="w-32 h-32 relative overflow-hidden rounded-lg">
                  <img 
                    src={avatarImages[avatar.name]} 
                    alt={avatar.name}
                    class="w-full h-full object-cover filter grayscale contrast-125 
                           group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <!-- VHS scanline overlay -->
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-vcr-blue-600/10 to-transparent 
                              bg-[length:100%_3px] animate-pulse pointer-events-none"></div>
                </div>
              {:else}
                <!-- Fallback initial -->
                <div class="w-24 h-24 bg-vcr-blue-600/20 border border-vcr-blue-400 
                            flex items-center justify-center font-mono text-2xl text-vcr-blue-400">
                  {avatar.name.charAt(0)}
                </div>
              {/if}
            </div>

            <!-- Avatar info -->
            <div class="text-center space-y-3">
              <h3 class="text-xl font-mono text-postit-yellow-500">
                {avatar.name}
              </h3>
              
              <p class="text-tape-gray-400 text-sm font-serif italic">
                {avatar.role}
              </p>
              
              <!-- Quote - shows on hover -->
              <div class="min-h-[3rem] flex items-center justify-center">
                {#if hoveredAvatar === avatar.name}
                  <p class="text-trauma-red-400 text-sm font-mono transition-opacity duration-300">
                    "{avatar.quote}"
                  </p>
                {:else}
                  <p class="text-tape-gray-500 text-xs font-mono">
                    [{avatar.setting}]
                  </p>
                {/if}
              </div>
            </div>

            <!-- Glitch effect overlay -->
            {#if hoveredAvatar === avatar.name}
              <div class="absolute inset-0 bg-gradient-to-r from-trauma-red-600/10 to-vcr-blue-600/10 
                          animate-pulse pointer-events-none"></div>
            {/if}
          </div>

          <!-- Connection lines (subtle) -->
          <div class="absolute -right-4 top-1/2 w-8 h-px bg-vcr-blue-600/20 hidden lg:block 
                      group-hover:bg-vcr-blue-400/40 transition-colors duration-300"></div>
        </a>
      {/each}
    </div>

    <!-- Bottom text -->
    <div class="text-center mt-16">
      <p class="text-tape-gray-400 font-mono text-sm">
        > Each avatar carries their own frequency_
      </p>
      <p class="text-tape-gray-500 font-mono text-xs mt-2">
        mouse_hover.enabled = true
      </p>
    </div>
  </div>
</section>

<style>
  /* Add VHS-style image distortion on hover */
  :global(.group:hover img) {
    filter: grayscale(0) contrast(1.1) brightness(0.9);
    animation: vhs-distort 0.3s ease-out;
  }
  
  @keyframes vhs-distort {
    0% { transform: translateX(0); }
    20% { transform: translateX(-2px); filter: hue-rotate(90deg); }
    40% { transform: translateX(2px); filter: hue-rotate(-90deg); }
    60% { transform: translateX(-1px); }
    80% { transform: translateX(1px); }
    100% { transform: translateX(0); }
  }
</style>