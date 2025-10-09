<script lang="ts">
	import {
		BookOpen,
		Zap,
		Shield,
		Sparkles,
		Code,
		Database,
		Palette,
		Globe,
	} from 'lucide-svelte';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
	import { Button } from '../ui/button';
	import { Badge } from '../ui/badge';

	const courses = [
		{
			title: 'JavaScript Enchantments',
			description:
				'Master the ancient art of web sorcery with JavaScript spells that bring websites to life.',
			icon: Code,
			level: 'Apprentice',
			duration: '8 weeks',
			color: 'from-yellow-500 to-orange-500',
			image:
				'https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		},
		{
			title: 'React Rituals',
			description:
				'Conjure powerful user interfaces with the mystical component-based magic of React.',
			icon: Sparkles,
			level: 'Adept',
			duration: '10 weeks',
			color: 'from-blue-500 to-cyan-500',
			image:
				'https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		},
		{
			title: 'Python Prophecies',
			description:
				"Unlock the secrets of data divination and automation with Python's powerful incantations.",
			icon: Zap,
			level: 'Apprentice',
			duration: '12 weeks',
			color: 'from-green-500 to-emerald-500',
			image:
				'https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		},
		{
			title: 'Database Divination',
			description:
				'Command vast repositories of knowledge with SQL sorcery and database enchantments.',
			icon: Database,
			level: 'Adept',
			duration: '6 weeks',
			color: 'from-purple-500 to-pink-500',
			image:
				'https://images.unsplash.com/photo-1547931587-2841fef9d915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		},
		{
			title: 'CSS Charms',
			description:
				'Weave beautiful visual spells and create stunning layouts with advanced styling magic.',
			icon: Palette,
			level: 'Apprentice',
			duration: '4 weeks',
			color: 'from-pink-500 to-rose-500',
			image:
				'https://images.unsplash.com/photo-1547931587-2841fef9d915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		},
		{
			title: 'Full-Stack Mastery',
			description:
				'Become an archmage of web development by mastering both frontend and backend sorcery.',
			icon: Shield,
			level: 'Master',
			duration: '16 weeks',
			color: 'from-indigo-500 to-purple-500',
			image:
				'https://images.unsplash.com/photo-1547931587-2841fef9d915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
		}
	];

	const levelColors: Record<string, string> = {
		Apprentice: 'bg-green-600',
		Adept: 'bg-blue-600',
		Master: 'bg-purple-600'
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

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each courses as course, index}
				<Card
					class="group border-purple-500/30 bg-black/40 transition-all duration-300 hover:scale-105 hover:transform hover:border-purple-400/50"
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
							<Badge class={`${levelColors[course.level]} text-white`}>
								{course.level}
							</Badge>
							<span class="text-sm text-purple-300">{course.duration}</span>
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
							class="w-full border-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
						>
							Begin This Journey
						</Button>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<Button
				size="lg"
				variant="outline"
				class="border-purple-400 px-8 py-3 text-lg text-purple-200 hover:bg-purple-800/20"
			>
				<Globe class="mr-2 h-5 w-5" />
				Explore All Spellbooks
			</Button>
		</div>
	</div>
</section>
