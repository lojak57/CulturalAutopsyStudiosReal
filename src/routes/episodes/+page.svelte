<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  
  let selectedShow = 'all';
  let selectedEmotion = 'all';
  
  // Mock episode data - in production this would come from an API
  const episodes = [
    {
      id: 1,
      title: "The Weight of Empty Inboxes",
      show: "Cultural Autopsy: The Mainline Feed",
      narrator: "Holden",
      emotion: "nostalgia",
      duration: "47:32",
      date: "2024-01-15",
      description: "An exploration of how we mourn digital ghosts.",
      playerEmbed: "spotify:episode:fake123"
    },
    {
      id: 2,
      title: "Corporate Trauma Response Unit",
      show: "The Boardroom",
      narrator: "Lilly",
      emotion: "rage",
      duration: "38:21",
      date: "2024-01-08",
      description: "When your company's values statement reads like a suicide note.",
      playerEmbed: "spotify:episode:fake456"
    },
    {
      id: 3,
      title: "Glitch in the Memory Bank",
      show: "Memory Glitch Series",
      narrator: "The Archivist",
      emotion: "confusion",
      duration: "52:14",
      date: "2024-01-01",
      description: "What happens when nostalgia.exe stops responding?",
      playerEmbed: "spotify:episode:fake789"
    },
    {
      id: 4,
      title: "Red Pill, Blue Screen",
      show: "Matrix Deep Dive",
      narrator: "Reese",
      emotion: "awakening",
      duration: "63:45",
      date: "2023-12-25",
      description: "The Matrix was a documentary about working from home.",
      playerEmbed: "spotify:episode:fake012"
    }
  ];
  
  $: filteredEpisodes = episodes.filter(ep => {
    const showMatch = selectedShow === 'all' || ep.show === selectedShow;
    const emotionMatch = selectedEmotion === 'all' || ep.emotion === selectedEmotion;
    return showMatch && emotionMatch;
  });
  
  const emotions = ['all', 'nostalgia', 'rage', 'confusion', 'awakening', 'grief', 'hope'];
</script>

<svelte:head>
  <title>Episode Archive | {SITE_CONFIG.name}</title>
  <meta name="description" content="Every tape we've kept running. Searchable, filterable, unforgettable." />
</svelte:head>

<section class="min-h-screen bg-tape-gray-900 text-paper-white py-12">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-5xl md:text-7xl font-mono mb-4">
        <span class="text-vcr-blue-400">[</span>
        <span class="text-postit-yellow-500">ARCHIVE</span>
        <span class="text-vcr-blue-400">]</span>
      </h1>
      <p class="text-xl font-serif italic text-tape-gray-300">
        Every tape we've kept running
      </p>
    </div>

    <!-- Filters -->
    <div class="bg-tape-gray-800 border-2 border-vcr-blue-600 p-6 mb-8">
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Show Filter -->
        <div>
          <label class="block text-vcr-blue-400 font-mono text-sm mb-2">
            FILTER_BY_SHOW:
          </label>
          <select 
            bind:value={selectedShow}
            class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-2 
                   font-mono focus:border-postit-yellow-500 focus:outline-none"
          >
            <option value="all">ALL_SHOWS</option>
            {#each SITE_CONFIG.shows as show}
              <option value={show}>{show}</option>
            {/each}
          </select>
        </div>

        <!-- Emotion Filter -->
        <div>
          <label class="block text-vcr-blue-400 font-mono text-sm mb-2">
            FILTER_BY_EMOTION:
          </label>
          <select 
            bind:value={selectedEmotion}
            class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-2 
                   font-mono focus:border-postit-yellow-500 focus:outline-none"
          >
            {#each emotions as emotion}
              <option value={emotion}>{emotion.toUpperCase()}</option>
            {/each}
          </select>
        </div>

        <!-- Search (placeholder) -->
        <div>
          <label class="block text-vcr-blue-400 font-mono text-sm mb-2">
            SEARCH_MEMORY:
          </label>
          <input 
            type="text"
            placeholder="keyword.search..."
            class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-2 
                   font-mono placeholder-tape-gray-500 focus:border-postit-yellow-500 focus:outline-none"
          />
        </div>
      </div>
    </div>

    <!-- Episode Grid -->
    <div class="grid gap-6">
      {#each filteredEpisodes as episode}
        <article class="bg-tape-gray-800 border-2 border-vcr-blue-600/50 hover:border-vcr-blue-400 
                       transition-all duration-300 p-6 group">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <!-- Episode Info -->
            <div class="flex-1">
              <div class="flex items-start gap-4 mb-3">
                <div class="w-16 h-16 bg-vcr-blue-600/20 border border-vcr-blue-400 
                           flex items-center justify-center font-mono text-vcr-blue-400 shrink-0">
                  {episode.narrator.charAt(0)}
                </div>
                
                <div class="flex-1">
                  <h2 class="text-xl font-display text-postit-yellow-500 mb-1 group-hover:animate-pulse">
                    {episode.title}
                  </h2>
                  
                  <div class="flex flex-wrap gap-4 text-sm font-mono text-tape-gray-400">
                    <span class="text-vcr-blue-400">{episode.show}</span>
                    <span>•</span>
                    <span>{episode.narrator}</span>
                    <span>•</span>
                    <span class="text-trauma-red-400">[{episode.emotion}]</span>
                    <span>•</span>
                    <span>{episode.duration}</span>
                  </div>
                </div>
              </div>
              
              <p class="text-tape-gray-300 font-serif italic ml-20">
                {episode.description}
              </p>
            </div>

            <!-- Play Button -->
            <div class="flex items-center gap-4">
              <span class="text-xs font-mono text-tape-gray-500">
                {episode.date}
              </span>
              
              <button class="bg-vcr-blue-600 hover:bg-vcr-blue-700 text-paper-white px-6 py-3 
                           font-mono border-2 border-vcr-blue-400 transition-all duration-200
                           hover:shadow-vhs hover:-translate-y-0.5">
                [PLAY]
              </button>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <!-- Load More -->
    <div class="text-center mt-12">
      <button class="text-vcr-blue-400 font-mono hover:text-postit-yellow-500 transition-colors">
        [LOAD_MORE_MEMORIES]
      </button>
    </div>

    <!-- Status -->
    <div class="text-center mt-16 text-tape-gray-500 font-mono text-sm">
      <p>// showing {filteredEpisodes.length} of ∞ episodes</p>
      <p class="text-xs mt-2">// memory_status: streaming</p>
    </div>
  </div>
</section>