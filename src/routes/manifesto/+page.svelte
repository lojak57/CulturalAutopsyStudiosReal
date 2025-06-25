<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site.config';
  
  let glitchActive = false;
  
  function activateGlitch() {
    glitchActive = true;
    setTimeout(() => {
      glitchActive = false;
    }, 2000);
  }
</script>

<svelte:head>
  <title>Manifesto | {SITE_CONFIG.name}</title>
  <meta name="description" content="We kept the tape running. A manifesto for the emotionally fluent weirdos who paid too much attention." />
</svelte:head>

<section class="min-h-screen bg-tape-gray-900 text-paper-white py-20 relative overflow-hidden">
  <!-- Background glitch effect -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,theme(colors.vcr-blue.600/10)_2px,theme(colors.vcr-blue.600/10)_4px)]"></div>
  </div>
  
  <div class="relative z-10 max-w-4xl mx-auto px-6">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-6xl md:text-8xl font-mono mb-8 {glitchActive ? 'animate-glitch' : ''}">
        <span class="text-vcr-blue-400">📼</span>
      </h1>
      
      <h2 class="text-4xl md:text-6xl font-display text-postit-yellow-500 mb-4">
        The Cultural Autopsy Manifesto
      </h2>
      
      <p class="text-2xl font-serif italic text-trauma-red-400">
        "We kept the tape running."
      </p>
    </div>

    <!-- Main content -->
    <div class="prose prose-invert prose-lg max-w-none space-y-8">
      <!-- Opening -->
      <div class="border-l-4 border-vcr-blue-600 pl-6 space-y-4">
        <p class="text-xl font-serif leading-relaxed text-tape-gray-200">
          We were the kids who watched everything.
        </p>
        
        <p class="text-lg font-serif text-tape-gray-300">
          Not because we wanted to, but because we couldn't help it.<br>
          We caught the silence in our parents' voice when they said "I'm fine."<br>
          We noticed when teachers cried alone in their cars.<br>
          We remembered what people wore on the worst day of their lives.
        </p>
        
        <p class="text-xl font-serif italic text-postit-yellow-400">
          We were the soft ones. The watchers.<br>
          The tape recorders.<br>
          The emotionally fluent weirdos who paid too much attention.
        </p>
        
        <p class="text-2xl font-mono text-trauma-red-400 mt-6">
          And guess what?
        </p>
        
        <p class="text-2xl font-display text-vcr-blue-400">
          We never stopped watching.
        </p>
      </div>

      <!-- What This Is -->
      <div class="bg-tape-gray-800 border-2 border-postit-yellow-500 p-8 my-12 relative group"
           on:click={activateGlitch}
           on:keypress={activateGlitch}
           role="button"
           tabindex="0">
        <p class="text-xl font-serif text-postit-yellow-300 mb-4">
          This isn't a media company.<br>
          This is a memory project disguised as one.
        </p>
        
        <p class="text-lg font-serif italic text-tape-gray-300">
          This is what happens when someone builds a production studio out of grief, childhood survival instincts, 
          and a deeply unhealthy familiarity with memes, podcasts, and VHS trauma formatting.
        </p>
        
        <p class="text-lg font-serif text-tape-gray-200 mt-4">
          This is a studio built by people who don't believe in pretending to be okay anymore—<br>
          but will absolutely use satire, filters, and an AI-generated avatar to make that breakdown look stylish.
        </p>
      </div>

      <!-- Our Mission -->
      <div class="space-y-6">
        <p class="text-xl font-display text-vcr-blue-400">
          We're not here to go viral.<br>
          We're here to document what it feels like to still care.<br>
          In a world that rewards pretending not to.
        </p>
        
        <p class="text-2xl font-mono text-trauma-red-400 text-center my-8">
          Because we're done pretending.
        </p>
        
        <div class="font-mono text-tape-gray-300 space-y-2">
          <p>We don't do content.</p>
          <p>We do cultural memory.</p>
          <p>Emotional receipts.</p>
          <p>Narrative necropsies.</p>
          <p>Dissecting the moment, the trend, the joke, the heartbreak—frame by frame.</p>
        </div>
      </div>

      <!-- The Method -->
      <div class="border-t-2 border-b-2 border-vcr-blue-600 py-8 my-12">
        <p class="text-lg font-serif text-tape-gray-200">
          And yeah, maybe we'll meme it.<br>
          Maybe we'll podcast it.<br>
          Maybe we'll run it through 11 Labs and put it in the mouth of a fake blonde woman named Lilly 
          who looks like she works at VICE in a parallel timeline.
        </p>
        
        <p class="text-xl font-serif italic text-postit-yellow-400 mt-6 text-center">
          But it's always the same core truth:
        </p>
        
        <p class="text-xl font-display text-vcr-blue-400 mt-4 text-center">
          We're building the thing we needed, back when we were trying to survive without words for any of it.
        </p>
      </div>

      <!-- Our Shows -->
      <div class="bg-tape-gray-800/50 p-6 rounded border border-trauma-red-600/30">
        <p class="font-mono text-trauma-red-400 mb-4">// OUR_TRUTH.txt</p>
        
        <p class="text-lg font-serif text-tape-gray-200">
          Our shows are confessionals.<br>
          Our ads are therapy.<br>
          Our characters are not metaphors—they're symptoms.
        </p>
        
        <div class="mt-6 space-y-2 font-mono text-sm text-tape-gray-300">
          <p><span class="text-vcr-blue-400">Reese</span> is rage.</p>
          <p><span class="text-vcr-blue-400">Eva</span> is what's left of empathy.</p>
          <p><span class="text-vcr-blue-400">Julian</span> is ego with a Canva subscription.</p>
          <p><span class="text-vcr-blue-400">Mitchie</span> is the kid we locked in the attic and still hope forgives us.</p>
          <p><span class="text-vcr-blue-400">The Archivist</span> remembers everything we try to forget.</p>
          <p>And <span class="text-vcr-blue-400">Knox</span> is… well, Knox is horny. But also kind of right?</p>
        </div>
      </div>

      <!-- What We Want -->
      <div class="space-y-6 my-12">
        <h3 class="text-2xl font-mono text-postit-yellow-500">What do we want?</h3>
        
        <p class="text-lg font-serif text-tape-gray-200">
          Not followers. Not VC money.<br>
          Just attention.<br>
          The kind we were starved of—but now know how to give.
        </p>
        
        <div class="border-l-4 border-trauma-red-600 pl-6 space-y-3">
          <p class="font-serif text-tape-gray-300">We are not influencers.</p>
          <p class="font-serif text-tape-gray-300">We are not media bros.</p>
          <p class="font-serif italic text-postit-yellow-400">
            We're emotional archaeologists with Adobe licenses and just enough caffeine to finish the episode.
          </p>
        </div>
        
        <p class="text-xl font-display text-vcr-blue-400 text-center my-8">
          We are the post-postmodern softcore psychological horror comedy network no one asked for—<br>
          and everyone needed.
        </p>
      </div>

      <!-- Why We Make Things -->
      <div class="bg-gradient-to-r from-vcr-blue-600/10 to-trauma-red-600/10 p-8 rounded">
        <p class="text-lg font-serif text-tape-gray-200">
          We make things because we have to.<br>
          Because if we don't get these memories out of our heads and into a waveform,<br>
          they'll rot in there.
        </p>
        
        <p class="text-lg font-serif italic text-tape-gray-300 mt-4">
          Like teeth. Or film.<br>
          Or old friends we stopped texting because we didn't know how to talk about who we'd become.
        </p>
      </div>

      <!-- Who This Is For -->
      <div class="my-16">
        <h3 class="text-2xl font-mono text-postit-yellow-500 mb-6">Cultural Autopsy Studios is for:</h3>
        
        <ul class="space-y-3 font-serif text-lg text-tape-gray-200">
          <li class="flex items-start">
            <span class="text-vcr-blue-400 mr-3 font-mono">></span>
            the people who cried at commercials as kids
          </li>
          <li class="flex items-start">
            <span class="text-vcr-blue-400 mr-3 font-mono">></span>
            the ones who made mixtapes for friends who never listened
          </li>
          <li class="flex items-start">
            <span class="text-vcr-blue-400 mr-3 font-mono">></span>
            the ones who know the joke and the pain and still press publish
          </li>
        </ul>
      </div>

      <!-- Sacred Space -->
      <div class="border-2 border-postit-yellow-500 p-8 my-12 text-center">
        <p class="text-xl font-serif text-trauma-red-400 mb-4">
          We are not a safe space.
        </p>
        
        <p class="text-2xl font-display text-postit-yellow-500">
          We are a sacred space.
        </p>
        
        <p class="text-lg font-serif italic text-tape-gray-300 mt-4">
          For sadness. For satire. For signal.
        </p>
        
        <p class="text-lg font-serif text-tape-gray-200 mt-6">
          And for truth—that slippery, glitching thing that lives just beneath the surface of every meme, 
          monologue, and meta-commentary on The Matrix.
        </p>
      </div>

      <!-- Closing -->
      <div class="text-center space-y-6 mt-16">
        <p class="text-xl font-serif text-tape-gray-200">
          We're not here to explain it all.
        </p>
        
        <p class="text-xl font-serif text-tape-gray-200">
          We're just here to tell you:
        </p>
        
        <p class="text-3xl font-display text-vcr-blue-400">
          You're not crazy. You're just awake.
        </p>
        
        <div class="mt-12 pt-8 border-t border-vcr-blue-600/30">
          <p class="text-2xl font-mono text-postit-yellow-500 mb-4">
            Welcome to the studio.
          </p>
          
          <p class="text-xl font-serif italic text-trauma-red-400 animate-pulse">
            We kept the tape running.
          </p>
        </div>
      </div>
    </div>

    <!-- Easter egg -->
    <div class="mt-20 text-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
      <p class="font-mono text-xs text-vcr-blue-600">
        // memory_status: recording_always
      </p>
    </div>
  </div>
</section>

<style>
  .prose-invert {
    color: theme(colors.tape-gray.200);
  }
  
  .prose-invert strong {
    color: theme(colors.postit-yellow.400);
  }
  
  .prose-invert em {
    color: theme(colors.vcr-blue.400);
  }
</style>