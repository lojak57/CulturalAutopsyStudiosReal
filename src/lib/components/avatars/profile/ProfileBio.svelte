<script lang="ts">
  export let avatar: {
    name: string;
    role: string;
    quote: string;
    setting: string;
  };
  
  // Extended bio data - in a real app, this would come from your CMS
  const bios = {
    'Holden': {
      background: "Former late-night radio host turned digital philosopher. Holden spent years in the darkness of 3am broadcasts, collecting stories from insomniacs and night workers.",
      approach: "Uses long pauses and carefully crafted questions to create space for uncomfortable truths. Believes every conversation is an excavation.",
      signature: "Known for the phrase 'Tell me about the last time you felt truly seen.'"
    },
    'Lilly': {
      background: "Burned out from covering tragedy after tragedy, Lilly left network news but couldn't stop breaking stories - now she breaks down the stories that break us.",
      approach: "Rapid-fire questioning mixed with unexpected moments of vulnerability. She reports on the human condition like it's breaking news because it always is.",
      signature: "Often starts interviews with 'What's the story you're tired of telling?'"
    },
    'Eva': {
      background: "A former therapist who realized the real work happens in hallways, not offices. Eva listens to the spaces between words.",
      approach: "Creates uncomfortable silences that become comfortable. Masters the art of being present without being intrusive.",
      signature: "Her interviews often end with 'What did you not say today?'"
    },
    'Reese': {
      background: "Philosophy PhD dropout who found more truth in city lights than textbooks. Reese turns every conversation into an existential exploration.",
      approach: "Connects the mundane to the profound. Makes you question everything while feeling oddly comforted.",
      signature: "Famous for asking 'If this feeling was a place, where would it be?'"
    },
    'The Archivist': {
      background: "Identity unknown. Some say they're an AI, others insist they're too human. The Archivist remembers everything so we don't have to.",
      approach: "Speaks in fragments and references. Creates connections between conversations across time.",
      signature: "Always ends with 'This has been archived. You are seen.'"
    }
  };
  
  $: bio = bios[avatar.name] || {
    background: "A voice in the void, carrying stories.",
    approach: "Every conversation is a journey.",
    signature: "Still being written."
  };
</script>

<section class="max-w-4xl mx-auto">
  <h2 class="text-3xl font-mono text-vcr-blue-400 mb-8">[PERSONNEL_FILE]</h2>
  
  <div class="bg-tape-gray-800 border border-vcr-blue-600/30 p-8 space-y-6">
    <!-- Background -->
    <div class="space-y-2">
      <h3 class="font-mono text-postit-yellow-500 text-sm">// BACKGROUND</h3>
      <p class="text-tape-gray-300 leading-relaxed">
        {bio.background}
      </p>
    </div>
    
    <!-- Approach -->
    <div class="space-y-2">
      <h3 class="font-mono text-postit-yellow-500 text-sm">// INTERVIEW_STYLE</h3>
      <p class="text-tape-gray-300 leading-relaxed">
        {bio.approach}
      </p>
    </div>
    
    <!-- Signature -->
    <div class="space-y-2">
      <h3 class="font-mono text-postit-yellow-500 text-sm">// SIGNATURE_MOVE</h3>
      <p class="text-tape-gray-300 leading-relaxed italic">
        {bio.signature}
      </p>
    </div>
    
    <!-- Stats -->
    <div class="grid grid-cols-3 gap-4 pt-6 border-t border-vcr-blue-600/20">
      <div class="text-center">
        <p class="text-2xl font-mono text-trauma-red-400">???</p>
        <p class="text-xs text-tape-gray-500 font-mono">EPISODES</p>
      </div>
      <div class="text-center">
        <p class="text-2xl font-mono text-trauma-red-400">∞</p>
        <p class="text-xs text-tape-gray-500 font-mono">STORIES_HELD</p>
      </div>
      <div class="text-center">
        <p class="text-2xl font-mono text-trauma-red-400">24/7</p>
        <p class="text-xs text-tape-gray-500 font-mono">AVAILABILITY</p>
      </div>
    </div>
  </div>
</section>