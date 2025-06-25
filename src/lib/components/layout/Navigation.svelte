<script lang="ts">
	import { page } from '$app/stores';
	import { SITE_CONFIG } from '$lib/config/site.config';
	
	let mobileMenuOpen = false;
	
	const navItems = [
		{ label: 'Index', href: '/' },
		{ label: 'Archive', href: '/episodes' },
		{ label: 'Tape', href: '/blog' },
		{ label: 'Exit', href: '/manifesto', special: true }
	];
	
	$: currentPath = $page.url.pathname;
</script>

<nav class="bg-tape-gray-900/95 backdrop-blur-sm border-b-2 border-vcr-blue-600/30 sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div class="flex justify-between items-center h-14 sm:h-16">
			<!-- Logo/Title -->
			<div class="flex items-center">
				<a href="/" class="flex items-center group">
					<div class="w-10 h-10 lg:w-12 lg:h-12 bg-vcr-blue-600/20 border border-vcr-blue-400 
							   flex items-center justify-center font-mono text-vcr-blue-400 mr-3
							   group-hover:bg-vcr-blue-600/30 transition-colors">
						CAS
					</div>
					<span class="hidden sm:block font-mono text-paper-white text-sm lg:text-base">
						CULTURAL_AUTOPSY_STUDIOS
					</span>
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<a 
						href={item.href}
						class="font-mono text-sm lg:text-base transition-all duration-200
							   {currentPath === item.href 
								? 'text-postit-yellow-500' 
								: item.special 
									? 'text-trauma-red-400 hover:text-trauma-red-300' 
									: 'text-tape-gray-400 hover:text-paper-white'}"
					>
						[{item.label}]
					</a>
				{/each}
			</div>
			
			<!-- CTA Button -->
			<div class="hidden md:flex items-center">
				<a 
					href="/contact"
					class="bg-transparent border-2 border-postit-yellow-500 text-postit-yellow-500 
						   px-4 py-2 lg:px-6 lg:py-2 font-mono text-sm lg:text-base
						   hover:bg-postit-yellow-500 hover:text-tape-gray-900 transition-all duration-200"
				>
					[Join_Autopsy]
				</a>
			</div>
			
			<!-- Mobile Menu Button -->
			<button 
				class="md:hidden p-1.5 sm:p-2"
				on:click={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="Toggle menu"
			>
				<div class="space-y-1">
					<div class="w-5 h-0.5 bg-vcr-blue-400 transition-all duration-200 
							   {mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}"></div>
					<div class="w-5 h-0.5 bg-vcr-blue-400 transition-all duration-200 
							   {mobileMenuOpen ? 'opacity-0' : ''}"></div>
					<div class="w-5 h-0.5 bg-vcr-blue-400 transition-all duration-200 
							   {mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}"></div>
				</div>
			</button>
		</div>
		
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t-2 border-vcr-blue-600/30 py-4 bg-tape-gray-900">
				<div class="flex flex-col space-y-4">
					{#each navItems as item}
						<a 
							href={item.href}
							class="font-mono text-sm flex items-center transition-colors
								   {currentPath === item.href 
									? 'text-postit-yellow-500' 
									: item.special 
										? 'text-trauma-red-400' 
										: 'text-tape-gray-400'}"
							on:click={() => mobileMenuOpen = false}
						>
							<span class="w-2 h-2 bg-vcr-blue-600 mr-3 animate-pulse"></span>
							[{item.label}]
						</a>
					{/each}
					<a 
						href="/contact"
						class="bg-vcr-blue-600 text-paper-white px-6 py-3 font-mono text-center mt-4
							   border-2 border-vcr-blue-400 hover:bg-vcr-blue-700 transition-colors"
						on:click={() => mobileMenuOpen = false}
					>
						[Join_Autopsy]
					</a>
				</div>
			</div>
		{/if}
	</div>
	
	<!-- VHS tracking lines effect -->
	<div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vcr-blue-400/50 to-transparent animate-pulse"></div>
</nav>

<style>
	nav {
		box-shadow: 0 2px 20px rgba(81, 69, 235, 0.2);
	}
</style>