<script lang="ts">
  export let avatar: {
    name: string;
    role: string;
    quote: string;
    setting: string;
  };
  
  // Show associations - in real app, from CMS
  const showAssociations = {
    'Holden': ['The Boardroom', 'Memory Glitch Series'],
    'Lilly': ['The Boardroom', 'Breaking News: Broken Hearts'],
    'Eva': ['Quiet Corridor Conversations', 'Memory Glitch Series'],
    'Reese': ['Matrix Deep Dive', 'Rooftop Philosophy'],
    'The Archivist': ['Memory Glitch Series', 'The Archive']
  };
  
  $: avatarShows = showAssociations[avatar.name] || ['Various Productions'];
</script>

<section class="max-w-4xl mx-auto">
  <h2 class="text-3xl font-mono text-vcr-blue-400 mb-8">[CURRENT_PRODUCTIONS]</h2>
  
  <div class="grid gap-4">
    {#each avatarShows as show}
      <div class="bg-tape-gray-800 border border-vcr-blue-600/30 p-6 hover:border-vcr-blue-400 
                  transition-all duration-200 group">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-mono text-postit-yellow-500 group-hover:text-vcr-blue-400 transition-colors">
              {show}
            </h3>
            <p class="text-sm text-tape-gray-400 font-mono mt-1">
              // Regular appearances
            </p>
          </div>
          
          <a 
            href="/episodes?show={encodeURIComponent(show)}"
            class="text-vcr-blue-400 hover:text-postit-yellow-500 transition-colors font-mono text-sm"
          >
            [VIEW_EPISODES] →
          </a>
        </div>
      </div>
    {/each}
  </div>
  
  <!-- Call to action -->
  <div class="mt-8 text-center">
    <p class="text-tape-gray-400 font-mono text-sm mb-4">
      // Want to hear {avatar.name} in action?
    </p>
    <a 
      href="/episodes"
      class="inline-block px-6 py-3 bg-vcr-blue-600 hover:bg-vcr-blue-700 
             text-paper-white font-mono border-2 border-vcr-blue-400 
             transition-all duration-200 hover:shadow-vhs"
    >
      [BROWSE_ALL_EPISODES]
    </a>
  </div>
</section>