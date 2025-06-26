<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  import { VIDEO_CONFIG, getEmbedUrl } from '$lib/config/videos.config';
  import { onMount } from 'svelte';
  
  let videoExpanded = false;
  const videoConfig = VIDEO_CONFIG.hero;
  
  function toggleVideo() {
    videoExpanded = !videoExpanded;
  }
</script>

<section class="relative min-h-screen bg-tape-gray-900 text-paper-white overflow-hidden">
  <!-- VHS static overlay -->
  <div class="absolute inset-0 bg-gradient-to-br from-vcr-blue-950/20 to-transparent animate-vhs-flicker pointer-events-none"></div>
  
  <!-- Main content -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
    
    <!-- CRT TV Frame with embedded trailer -->
    <div class="w-full max-w-5xl mb-8">
      <div class="crt-tv-container {videoExpanded ? 'fixed inset-4 md:inset-8 z-50 max-w-none' : ''} transition-all duration-500">
        <!-- CRT TV Frame -->
        <div class="crt-frame">
          <!-- TV Screen -->
          <div class="crt-screen">
            <!-- Video element -->
            <!-- Video embed -->
            <div class="w-full h-full relative bg-black">
              <iframe 
                src={getEmbedUrl(videoConfig)}
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title={videoConfig.title}
              ></iframe>
            </div>
            
            <!-- CRT scan lines effect -->
            <div class="crt-scanlines"></div>
            
            <!-- CRT curve effect overlay -->
            <div class="crt-curve"></div>
            
            <!-- Simple overlay with channel info and expand button -->
            <div class="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
              <!-- Top controls -->
              <div class="flex justify-between items-start pointer-events-auto">
                <div class="bg-black/60 px-3 py-1 rounded font-mono text-xs text-postit-yellow-500">
                  CHANNEL 3
                </div>
                <button 
                  on:click={toggleVideo}
                  class="bg-black/60 hover:bg-black/80 px-3 py-1 rounded font-mono text-xs transition-colors"
                >
                  {videoExpanded ? '[MINIMIZE]' : '[EXPAND]'}
                </button>
              </div>
            </div>
          </div>
          
          <!-- TV Bezel with retro details -->
          <div class="crt-bezel">
            <!-- Brand label -->
            <div class="absolute top-4 left-6 font-mono text-xs text-tape-gray-500">
              PANASONIC
            </div>
            
            <!-- Power LED -->
            <div class="absolute top-4 right-6 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            
            <!-- Bottom speaker grille -->
            <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-2">
              <div class="flex justify-between h-full">
                <div class="w-1 h-full bg-tape-gray-700"></div>
                <div class="w-1 h-full bg-tape-gray-700"></div>
                <div class="w-1 h-full bg-tape-gray-700"></div>
                <div class="w-1 h-full bg-tape-gray-700"></div>
                <div class="w-1 h-full bg-tape-gray-700"></div>
                <div class="w-1 h-full bg-tape-gray-700"></div>
                <div class="w-1 h-full bg-tape-gray-700"></div>
                <div class="w-1 h-full bg-tape-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Title and tagline -->
    <div class="text-center space-y-6">
      <h1 class="text-6xl md:text-8xl font-mono font-bold tracking-tight animate-glitch">
        <span class="text-vcr-blue-400">Cultural</span>
        <br>
        <span class="text-postit-yellow-500">Autopsy</span>
        <br>
        <span class="text-trauma-red-500">Studios</span>
      </h1>
      
      <p class="text-2xl md:text-3xl font-serif italic text-tape-gray-300 animate-typewriter overflow-hidden whitespace-nowrap mx-auto">
        {SITE_CONFIG.tagline}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <a 
          href="#avatars" 
          class="px-8 py-4 bg-vcr-blue-600 hover:bg-vcr-blue-700 text-paper-white 
                 font-mono text-lg border-2 border-vcr-blue-400 shadow-glitch
                 transition-all duration-200 hover:animate-glitch inline-block text-center">
          [Explore the Network]
        </a>
        
        <button 
          on:click={toggleVideo}
          class="px-8 py-4 bg-transparent hover:bg-trauma-red-600/20 text-trauma-red-400 
                 font-mono text-lg border-2 border-trauma-red-600 
                 transition-all duration-200 hover:shadow-vhs">
          [Watch The Proof]
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="animate-bounce text-tape-gray-400">
        <p class="font-mono text-sm mb-2">scroll_down.exe</p>
        <div class="w-px h-12 bg-vcr-blue-600 mx-auto"></div>
      </div>
    </div>
  </div>

  <!-- Background pattern -->
  <div class="absolute inset-0 opacity-10 pointer-events-none">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.vcr-blue.600)_1px,transparent_1px)] 
                bg-[length:20px_20px]"></div>
  </div>
  
  <!-- Backdrop for expanded video -->
  {#if videoExpanded}
    <div 
      class="fixed inset-0 bg-black/80 z-40"
      on:click={toggleVideo}
      on:keydown={(e) => e.key === 'Escape' && toggleVideo()}
    ></div>
  {/if}
</section>

<style>
  /* CRT TV Styling */
  .crt-tv-container {
    perspective: 1000px;
  }
  
  .crt-frame {
    position: relative;
    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
    border-radius: 20px;
    padding: 30px 40px;
    box-shadow: 
      inset 0 0 20px rgba(0,0,0,0.8),
      0 0 50px rgba(0,0,0,0.5),
      0 10px 30px rgba(0,0,0,0.7);
  }
  
  .crt-screen {
    position: relative;
    aspect-ratio: 16/9;
    background: #000;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 
      inset 0 0 40px rgba(0,0,0,0.9),
      inset 0 0 80px rgba(81, 69, 235, 0.2);
  }
  
  /* CRT curve effect */
  .crt-curve {
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);
    pointer-events: none;
  }
  
  /* CRT scanlines */
  .crt-scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.03) 2px,
      rgba(255,255,255,0.03) 4px
    );
    pointer-events: none;
    animation: scanlines 8s linear infinite;
  }
  
  @keyframes scanlines {
    0% { transform: translateY(0); }
    100% { transform: translateY(10px); }
  }
  
  .crt-bezel {
    position: absolute;
    inset: 0;
    border-radius: 20px;
    pointer-events: none;
  }
  
  /* Glitch and other animations */
  @keyframes glitch-text {
    0%, 100% { 
      text-shadow: 0 0 5px theme(colors.vcr-blue.400);
    }
    25% { 
      text-shadow: -2px 0 5px theme(colors.trauma-red.500), 2px 2px 5px theme(colors.vcr-blue.400);
    }
    50% { 
      text-shadow: 2px -2px 5px theme(colors.postit-yellow.500), -2px 0 5px theme(colors.trauma-red.500);
    }
    75% { 
      text-shadow: 0 2px 5px theme(colors.vcr-blue.400), -2px -2px 5px theme(colors.postit-yellow.500);
    }
  }
  
  .animate-glitch {
    animation: glitch-text 3s ease-in-out infinite;
  }
  
  .animate-typewriter {
    width: fit-content;
    border-right: 3px solid theme(colors.tape-gray.300);
    animation: 
      typewriter 2s steps(25) 1s normal both,
      blink-cursor 900ms steps(25) infinite;
  }
  
  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes blink-cursor {
    0%, 50% { border-color: theme(colors.tape-gray.300); }
    51%, 100% { border-color: transparent; }
  }
</style>