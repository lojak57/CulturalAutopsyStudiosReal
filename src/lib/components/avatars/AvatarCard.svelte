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

<a 
  href="/avatars/{slug}"
  class="block group cursor-pointer text-left h-full"
>
  <div class="bg-tape-gray-900 border-2 border-vcr-blue-600/30 hover:border-vcr-blue-400 
              transition-all duration-300 p-6 h-full flex flex-col justify-between
              hover:shadow-vhs hover:-translate-y-1 overflow-hidden">
    
    <!-- Avatar image area -->
    <div class="flex-1 flex items-center justify-center mb-6 relative">
      <div class="w-32 h-32 relative overflow-hidden rounded-lg">
        <img 
          src={avatarImage} 
          alt={avatar.name}
          class="w-full h-full object-cover filter grayscale contrast-125 
                 group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          on:error={(e) => {
            e.currentTarget.src = `/images/avatars/placeholder.svg`;
          }}
        />
        <!-- VHS scanline overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-vcr-blue-600/10 to-transparent 
                    bg-[length:100%_3px] animate-pulse pointer-events-none"></div>
      </div>
    </div>

    <!-- Avatar info -->
    <div class="text-center space-y-3">
      <h3 class="text-xl font-mono text-postit-yellow-500 group-hover:text-vcr-blue-400 transition-colors">
        {avatar.name}
      </h3>
      
      <p class="text-tape-gray-400 text-sm font-serif italic">
        {avatar.role}
      </p>
      
      <p class="text-tape-gray-500 text-xs font-mono">
        [{avatar.setting}]
      </p>
    </div>

    <!-- Hover indicator -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
                via-vcr-blue-400 to-transparent opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"></div>
  </div>
</a>