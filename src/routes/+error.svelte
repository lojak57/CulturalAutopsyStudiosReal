<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>ERROR_{$page.status || '404'} | Cultural Autopsy Studios</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-tape-gray-900 relative overflow-hidden">
	<!-- VHS static effect -->
	<div class="absolute inset-0 opacity-20">
		<div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,theme(colors.vcr-blue.600/10)_2px,theme(colors.vcr-blue.600/10)_4px)]"></div>
	</div>
	
	<!-- Glitch squares background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-10 left-10 w-32 h-32 bg-vcr-blue-600 animate-glitch"></div>
		<div class="absolute bottom-20 right-20 w-24 h-24 bg-trauma-red-600 animate-glitch" style="animation-delay: 0.5s"></div>
		<div class="absolute top-1/3 right-1/3 w-20 h-20 bg-postit-yellow-500 animate-glitch" style="animation-delay: 1s"></div>
	</div>
	
	<div class="relative z-10 max-w-2xl mx-auto px-6 text-center">
		<!-- Big error code -->
		<div class="relative mb-8">
			<h1 class="font-mono text-8xl md:text-[10rem] font-bold text-vcr-blue-600/20 animate-pulse">
				{$page.status || '404'}
			</h1>
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="text-6xl animate-glitch">
					📼
				</div>
			</div>
		</div>
		
		<h2 class="font-display text-3xl md:text-4xl font-bold text-trauma-red-500 mb-4 animate-glitch">
			TRACKING_ERROR
		</h2>
		
		<p class="text-lg text-tape-gray-300 mb-8 max-w-lg mx-auto font-serif italic">
			{#if $page.status === 404}
				The tape you're looking for got eaten by the VCR. <br>
				We're still looking for the pieces.
			{:else}
				Signal lost at frequency {$page.status || '???'}Hz. <br>
				The memories are corrupted but recoverable.
			{/if}
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			<a 
				href="/"
				class="px-8 py-4 bg-vcr-blue-600 hover:bg-vcr-blue-700 text-paper-white 
					   font-mono text-lg border-2 border-vcr-blue-400 shadow-glitch
					   transition-all duration-200 hover:animate-glitch inline-block">
				[REWIND_TO_START]
			</a>
			<a 
				href="/manifesto"
				class="px-8 py-4 bg-transparent hover:bg-trauma-red-600/20 text-trauma-red-400 
					   font-mono text-lg border-2 border-trauma-red-600 
					   transition-all duration-200 hover:shadow-vhs inline-block">
				[READ_MANIFESTO]
			</a>
		</div>
		
		<!-- Status indicator -->
		<div class="mt-12 font-mono text-sm text-tape-gray-500">
			<p>// error.code = {$page.status || '404'}</p>
			<p class="text-xs mt-2">// memory.status = searching...</p>
		</div>
	</div>
</div>

<style>
	@keyframes glitch {
		0%, 100% { 
			transform: translate(0);
			filter: hue-rotate(0deg);
		}
		20% { 
			transform: translate(-2px, 2px);
			filter: hue-rotate(90deg);
		}
		40% { 
			transform: translate(-2px, -2px);
			filter: hue-rotate(180deg);
		}
		60% { 
			transform: translate(2px, 2px);
			filter: hue-rotate(270deg);
		}
		80% { 
			transform: translate(2px, -2px);
			filter: hue-rotate(360deg);
		}
	}
	
	.animate-glitch {
		animation: glitch 2s ease-in-out infinite;
	}
</style>