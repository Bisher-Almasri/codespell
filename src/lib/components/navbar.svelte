<script lang="ts">
	import { BookOpen, Home, Menu, Sparkles, X } from 'lucide-svelte';
	import type { PageType } from '$lib/stores/navigation';
	import Button from './ui/button/button.svelte';

	export let currentPage: PageType = 'home';
	export let setCurrentPage: (page: PageType) => void;

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const goTo = (page: 'home' | 'lessons') => {
		setCurrentPage?.(page);
		isMenuOpen = false;
	};
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 border-b border-purple-500/10 bg-black/30 backdrop-blur-xl"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between py-4">
			<button
				onclick={() => setCurrentPage('home')}
				class="flex items-center space-x-2 transition-opacity hover:opacity-80"
				aria-label="Go to home"
			>
				<div class="relative">
					<Sparkles class="h-8 w-8 animate-pulse text-purple-400" />
				</div>
				<span
					class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-xl text-transparent"
				>
					CodeSpell Academy
				</span>
			</button>

			<div class="hidden items-center space-x-8 md:flex">
				<button
					onclick={() => goTo('home')}
					class="flex items-center space-x-2 transition-colors"
					class:text-purple-300={currentPage === 'home'}
					class:text-gray-400={currentPage !== 'home'}
					class:hover\:text-purple-200={currentPage !== 'home'}
				>
					<Home class="h-4 w-4" />
					<span>Academy</span>
				</button>
				<button
					onclick={() => goTo('lessons')}
					class="flex items-center space-x-2 transition-colors"
					class:text-purple-300={currentPage === 'lessons'}
					class:text-gray-400={currentPage !== 'lessons'}
					class:hover\:text-purple-200={currentPage !== 'lessons'}
				>
					<BookOpen class="h-4 w-4" />
					<span>Lessons</span>
				</button>

				<Button
					class="border-0 bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-600 hover:to-indigo-600"
				>
					Begin Quest
				</Button>
			</div>
			<div class="md:hidden">
				<Button variant="ghost" size="sm" onclick={toggleMenu} class="text-purple-200">
					{#if isMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</Button>
			</div>
		</div>

		{#if isMenuOpen}
			<div class="border-t border-purple-500/10 bg-black/50 backdrop-blur-xl md:hidden">
				<div class="space-y-1 px-2 pt-2 pb-3">
					<button
						onclick={() => goTo('home')}
						class="flex w-full items-center space-x-2 px-3 py-2 transition-colors"
						class:text-purple-300={currentPage === 'home'}
						class:text-gray-400={currentPage !== 'home'}
						class:hover\:text-purple-200={currentPage !== 'home'}
					>
						<Home class="h-4 w-4" />
						<span>Academy</span>
					</button>

					<button
						onclick={() => goTo('lessons')}
						class="flex w-full items-center space-x-2 px-3 py-2 transition-colors"
						class:text-purple-300={currentPage === 'lessons'}
						class:text-gray-400={currentPage !== 'lessons'}
						class:hover\:text-purple-200={currentPage !== 'lessons'}
					>
						<BookOpen class="h-4 w-4" />
						<span>Lessons</span>
					</button>

					<div class="px-3 py-2">
						<Button
							class="w-full border-0 bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-600 hover:to-indigo-600"
						>
							Begin Quest
						</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>
