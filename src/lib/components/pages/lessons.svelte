<script lang="ts">
	import { Book, Code, Star } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { setCurrentPage } from '$lib/stores/navigation';
</script>

<section class="relative min-h-screen pt-20">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h1 class="mb-6 text-4xl lg:text-6xl">
				<span class="block text-gray-200">Dark Arts</span>
				<span
					class="block bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
				>
					Curriculum
				</span>
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-gray-400">
				Master the forbidden knowledge of programming through our carefully crafted lessons.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div
				class="rounded-lg border border-purple-600/30 bg-purple-900/20 p-6 transition-colors hover:bg-purple-900/30"
			>
				<div class="mb-4">
					<Code class="h-8 w-8 text-purple-400" />
				</div>
				<h3 class="mb-2 text-xl text-gray-200">Fundamentals of Shadow Code</h3>
				<p class="mb-4 text-gray-400">Learn the basic incantations and syntax of the dark arts.</p>
				<Button
					size="sm"
					variant="outline"
					class="border-purple-600/30 text-purple-300 hover:bg-purple-900/20"
				>
					Begin Journey
				</Button>
			</div>

			<div
				class="rounded-lg border border-indigo-600/30 bg-indigo-900/20 p-6 transition-colors hover:bg-indigo-900/30"
			>
				<div class="mb-4">
					<Book class="h-8 w-8 text-indigo-400" />
				</div>
				<h3 class="mb-2 text-xl text-gray-200">Advanced Sorcery</h3>
				<p class="mb-4 text-gray-400">Delve deeper into complex algorithms and data structures.</p>
				<Button
					size="sm"
					variant="outline"
					class="border-indigo-600/30 text-indigo-300 hover:bg-indigo-900/20"
				>
					Unlock Secrets
				</Button>
			</div>

			<div
				class="rounded-lg border border-purple-600/30 bg-purple-900/20 p-6 transition-colors hover:bg-purple-900/30"
			>
				<div class="mb-4">
					<Star class="h-8 w-8 text-purple-400" />
				</div>
				<h3 class="mb-2 text-xl text-gray-200">Master's Path</h3>
				<p class="mb-4 text-gray-400">
					Achieve true mastery with advanced projects and challenges.
				</p>
				<Button
					size="sm"
					variant="outline"
					class="border-purple-600/30 text-purple-300 hover:bg-purple-900/20"
				>
					Ascend
				</Button>
			</div>
		</div>

		<div class="mt-12 text-center">
			<Button
				onclick={() => setCurrentPage('home')}
				variant="outline"
				class="border-gray-600/30 text-gray-300 hover:bg-gray-900/20"
			>
				Return to Sanctuary
			</Button>
		</div>
	</div>
</section>
