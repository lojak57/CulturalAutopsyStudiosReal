<script lang="ts">
	import { SITE_CONFIG } from '$lib/config/site.config';
	
	// Featured shows with episode counts
	const featuredShows = [
		{
			title: 'The Boardroom',
			description: 'Corporate trauma as performance art. Where C-suite meets cry-suite.',
			episodes: '47 episodes',
			latestEpisode: 'The Exit Interview That Never Ends',
			vibe: 'corporate-horror',
			emoji: '💼'
		},
		{
			title: 'Matrix Deep Dive',
			description: 'Red pills, blue screens, and the digital reality we never asked for.',
			episodes: '33 episodes',
			latestEpisode: 'Why Your Zoom Background Is Your Prison',
			vibe: 'tech-philosophy',
			emoji: '💊'
		},
		{
			title: 'Memory Glitch Series',
			description: 'When nostalgia.exe stops responding. A journey through corrupted memories.',
			episodes: '28 episodes',
			latestEpisode: 'The MySpace Profile That Still Haunts Me',
			vibe: 'digital-nostalgia',
			emoji: '📼'
		}
	];
</script>

<!-- Featured Shows Section -->
<section class="py-20 bg-tape-gray-900 text-paper-white relative overflow-hidden">
	<!-- Background noise pattern -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0 bg-[repeating-conic-gradient(theme(colors.vcr-blue.600)_0deg_10deg,transparent_10deg_20deg)] 
					bg-[length:40px_40px]"></div>
	</div>
	
	<div class="relative z-10 max-w-7xl mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-6xl font-mono text-postit-yellow-500 mb-4">
				[FEATURED_SHOWS]
			</h2>
			<p class="text-xl font-serif italic text-tape-gray-300 max-w-3xl mx-auto">
				Current frequencies broadcasting from the void
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each featuredShows as show}
				<div class="bg-tape-gray-800 border-2 border-vcr-blue-600/50 hover:border-vcr-blue-400 
						   transition-all duration-300 p-6 group hover:shadow-vhs hover:-translate-y-1">
					<!-- Show emoji -->
					<div class="text-4xl mb-4 group-hover:animate-bounce">
						{show.emoji}
					</div>
					
					<!-- Show title -->
					<h3 class="text-2xl font-display text-vcr-blue-400 mb-3 group-hover:text-postit-yellow-500 transition-colors">
						{show.title}
					</h3>
					
					<!-- Description -->
					<p class="text-tape-gray-300 font-serif italic mb-4">
						{show.description}
					</p>
					
					<!-- Episode info -->
					<div class="space-y-2 mb-6">
						<p class="text-sm font-mono text-tape-gray-400">
							// {show.episodes}
						</p>
						<p class="text-xs font-mono text-trauma-red-400">
							latest: "{show.latestEpisode}"
						</p>
					</div>
					
					<!-- CTA -->
					<a 
						href="/episodes?show={encodeURIComponent(show.title)}"
						class="inline-flex items-center text-vcr-blue-400 hover:text-postit-yellow-500 
							   font-mono text-sm transition-colors group/link"
					>
						[LISTEN_NOW]
						<span class="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
					</a>
					
					<!-- Glitch line on hover -->
					<div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
							   via-vcr-blue-400 to-transparent opacity-0 group-hover:opacity-100 
							   transition-opacity duration-300"></div>
				</div>
			{/each}
		</div>
		
		<!-- Bottom CTA -->
		<div class="text-center mt-16">
			<p class="text-tape-gray-400 font-mono mb-6">
				// access.all_episodes = true
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a 
					href="/episodes" 
					class="px-6 py-3 bg-vcr-blue-600 hover:bg-vcr-blue-700 text-paper-white 
						   font-mono border-2 border-vcr-blue-400 transition-all duration-200
						   hover:shadow-vhs inline-block"
				>
					[BROWSE_FULL_ARCHIVE]
				</a>
				<span class="text-tape-gray-500 font-mono">||</span>
				<a 
					href={SITE_CONFIG.social.substack}
					class="px-6 py-3 bg-transparent hover:bg-postit-yellow-500/10 text-postit-yellow-500 
						   font-mono border-2 border-postit-yellow-500 transition-all duration-200
						   hover:shadow-vhs inline-block"
				>
					[SUBSCRIBE_FOR_BONUS]
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Add a subtle static animation to the section */
	@keyframes static-flicker {
		0%, 100% { opacity: 0.1; }
		50% { opacity: 0.15; }
	}
	
	section::before {
		content: '';
		position: absolute;
		inset: 0;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
		pointer-events: none;
		animation: static-flicker 3s infinite;
	}
</style>