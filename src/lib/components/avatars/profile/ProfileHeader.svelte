<script lang="ts">
  export let avatar: {
    name: string;
    role: string;
    quote: string;
    setting: string;
  };
  
  $: slug = avatar.name.toLowerCase().replace(/\s+/g, '-');
  // For now, use placeholder for all avatars
  $: avatarImage = `/images/avatars/placeholder.svg`;
</script>

<header class="text-center space-y-8">
  <!-- Avatar image -->
  <div class="relative inline-block">
    <div class="w-48 h-48 mx-auto relative overflow-hidden rounded-lg border-4 border-vcr-blue-600">
      <img 
        src={avatarImage} 
        alt={avatar.name}
        class="w-full h-full object-cover filter contrast-110"
        on:error={(e) => {
          e.currentTarget.src = `/images/avatars/placeholder.svg`;
        }}
      />
      <!-- Scanline effect -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-vcr-blue-600/20 to-transparent 
                  bg-[length:100%_4px] animate-pulse pointer-events-none"></div>
    </div>
    
    <!-- Status indicator -->
    <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                bg-tape-gray-800 border border-vcr-blue-400 px-3 py-1 rounded">
      <span class="text-xs font-mono text-postit-yellow-500">[ONLINE]</span>
    </div>
  </div>
  
  <!-- Name and role -->
  <div class="space-y-4">
    <h1 class="text-5xl md:text-7xl font-mono font-bold text-vcr-blue-400 animate-glitch">
      {avatar.name}
    </h1>
    
    <p class="text-xl md:text-2xl font-serif italic text-tape-gray-300">
      {avatar.role}
    </p>
    
    <p class="text-lg font-mono text-trauma-red-400">
      // {avatar.setting}
    </p>
  </div>
  
  <!-- Signature quote -->
  <blockquote class="max-w-3xl mx-auto">
    <p class="text-2xl font-serif italic text-postit-yellow-500 leading-relaxed">
      "{avatar.quote}"
    </p>
  </blockquote>
</header>