<script lang="ts">
	import { Wand2, Code, Star } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { setCurrentPage } from '$lib/stores/navigation';
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<div class="absolute inset-0">
		<div class="absolute top-20 left-10 h-1 w-1 animate-pulse rounded-full bg-purple-600/60"></div>
		<div
			class="absolute top-40 right-20 h-0.5 w-0.5 animate-ping rounded-full bg-indigo-500/40"
		></div>
		<div
			class="absolute bottom-40 left-20 h-2 w-2 animate-bounce rounded-full bg-purple-700/50"
		></div>
		<div
			class="absolute top-60 left-1/3 h-0.5 w-0.5 animate-pulse rounded-full bg-indigo-600/30"
		></div>
		<div
			class="absolute right-1/3 bottom-60 h-1 w-1 animate-ping rounded-full bg-purple-600/40"
		></div>
		<div
			class="absolute top-1/3 left-1/4 h-px w-px animate-pulse rounded-full bg-purple-500/20"
		></div>
		<div
			class="absolute right-1/4 bottom-1/3 h-px w-px animate-ping rounded-full bg-indigo-500/20"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div class="text-center lg:text-left">
				<div class="mb-4 flex items-center justify-center space-x-2 lg:justify-start">
					<Star class="h-5 w-5 animate-spin text-indigo-400/60" style="animation-duration: 4s;" />
					<span class="text-xs tracking-wider text-gray-400 uppercase">Enter the Shadow Realm</span>
					<Star class="h-5 w-5 animate-spin text-purple-400/60" style="animation-duration: 4s;" />
				</div>

				<h1 class="mb-6 text-5xl leading-tight lg:text-7xl">
					<span class="block text-gray-200">Forge Code in</span>
					<span
						class="block bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
					>
						Darkness
					</span>
				</h1>

				<p class="mx-auto mb-8 max-w-2xl text-lg text-gray-400 lg:mx-0">
					Embrace the shadows and master the forbidden arts of programming. Where others see
					complexity, you will see opportunity. Your ascension begins in darkness.
				</p>

				<div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
					<Button
						size="lg"
						onclick={() => setCurrentPage('lessons')}
						class="border-0 bg-gradient-to-r from-purple-800 to-indigo-800 px-8 py-3 text-lg text-white hover:from-purple-700 hover:to-indigo-700"
					>
						<Wand2 class="mr-2 h-5 w-5" />
						Enter the Void
					</Button>

					<Button
						size="lg"
						variant="outline"
						class="border-purple-600/30 px-8 py-3 text-lg text-gray-300 hover:bg-purple-900/20"
					>
						<Code class="mr-2 h-5 w-5" />
						Study the Arts
					</Button>
				</div>

				<div
					class="mt-12 flex items-center justify-center space-x-8 text-gray-500 lg:justify-start"
				>
					<div class="text-center">
						<div class="text-2xl text-gray-200">00,000+</div>
						<div class="text-xs">Souls Awakened</div>
					</div>
					<div class="text-center">
						<div class="text-2xl text-gray-200">00+</div>
						<div class="text-xs">Dark Paths</div>
					</div>
					<div class="text-center">
						<div class="text-2xl text-gray-200">100%</div>
						<div class="text-xs">Ascension Rate</div>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="relative overflow-hidden rounded-2xl shadow-2xl">
					<div class="absolute inset-0 z-10 bg-gradient-to-tr from-purple-900/40 to-black/60"></div>
					<img
						src="https://images.unsplash.com/photo-1560651921-d0f00d033501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMHdpemFyZCUyMGNvZGluZyUyMGNvbXB1dGVyJTIwZGFya3xlbnwxfHx8fDE3NTk4NTE4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
						alt="Dark coding realm"
						class="h-96 w-full object-cover opacity-80 lg:h-[500px]"
					/>
				</div>

				<div
					class="animate-float absolute -top-4 -left-4 rounded-lg border border-purple-600/30 bg-purple-800/80 p-3 shadow-2xl"
				>
					<Code class="h-6 w-6 text-purple-200" />
				</div>
				<div
					class="animate-float absolute -right-4 -bottom-4 rounded-lg border border-indigo-600/30 bg-indigo-800/80 p-3 shadow-2xl"
					style="animation-delay: 1s;"
				>
					<Wand2 class="h-6 w-6 text-indigo-200" />
				</div>
				<div
					class="animate-float absolute top-8 -right-8 rounded-full border border-purple-500/30 bg-purple-900/80 p-2 shadow-2xl"
					style="animation-delay: 2s;"
				>
					<Star class="h-4 w-4 text-purple-300" />
				</div>
			</div>
		</div>
	</div>

	<style>
		@keyframes float {
			0%,
			100% {
				transform: translateY(0px);
			}
			50% {
				transform: translateY(-10px);
			}
		}
		.animate-float {
			animation: float 3s ease-in-out infinite;
		}
	</style>
</section>
