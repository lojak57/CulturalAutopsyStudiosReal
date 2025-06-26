<script lang="ts">
  export let avatar: {
    name: string;
    role: string;
    quote: string;
    setting: string;
  };
  
  // Notable quotes - in real app, from CMS
  const quotes = {
    'Holden': [
      "The most honest conversations happen when we're too tired to lie.",
      "Every question is a trap door to memory.",
      "I don't interview people. I interview the ghosts they carry."
    ],
    'Lilly': [
      "Breaking news: we never stopped breaking.",
      "The real story is always in what we're not reporting.",
      "Every headline is someone's whole world ending."
    ],
    'Eva': [
      "Silence speaks louder than screaming.",
      "The hallway knows more secrets than the therapy room.",
      "I listen to the space between heartbeats."
    ],
    'Reese': [
      "Every ending is someone else's middle.",
      "Philosophy is just overthinking with citations.",
      "The city lights spell out questions we're afraid to ask."
    ],
    'The Archivist': [
      "We remember everything so you don't have to.",
      "Every story has already been told. Every story is brand new.",
      "The archive doesn't judge. It just remembers."
    ]
  };
  
  $: avatarQuotes = quotes[avatar.name] || [avatar.quote];
</script>

<section class="max-w-4xl mx-auto">
  <h2 class="text-3xl font-mono text-vcr-blue-400 mb-8">[NOTABLE_TRANSMISSIONS]</h2>
  
  <div class="space-y-6">
    {#each avatarQuotes as quote, i}
      <blockquote class="relative group">
        <div class="bg-tape-gray-800 border-l-4 border-trauma-red-600 p-6 
                    hover:border-postit-yellow-500 transition-all duration-300">
          <p class="text-lg font-serif italic text-tape-gray-300 leading-relaxed">
            "{quote}"
          </p>
          
          <footer class="mt-4 text-sm font-mono text-tape-gray-500">
            — {avatar.name}, Episode #{Math.floor(Math.random() * 100) + 1}
          </footer>
        </div>
        
        <!-- Glitch effect on hover -->
        <div class="absolute inset-0 bg-gradient-to-r from-vcr-blue-600/5 to-trauma-red-600/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
      </blockquote>
    {/each}
  </div>
  
  <!-- Archive note -->
  <div class="mt-12 text-center p-6 border border-vcr-blue-600/20 bg-tape-gray-800/50">
    <p class="text-sm font-mono text-tape-gray-400">
      [ARCHIVE_NOTE]: This represents a fraction of recorded transmissions.
    </p>
    <p class="text-xs font-mono text-tape-gray-500 mt-2">
      Full archive access requires clearance level: IMPOSSIBLE
    </p>
  </div>
</section>