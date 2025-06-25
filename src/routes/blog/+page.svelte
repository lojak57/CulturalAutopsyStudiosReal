<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  
  // Mock blog data
  const posts = [
    {
      id: 1,
      title: "Why Your Childhood Best Friend's AIM Screen Name Still Makes You Cry",
      author: "Eva",
      date: "2024-01-20",
      excerpt: "An investigation into digital archaeology and the screenshots we wish we'd taken.",
      readTime: "7 min",
      tags: ["nostalgia", "digital grief", "aim"]
    },
    {
      id: 2,
      title: "The Corporate Emails That Read Like Suicide Notes",
      author: "Lilly",
      date: "2024-01-18",
      excerpt: "A close reading of the passive-aggressive poetry hidden in your company's all-hands meetings.",
      readTime: "5 min",
      tags: ["corporate", "trauma", "poetry"]
    },
    {
      id: 3,
      title: "Millennial Pink Was a Cry for Help",
      author: "Reese",
      date: "2024-01-15",
      excerpt: "How an entire generation painted their depression the color of Pepto-Bismol.",
      readTime: "9 min",
      tags: ["culture", "aesthetics", "therapy"]
    }
  ];
</script>

<svelte:head>
  <title>Tape | {SITE_CONFIG.name}</title>
  <meta name="description" content="Essays that feel like therapy sessions you didn't sign up for." />
</svelte:head>

<section class="min-h-screen bg-tape-gray-900 text-paper-white py-12">
  <div class="max-w-4xl mx-auto px-6">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl md:text-7xl font-mono mb-4">
        <span class="text-trauma-red-500">[</span>
        <span class="text-postit-yellow-500">TAPE</span>
        <span class="text-trauma-red-500">]</span>
      </h1>
      <p class="text-xl font-serif italic text-tape-gray-300">
        Free therapy disguised as essays
      </p>
    </div>

    <!-- Substack CTA -->
    <div class="bg-vcr-blue-600/20 border-2 border-vcr-blue-400 p-6 mb-12 text-center">
      <p class="font-mono text-vcr-blue-400 mb-4">
        // WANT_THE_FULL_TAPES?
      </p>
      <p class="text-lg font-serif italic text-tape-gray-300 mb-6">
        Subscribe for deep dives, bonus content, and memories we couldn't broadcast.
      </p>
      <a 
        href={SITE_CONFIG.social.substack}
        class="inline-block bg-postit-yellow-500 text-tape-gray-900 px-8 py-3 font-mono 
               hover:bg-postit-yellow-400 transition-colors border-2 border-postit-yellow-600"
      >
        [JOIN_SUBSTACK]
      </a>
    </div>

    <!-- Blog Posts -->
    <div class="space-y-12">
      {#each posts as post}
        <article class="group cursor-pointer">
          <div class="border-l-4 border-vcr-blue-600 pl-6 hover:border-postit-yellow-500 transition-colors">
            <!-- Post Header -->
            <div class="mb-4">
              <h2 class="text-2xl font-display text-postit-yellow-500 mb-2 group-hover:animate-pulse">
                {post.title}
              </h2>
              
              <div class="flex items-center gap-4 text-sm font-mono text-tape-gray-400">
                <span class="text-vcr-blue-400">by_{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <!-- Excerpt -->
            <p class="text-lg font-serif italic text-tape-gray-300 mb-4">
              {post.excerpt}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              {#each post.tags as tag}
                <span class="text-xs font-mono text-trauma-red-400 border border-trauma-red-600 px-2 py-1">
                  #{tag}
                </span>
              {/each}
            </div>

            <!-- Read More -->
            <div class="mt-4">
              <button class="font-mono text-vcr-blue-400 hover:text-postit-yellow-500 transition-colors">
                [READ_MORE] →
              </button>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <!-- Archive Link -->
    <div class="text-center mt-16 pt-8 border-t border-vcr-blue-600/30">
      <p class="font-mono text-tape-gray-400 mb-4">
        // Looking for something specific?
      </p>
      <a href="/blog/archive" class="font-mono text-vcr-blue-400 hover:text-postit-yellow-500 transition-colors">
        [BROWSE_FULL_ARCHIVE]
      </a>
    </div>

    <!-- Easter Egg -->
    <div class="mt-20 text-center">
      <p class="font-mono text-xs text-tape-gray-600 opacity-20 hover:opacity-100 transition-opacity">
        // sometimes the real content was the trauma we processed along the way
      </p>
    </div>
  </div>
</section>