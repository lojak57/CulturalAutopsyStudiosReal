<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  
  let formData = {
    name: '',
    email: '',
    type: 'memory',
    message: ''
  };
  
  let submitted = false;
  
  function handleSubmit(e: Event) {
    e.preventDefault();
    // In production, this would send to your API
    submitted = true;
  }
</script>

<svelte:head>
  <title>Submit Memory | {SITE_CONFIG.name}</title>
  <meta name="description" content="Send us a memory. We'll keep the tape running." />
</svelte:head>

<section class="min-h-screen bg-tape-gray-900 text-paper-white py-20">
  <div class="max-w-4xl mx-auto px-6">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl md:text-7xl font-mono mb-4">
        <span class="text-vcr-blue-400">[</span>
        <span class="text-postit-yellow-500">SUBMIT_MEMORY</span>
        <span class="text-vcr-blue-400">]</span>
      </h1>
      <p class="text-xl font-serif italic text-tape-gray-300">
        Send us a memory. We'll keep the tape running.
      </p>
    </div>

    {#if !submitted}
      <!-- Contact Form -->
      <form on:submit={handleSubmit} class="bg-tape-gray-800 border-2 border-vcr-blue-600 p-8">
        <div class="space-y-6">
          <!-- Name -->
          <div>
            <label class="block text-vcr-blue-400 font-mono text-sm mb-2">
              YOUR_NAME:
            </label>
            <input 
              type="text"
              bind:value={formData.name}
              required
              class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-3 
                     font-mono focus:border-postit-yellow-500 focus:outline-none"
              placeholder="anonymous_is_okay"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-vcr-blue-400 font-mono text-sm mb-2">
              EMAIL_ADDRESS:
            </label>
            <input 
              type="email"
              bind:value={formData.email}
              required
              class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-3 
                     font-mono focus:border-postit-yellow-500 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>

          <!-- Type -->
          <div>
            <label class="block text-vcr-blue-400 font-mono text-sm mb-2">
              SUBMISSION_TYPE:
            </label>
            <select 
              bind:value={formData.type}
              class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-3 
                     font-mono focus:border-postit-yellow-500 focus:outline-none"
            >
              <option value="memory">Memory Submission</option>
              <option value="story">Story Idea</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="press">Press Request</option>
              <option value="other">Other Signal</option>
            </select>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-vcr-blue-400 font-mono text-sm mb-2">
              YOUR_MESSAGE:
            </label>
            <textarea 
              bind:value={formData.message}
              required
              rows="6"
              class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-3 
                     font-mono focus:border-postit-yellow-500 focus:outline-none resize-none"
              placeholder="Tell us what you remember..."
            ></textarea>
          </div>

          <!-- Submit -->
          <button 
            type="submit"
            class="w-full bg-postit-yellow-500 hover:bg-postit-yellow-400 text-tape-gray-900 
                   px-6 py-4 font-mono text-lg border-2 border-postit-yellow-600 
                   transition-all duration-200 hover:shadow-vhs"
          >
            [TRANSMIT_MEMORY]
          </button>
        </div>

        <!-- Privacy Note -->
        <p class="text-xs font-mono text-tape-gray-500 mt-6 text-center">
          // all memories are encrypted and stored in the void
        </p>
      </form>
    {:else}
      <!-- Success Message -->
      <div class="bg-tape-gray-800 border-2 border-vcr-blue-600 p-12 text-center">
        <div class="text-6xl mb-6">📼</div>
        
        <h2 class="text-2xl font-mono text-postit-yellow-500 mb-4">
          MEMORY_RECEIVED
        </h2>
        
        <p class="text-lg font-serif italic text-tape-gray-300 mb-8">
          Your signal has been recorded. <br>
          We'll keep the tape running.
        </p>
        
        <div class="font-mono text-sm text-tape-gray-500">
          <p>// transmission.status = complete</p>
          <p class="text-xs mt-2">// memory.id = {Math.random().toString(36).substr(2, 9)}</p>
        </div>
        
        <a 
          href="/"
          class="inline-block mt-8 text-vcr-blue-400 hover:text-postit-yellow-500 font-mono transition-colors"
        >
          [RETURN_TO_INDEX]
        </a>
      </div>
    {/if}

    <!-- Alternative Contact -->
    <div class="mt-16 text-center">
      <p class="font-mono text-sm text-tape-gray-400 mb-4">
        // alternative_frequencies:
      </p>
      <div class="space-y-2">
        <p class="font-mono text-xs text-tape-gray-500">
          email: {SITE_CONFIG.email}
        </p>
        <p class="font-mono text-xs text-tape-gray-500">
          signal: {SITE_CONFIG.phone}
        </p>
      </div>
    </div>
  </div>
</section>