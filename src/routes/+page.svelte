<script lang="ts">
	import { HeroSection, AvatarsSection } from '$lib/components/homepage';
	import { onMount } from 'svelte';
	import { lazyImport } from '$lib/utils/lazyLoad';
	import { SITE_CONFIG } from '$lib/config/site.config';

	let loadedSections: { [key: string]: any } = {};
	let visibleSections = new Set<string>();

	const sectionLoaders = {
		whatWeDo: () => lazyImport(() => import('$lib/components/homepage/Why5280Section.svelte')),
		shows: () => lazyImport(() => import('$lib/components/homepage/PlansSnapshotSection.svelte')),
		blog: () => lazyImport(() => import('$lib/components/homepage/FounderStorySection.svelte')),
		finalCTA: () => lazyImport(() => import('$lib/components/homepage/FinalCTASection.svelte'))
	};

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(async (entry) => {
					if (entry.isIntersecting) {
						const sectionName = entry.target.getAttribute('data-section');
						if (sectionName && !visibleSections.has(sectionName)) {
							visibleSections.add(sectionName);
							visibleSections = new Set(visibleSections);
							
							if (!loadedSections[sectionName] && sectionLoaders[sectionName as keyof typeof sectionLoaders]) {
								loadedSections[sectionName] = await sectionLoaders[sectionName as keyof typeof sectionLoaders]();
								loadedSections = { ...loadedSections };
							}
							
							observer.unobserve(entry.target);
						}
					}
				});
			},
			{ rootMargin: '100px', threshold: 0.1 }
		);

		document.querySelectorAll('[data-section]').forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>{SITE_CONFIG.name} | {SITE_CONFIG.tagline}</title>
	<meta name="description" content="We make podcasts that feel like diaries, essays that feel like therapy, and memes that feel like memory." />
	<meta property="og:title" content="{SITE_CONFIG.name} | {SITE_CONFIG.tagline}" />
	<meta property="og:description" content="We make podcasts that feel like diaries, essays that feel like therapy, and memes that feel like memory." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://culturalautopsystudios.com" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<HeroSection />
<AvatarsSection />

<!-- What We Do Section -->
<section class="py-20 bg-tape-gray-900 text-paper-white relative overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0 bg-[linear-gradient(45deg,theme(colors.vcr-blue.600)_25%,transparent_25%,transparent_75%,theme(colors.vcr-blue.600)_75%,theme(colors.vcr-blue.600)),linear-gradient(45deg,theme(colors.vcr-blue.600)_25%,transparent_25%,transparent_75%,theme(colors.vcr-blue.600)_75%,theme(colors.vcr-blue.600))] 
					bg-[length:30px_30px] bg-[position:0_0,15px_15px]"></div>
	</div>
	
	<div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
		<h2 class="text-4xl md:text-6xl font-mono text-postit-yellow-500 mb-8 animate-glitch">
			[What We Do]
		</h2>
		
		<div class="text-2xl md:text-3xl font-serif italic text-tape-gray-300 space-y-2">
			<p class="animate-typewriter-1">We make podcasts that feel like diaries,</p>
			<p class="animate-typewriter-2">essays that feel like therapy,</p>
			<p class="animate-typewriter-3">and memes that feel like memory.</p>
		</div>
		
		<div class="mt-12 text-vcr-blue-400 font-mono text-sm">
			<p>// distributed through every frequency</p>
			<p>// archived in perpetuity</p>
			<p>// remembered forever</p>
		</div>
	</div>
</section>

<!-- Lazy loaded sections -->
<div data-section="shows" class="min-h-[50px]">
	{#if visibleSections.has('shows') && loadedSections.shows}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.shows} />
		</div>
	{/if}
</div>

<div data-section="blog" class="min-h-[50px]">
	{#if visibleSections.has('blog') && loadedSections.blog}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.blog} />
		</div>
	{/if}
</div>

<div data-section="finalCTA" class="min-h-[50px]">
	{#if visibleSections.has('finalCTA') && loadedSections.finalCTA}
		<div class="animate-fade-in">
			<svelte:component this={loadedSections.finalCTA} />
		</div>
	{/if}
</div>

<style>
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.animate-fade-in {
		animation: fade-in 0.4s ease-out;
	}
	
	.animate-typewriter-1 {
		animation: typewriter 2s steps(40) 0.5s normal both;
	}
	
	.animate-typewriter-2 {
		animation: typewriter 2s steps(40) 2s normal both;
	}
	
	.animate-typewriter-3 {
		animation: typewriter 2s steps(40) 3.5s normal both;
	}
	
	@keyframes typewriter {
		from { 
			width: 0;
			opacity: 0;
		}
		to { 
			width: 100%;
			opacity: 1;
		}
	}
</style>