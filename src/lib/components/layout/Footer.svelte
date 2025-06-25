<script lang="ts">
	import { SITE_CONFIG } from '$lib/config/site.config';
	
	const currentYear = new Date().getFullYear();
	
	const footerLinks = {
		network: [
			{ label: 'Episodes', href: '/episodes' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Manifesto', href: '/manifesto' }
		],
		connect: [
			{ label: 'Submit Memory', href: '/contact' },
			{ label: 'Partner', href: '/partner' },
			{ label: 'Bios', href: '/team' }
		],
		legal: [
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' }
		]
	};
</script>

<footer class="bg-tape-gray-950 text-paper-white border-t-2 border-vcr-blue-600/30 relative overflow-hidden">
	<!-- VHS tracking lines -->
	<div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-postit-yellow-500/50 to-transparent"></div>
	
	<!-- Background noise -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,theme(colors.vcr-blue.600)_0%,transparent_50%)]"></div>
	</div>
	
	<div class="relative max-w-7xl mx-auto px-6 py-16">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
			<!-- Brand Column -->
			<div class="md:col-span-1">
				<div class="mb-6">
					<h3 class="font-mono text-2xl text-vcr-blue-400 mb-2">CAS</h3>
					<p class="font-serif italic text-tape-gray-400">
						{SITE_CONFIG.tagline}
					</p>
				</div>
				<p class="text-tape-gray-300 mb-6 font-mono text-sm">
					{SITE_CONFIG.pricingHook}
				</p>
				<div class="flex items-center space-x-3 text-postit-yellow-500">
					<span class="font-mono text-xs">status: recording</span>
					<span class="w-2 h-2 bg-trauma-red-500 rounded-full animate-pulse"></span>
				</div>
			</div>
			
			<!-- Network -->
			<div>
				<h3 class="font-mono text-lg mb-4 text-postit-yellow-500">[NETWORK]</h3>
				<ul class="space-y-3">
					{#each footerLinks.network as link}
						<li>
							<a 
								href={link.href}
								class="text-tape-gray-400 hover:text-vcr-blue-400 transition-colors flex items-center group font-mono text-sm"
							>
								<span class="mr-2 group-hover:text-postit-yellow-500">></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Connect -->
			<div>
				<h3 class="font-mono text-lg mb-4 text-postit-yellow-500">[CONNECT]</h3>
				<ul class="space-y-3">
					{#each footerLinks.connect as link}
						<li>
							<a 
								href={link.href}
								class="text-tape-gray-400 hover:text-vcr-blue-400 transition-colors flex items-center group font-mono text-sm"
							>
								<span class="mr-2 group-hover:text-postit-yellow-500">></span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Subscribe CTA -->
			<div class="bg-vcr-blue-600/10 border border-vcr-blue-600 p-6">
				<h3 class="font-mono text-lg mb-2 text-vcr-blue-400">[JOIN_AUTOPSY]</h3>
				<p class="text-tape-gray-300 text-sm mb-4 font-serif italic">
					Get the full tapes. Unedited memories. Raw frequencies.
				</p>
				<a 
					href={SITE_CONFIG.social.substack}
					class="block bg-postit-yellow-500 text-tape-gray-900 px-4 py-2 font-mono text-center
						   hover:bg-postit-yellow-400 transition-colors border-2 border-postit-yellow-600"
				>
					[SUBSCRIBE]
				</a>
			</div>
		</div>
		
		<!-- Social Links -->
		<div class="border-t border-vcr-blue-600/30 mt-12 pt-8">
			<div class="flex flex-wrap items-center justify-center gap-6 mb-8">
				{#each Object.entries(SITE_CONFIG.social) as [platform, url]}
					<a 
						href={url}
						class="text-tape-gray-400 hover:text-vcr-blue-400 font-mono text-sm transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						[{platform.toUpperCase()}]
					</a>
				{/each}
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="text-center space-y-2">
			<div class="flex items-center justify-center space-x-4 text-tape-gray-500 text-xs font-mono">
				<span>&copy; {currentYear} {SITE_CONFIG.name}</span>
				<span>•</span>
				{#each footerLinks.legal as link, i}
					<a 
						href={link.href}
						class="hover:text-tape-gray-300 transition-colors"
					>
						{link.label}
					</a>
					{#if i < footerLinks.legal.length - 1}
						<span>•</span>
					{/if}
				{/each}
			</div>
			
			<!-- Easter egg -->
			<p class="text-tape-gray-600 font-mono text-xs opacity-50 hover:opacity-100 transition-opacity">
				// we_remember_everything_so_you_dont_have_to
			</p>
		</div>
	</div>
	
	<!-- Bottom nav bar -->
	<div class="bg-vcr-blue-600/20 border-t border-vcr-blue-600 py-2">
		<div class="max-w-7xl mx-auto px-6 flex justify-center space-x-8 text-xs font-mono">
			<span class="text-tape-gray-400">Index</span>
			<span class="text-tape-gray-600">|</span>
			<span class="text-tape-gray-400">Archive</span>
			<span class="text-tape-gray-600">|</span>
			<span class="text-tape-gray-400">Tape</span>
			<span class="text-tape-gray-600">|</span>
			<span class="text-trauma-red-400">Exit</span>
		</div>
	</div>
</footer>