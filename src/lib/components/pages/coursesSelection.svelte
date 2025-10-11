<script lang="ts">
	import { BookOpen, Zap, Shield, Sparkles, Code, Database, Palette, Globe } from 'lucide-svelte';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
	import { Button } from '../ui/button';
	import { Badge } from '../ui/badge';
	import { setCurrentPage } from '$lib/stores/navigation';

	const courses = [
		{
			title: 'Foundations of Dark Magic',
			description:
				'Master the fundamental incantations and basic spells of programming, including the Python serpent.',
			icon: Code,
			level: 'Apprentice',
			duration: '1 hours',
			lessons: 13,
			color: 'from-purple-500 to-indigo-500',
			image:
				'https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		},
		{
			title: 'Web Sorcery',
			description:
				'Weave the fabric of the digital realm with HTML, CSS, and JavaScript enchantments.',
			icon: Globe,
			level: 'Adept',
			duration: '2 hours',
			lessons: 16,
			color: 'from-indigo-500 to-blue-500',
			image:
				'https://images.unsplash.com/photo-1547931587-2841fef9d915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		}
	];

	const levelColors: Record<string, string> = {
		Apprentice: 'bg-green-900/50 text-green-300 border-green-600/30',
		Adept: 'bg-yellow-900/50 text-yellow-300 border-yellow-600/30',
		Master: 'bg-red-900/50 text-red-300 border-red-600/30'
	};
</script>

<section id="courses" class="relative py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div class="mb-4 inline-flex items-center space-x-2">
				<BookOpen class="h-6 w-6 text-purple-400" />
				<span class="text-sm tracking-wider text-purple-300 uppercase">Magical Curriculum</span>
			</div>

			<h2 class="mb-6 text-4xl lg:text-5xl">
				<span class="text-white">Choose Your</span>
				<span
					class="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
				>
					Spellbook
				</span>
			</h2>

			<p class="mx-auto max-w-3xl text-xl text-purple-200">
				Each course is a carefully crafted grimoire, filled with ancient coding wisdom and modern
				development magic. Begin your transformation from apprentice to coding wizard.
			</p>
		</div>

		<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
			{#each courses as course}
				<Card
					class="group border-purple-500/30 py-0 bg-black/40 transition-all duration-300 hover:scale-105 hover:transform hover:border-purple-400/50"
				>
					<div class="relative overflow-hidden rounded-t-lg">
						<img
							src={course.image}
							alt={course.title}
							class="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
						<div
							class={`absolute top-2 right-2 rounded-lg bg-gradient-to-r p-2 ${course.color} shadow-lg`}
						>
							<svelte:component this={course.icon} class="h-5 w-5 text-white" />
						</div>
					</div>

					<CardHeader>
						<div class="mb-2 flex items-center justify-between">
							<Badge variant="outline" class={levelColors[course.level]}>
								{course.level}
							</Badge>
							<div class="text-right">
								<div class="text-sm text-purple-300">{course.duration} reading</div>
								<div class="text-xs text-gray-400">{course.lessons} lessons</div>
							</div>
						</div>

						<CardTitle class="text-white transition-colors group-hover:text-purple-200">
							{course.title}
						</CardTitle>
						<CardDescription class="text-purple-300">
							{course.description}
						</CardDescription>
					</CardHeader>

					<CardContent>
						<Button
							class="w-full border-0 bg-gradient-to-r mb-6 from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
							onclick={() => setCurrentPage('lessons')}
						>
							Begin This Journey
						</Button>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Coming Soon Courses -->
		<div class="mt-16">
			<h3 class="mb-8 text-center text-2xl text-gray-200">More Paths Await in the Darkness</h3>
			<div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
				<Card class="border-purple-500/20 bg-black/20 opacity-60">
					<CardHeader>
						<div class="mb-2 flex items-center justify-between">
							<Badge variant="outline" class="border-red-600/30 bg-red-900/50 text-red-300">
								Master
							</Badge>
							<span class="text-xs text-gray-500">Coming Soon</span>
						</div>
						<CardTitle class="text-gray-300">React Rituals</CardTitle>
						<CardDescription class="text-gray-500">
							Conjure powerful user interfaces with component-based magic
						</CardDescription>
					</CardHeader>
				</Card>

				<Card class="border-purple-500/20 bg-black/20 opacity-60">
					<CardHeader>
						<div class="mb-2 flex items-center justify-between">
							<Badge variant="outline" class="border-red-600/30 bg-red-900/50 text-red-300">
								Master
							</Badge>
							<span class="text-xs text-gray-500">Coming Soon</span>
						</div>
						<CardTitle class="text-gray-300">Database Necromancy</CardTitle>
						<CardDescription class="text-gray-500">
							Command vast repositories of knowledge with SQL sorcery
						</CardDescription>
					</CardHeader>
				</Card>

				<Card class="border-purple-500/20 bg-black/20 opacity-60">
					<CardHeader>
						<div class="mb-2 flex items-center justify-between">
							<Badge variant="outline" class="border-red-600/30 bg-red-900/50 text-red-300">
								Master
							</Badge>
							<span class="text-xs text-gray-500">Coming Soon</span>
						</div>
						<CardTitle class="text-gray-300">AI Divination</CardTitle>
						<CardDescription class="text-gray-500">
							Harness machine learning and artificial intelligence
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>

		<div class="mt-12 text-center">
			<Button
				size="lg"
				variant="outline"
				class="border-purple-400 px-8 py-3 text-lg text-purple-200 hover:bg-purple-800/20"
				onclick={() => setCurrentPage('lessons')}
			>
				<BookOpen class="mr-2 h-5 w-5" />
				Start Your Journey
			</Button>
		</div>
	</div>
</section>
