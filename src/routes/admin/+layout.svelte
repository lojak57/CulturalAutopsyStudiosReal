<script lang="ts">
  import { page } from '$app/stores';
  import { SITE_CONFIG } from '$lib/config/site.config';
  
  $: currentPath = $page.url.pathname;
  
  const navItems = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Blog Posts', href: '/admin/blog' },
    { label: 'Episodes', href: '/admin/episodes' },
    { label: 'Videos', href: '/admin/videos' },
    { label: 'Manifesto', href: '/admin/manifesto' },
    { label: 'Settings', href: '/admin/settings' }
  ];
</script>

<div class="min-h-screen bg-tape-gray-900">
  <!-- Admin Header -->
  <header class="bg-tape-gray-800 border-b border-vcr-blue-600/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-mono text-vcr-blue-400">
            {SITE_CONFIG.name} / Admin
          </h1>
        </div>
        <nav class="flex space-x-4">
          <a href="/" class="text-tape-gray-300 hover:text-postit-yellow-500 transition-colors">
            View Site
          </a>
          <button class="text-trauma-red-400 hover:text-trauma-red-300 transition-colors">
            Logout
          </button>
        </nav>
      </div>
    </div>
  </header>

  <!-- Admin Layout -->
  <div class="flex h-[calc(100vh-4rem)]">
    <!-- Sidebar -->
    <aside class="w-64 bg-tape-gray-800 border-r border-vcr-blue-600/30">
      <nav class="p-4 space-y-2">
        {#each navItems as item}
          <a 
            href={item.href}
            class="block px-4 py-2 rounded transition-colors
                   {currentPath === item.href 
                     ? 'bg-vcr-blue-600/20 text-vcr-blue-400 border-l-2 border-vcr-blue-400' 
                     : 'text-tape-gray-300 hover:bg-tape-gray-700 hover:text-postit-yellow-500'}"
          >
            {item.label}
          </a>
        {/each}
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</div>