<script lang="ts">
	import { BookOpen, FileText, Lock, CheckCircle, Clock, Star, Code, Terminal, Scroll, PenTool, ChevronRight, Award } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
	import { Badge } from '../ui/badge';
	import { Progress } from '../ui/progress';

	interface Lesson {
		id: string;
		title: string;
		description: string;
		duration: string;
		difficulty: 'Apprentice' | 'Adept' | 'Master';
		isCompleted: boolean;
		isLocked: boolean;
		progress?: number;
		type: 'article' | 'guide' | 'challenge' | 'exercise';
	}

	interface Module {
		id: string;
		title: string;
		description: string;
		totalLessons: number;
		completedLessons: number;
		estimatedTime: string;
		difficulty: 'Apprentice' | 'Adept' | 'Master';
		isUnlocked: boolean;
		lessons: Lesson[];
		color: string;
	}

	const modules: Module[] = [
		{
			id: 'foundations',
			title: 'Foundations of Dark Magic',
			description: 'Master the fundamental incantations and basic spells of programming, including the Python serpent',
			totalLessons: 13,
			completedLessons: 8,
			estimatedTime: '6 hours reading',
			difficulty: 'Apprentice',
			isUnlocked: true,
			color: 'from-purple-900 to-indigo-900',
			lessons: [
				{
					id: 'variables',
					title: 'Variables: Storing Mystical Energy',
					description: 'Learn to capture and store magical essence in containers',
					duration: '25 min read',
					difficulty: 'Apprentice',
					isCompleted: true,
					isLocked: false,
					progress: 100,
					type: 'article'
				},
				{
					id: 'functions',
					title: 'Functions: Crafting Spell Formulas',
					description: 'Create reusable incantations that bend reality to your will',
					duration: '35 min read',
					difficulty: 'Apprentice',
					isCompleted: true,
					isLocked: false,
					progress: 100,
					type: 'guide'
				},
				{
					id: 'loops',
					title: 'Loops: The Eternal Cycle',
					description: 'Harness the power of repetition and infinite iteration',
					duration: '30 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 60,
					type: 'article'
				},
				{
					id: 'conditionals',
					title: 'Conditionals: Paths of Decision',
					description: 'Learn to create branching realities based on mystical conditions',
					duration: '28 min',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'challenge'
				},
				{
					id: 'python-serpent',
					title: 'Python: The Serpent\'s First Incantation',
					description: 'Awaken the ancient serpent and learn the fundamental spells of Python',
					duration: '45 min',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article'
				}
			]
		},
		{
			id: 'web-sorcery',
			title: 'Web Sorcery',
			description: 'Weave the fabric of the digital realm with HTML, CSS, and JavaScript',
			totalLessons: 16,
			completedLessons: 3,
			estimatedTime: '10 hours reading',
			difficulty: 'Adept',
			isUnlocked: true,
			color: 'from-indigo-900 to-blue-900',
			lessons: [
				{
					id: 'html-structure',
					title: 'HTML: The Skeleton of Reality',
					description: 'Build the fundamental structure of digital dimensions',
					duration: '40 min read',
					difficulty: 'Adept',
					isCompleted: true,
					isLocked: false,
					progress: 100,
					type: 'guide'
				},
				{
					id: 'css-styling',
					title: 'CSS: Painting with Shadow and Light',
					description: 'Master the art of visual enchantment and aesthetic magic',
					duration: '45 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 75,
					type: 'article'
				},
				{
					id: 'javascript-power',
					title: 'JavaScript: The Living Spell',
					description: 'Breathe life into static realms with dynamic incantations',
					duration: '50 min',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'challenge'
				}
			]
		},
		{
			id: 'dark-algorithms',
			title: 'Algorithms of the Void',
			description: 'Unlock the forbidden knowledge of computational complexity',
			totalLessons: 20,
			completedLessons: 0,
			estimatedTime: '15 hours reading',
			difficulty: 'Master',
			isUnlocked: false,
			color: 'from-purple-950 to-black',
			lessons: [
				{
					id: 'sorting-chaos',
					title: 'Sorting the Chaos',
					description: 'Bring order to the endless void of unsorted data',
					duration: '60 min',
					difficulty: 'Master',
					isCompleted: false,
					isLocked: true,
					progress: 0,
					type: 'challenge'
				}
			]
		}
	];

	let selectedModule: Module | null = null;
	let selectedLesson: Lesson | null = null;

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case 'Apprentice': return 'bg-green-900/50 text-green-300';
			case 'Adept': return 'bg-yellow-900/50 text-yellow-300';
			case 'Master': return 'bg-red-900/50 text-red-300';
			default: return 'bg-gray-900/50 text-gray-300';
		}
	};

	const getTypeIcon = (type: string) => {
		switch (type) {
			case 'article': return FileText;
			case 'guide': return Scroll;
			case 'challenge': return Terminal;
			case 'exercise': return PenTool;
			default: return BookOpen;
		}
	};
</script>

{#if selectedLesson && selectedModule}
	<div class="min-h-screen pt-20 pb-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid lg:grid-cols-4 gap-8">
				<div class="lg:col-span-3">
					<div class="mb-6">
						<Button variant="ghost" onclick={() => selectedLesson = null} class="text-gray-400 hover:text-purple-300 mb-4">
							← Back to {selectedModule.title}
						</Button>
						<div class="flex items-center gap-4 mb-4">
							<Badge class={getDifficultyColor(selectedLesson.difficulty)}>
								{selectedLesson.difficulty}
							</Badge>
							<Badge variant="outline" class="border-purple-600/30 text-purple-300">
								<svelte:component this={getTypeIcon(selectedLesson.type)} class="h-4 w-4 mr-1" />
								<span class="capitalize">{selectedLesson.type}</span>
							</Badge>
							<div class="flex items-center text-gray-400 text-sm">
								<Clock class="h-4 w-4 mr-1" />
								{selectedLesson.duration}
							</div>
						</div>
						<h1 class="text-3xl text-gray-200 mb-2">{selectedLesson.title}</h1>
						<p class="text-gray-400">{selectedLesson.description}</p>
					</div>

					<div class="bg-black/40 rounded-lg border border-purple-600/20 mb-6">
						<div class="p-8">
							<div class="text-center mb-8">
								<div class="w-20 h-20 bg-purple-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-purple-600/30">
									<svelte:component this={getTypeIcon(selectedLesson.type)} class="h-8 w-8 text-purple-300" />
								</div>
								<h2 class="text-2xl text-gray-200 mb-2">Begin Your Study</h2>
								<p class="text-gray-400">
									{selectedLesson.type === 'challenge' ? 'Prepare for the coding challenge' : 'Immerse yourself in the mystical text'}
								</p>
							</div>

							<div class="max-w-4xl mx-auto">
								<div class="bg-gray-900/50 rounded-lg p-6 border border-purple-600/10">
									<h3 class="text-lg text-purple-300 mb-4">Lesson Preview</h3>
									<div class="space-y-4 text-gray-300">
										<p>In the depths of the shadow realm, variables serve as vessels for containing mystical energy...</p>
										<p class="text-sm text-gray-400 italic">This is where the full lesson content would appear - comprehensive articles, step-by-step guides, and interactive text-based exercises.</p>
										{#if selectedLesson.type === 'challenge'}
											<div class="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-600/20">
												<h4 class="text-purple-300 mb-2">Challenge Mode</h4>
												<p class="text-sm text-gray-400">Complete coding exercises and submit your solutions to progress.</p>
											</div>
										{/if}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							{#if selectedLesson.progress && selectedLesson.progress > 0}
								<div class="flex items-center gap-2">
									<span class="text-sm text-gray-400">Progress:</span>
									<div class="w-32">
										<Progress value={selectedLesson.progress} class="h-2" />
									</div>
									<span class="text-sm text-purple-300">{selectedLesson.progress}%</span>
								</div>
							{/if}
						</div>
						<div class="flex gap-2">
							<Button variant="outline" class="border-purple-600/30 text-purple-300">
								Mark Complete
							</Button>
							<Button class="bg-purple-800 hover:bg-purple-700 text-white">
								Next Lesson
							</Button>
						</div>
					</div>
				</div>

				<div class="lg:col-span-1">
					<Card class="bg-black/40 border-purple-600/20">
						<CardHeader>
							<CardTitle class="text-purple-300">{selectedModule.title}</CardTitle>
							<CardDescription class="text-gray-400">
								{selectedModule.completedLessons} of {selectedModule.totalLessons} lessons completed
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div class="space-y-3">
								{#each selectedModule.lessons as lesson}
									<button
										onclick={() => selectedLesson = lesson}
										disabled={lesson.isLocked}
										class="w-full text-left p-3 rounded-lg border transition-colors {selectedLesson.id === lesson.id
											? 'bg-purple-900/30 border-purple-600/50'
											: lesson.isLocked
											? 'bg-gray-900/20 border-gray-700/20 opacity-50 cursor-not-allowed'
											: 'bg-gray-900/20 border-gray-700/20 hover:border-purple-600/30'}"
									>
										<div class="flex items-center justify-between mb-1">
											<span class="text-sm text-gray-300 truncate">{lesson.title}</span>
											{#if lesson.isCompleted}
												<CheckCircle class="h-4 w-4 text-green-400 flex-shrink-0" />
											{:else if lesson.isLocked}
												<Lock class="h-4 w-4 text-gray-500 flex-shrink-0" />
											{:else}
												<svelte:component this={getTypeIcon(lesson.type)} class="h-4 w-4 text-gray-400 flex-shrink-0" />
											{/if}
										</div>
										{#if lesson.progress && lesson.progress > 0 && lesson.progress < 100}
											<Progress value={lesson.progress} class="h-1" />
										{/if}
									</button>
								{/each}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	</div>
{:else if selectedModule}
	<div class="min-h-screen pt-20 pb-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="mb-8">
				<Button variant="ghost" onclick={() => selectedModule = null} class="text-gray-400 hover:text-purple-300 mb-4">
					← Back to Modules
				</Button>
				<div class="flex items-center gap-4 mb-4">
					<div class="p-3 rounded-lg bg-gradient-to-r {selectedModule.color}">
						<BookOpen class="h-6 w-6 text-white" />
					</div>
					<div>
						<h1 class="text-3xl text-gray-200">{selectedModule.title}</h1>
						<p class="text-gray-400">{selectedModule.description}</p>
					</div>
				</div>
				<div class="flex items-center gap-6 text-sm text-gray-400">
					<div class="flex items-center gap-2">
						<BookOpen class="h-4 w-4" />
						{selectedModule.totalLessons} lessons
					</div>
					<div class="flex items-center gap-2">
						<Clock class="h-4 w-4" />
						{selectedModule.estimatedTime}
					</div>
					<Badge class={getDifficultyColor(selectedModule.difficulty)}>
						{selectedModule.difficulty}
					</Badge>
				</div>
				<div class="mt-4">
					<div class="flex items-center justify-between mb-2">
						<span class="text-sm text-gray-400">Module Progress</span>
						<span class="text-sm text-purple-300">
							{Math.round((selectedModule.completedLessons / selectedModule.totalLessons) * 100)}%
						</span>
					</div>
					<Progress value={(selectedModule.completedLessons / selectedModule.totalLessons) * 100} class="h-2" />
				</div>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each selectedModule.lessons as lesson}
					<Card
						class="bg-black/40 border-purple-600/20 hover:border-purple-600/40 transition-colors cursor-pointer {lesson.isLocked ? 'opacity-50' : ''}"
						onclick={() => !lesson.isLocked && (selectedLesson = lesson)}
					>
						<CardHeader>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2">
									<svelte:component this={getTypeIcon(lesson.type)} class="h-4 w-4 text-gray-400" />
									<Badge class={getDifficultyColor(lesson.difficulty)} variant="outline">
										{lesson.difficulty}
									</Badge>
								</div>
								{#if lesson.isCompleted}
									<CheckCircle class="h-5 w-5 text-green-400" />
								{:else if lesson.isLocked}
									<Lock class="h-5 w-5 text-gray-500" />
								{:else}
									<ChevronRight class="h-5 w-5 text-gray-400" />
								{/if}
							</div>
							<CardTitle class="text-gray-200">{lesson.title}</CardTitle>
							<CardDescription class="text-gray-400">{lesson.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2 text-sm text-gray-400">
									<Clock class="h-4 w-4" />
									{lesson.duration}
								</div>
								{#if lesson.progress && lesson.progress > 0 && lesson.progress < 100}
									<div class="flex items-center gap-2">
										<Progress value={lesson.progress} class="w-16 h-2" />
										<span class="text-xs text-purple-300">{lesson.progress}%</span>
									</div>
								{/if}
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="min-h-screen pt-20 pb-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<div class="flex items-center justify-center space-x-2 mb-4">
					<Star class="h-6 w-6 text-purple-400/60 animate-pulse" />
					<span class="text-gray-400 tracking-wider uppercase text-sm">Path of Mastery</span>
					<Star class="h-6 w-6 text-indigo-400/60 animate-pulse" />
				</div>
				<h1 class="text-4xl lg:text-6xl mb-6">
					<span class="block text-gray-200">Choose Your</span>
					<span class="block bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
						Dark Path
					</span>
				</h1>
				<p class="text-lg text-gray-400 max-w-3xl mx-auto">
					Each module unlocks deeper mysteries of the coding arts. Progress through the shadows, from apprentice to master, as you forge your skills in the void.
				</p>
			</div>

			<div class="mb-12">
				<Card class="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-purple-600/30">
					<CardContent class="p-6">
						<div class="flex items-center justify-between mb-4">
							<div>
								<h3 class="text-xl text-gray-200 mb-1">Your Journey</h3>
								<p class="text-gray-400">Overall progress across all paths</p>
							</div>
							<div class="flex items-center gap-2">
								<Award class="h-8 w-8 text-purple-400" />
								<div class="text-right">
									<div class="text-2xl text-purple-300">Apprentice</div>
									<div class="text-sm text-gray-400">Current Rank</div>
								</div>
							</div>
						</div>
						<div class="grid grid-cols-3 gap-4 text-center">
							<div>
								<div class="text-2xl text-gray-200">11</div>
								<div class="text-sm text-gray-400">Lessons Completed</div>
							</div>
							<div>
								<div class="text-2xl text-gray-200">3</div>
								<div class="text-sm text-gray-400">Modules Unlocked</div>
							</div>
							<div>
								<div class="text-2xl text-gray-200">23h</div>
								<div class="text-sm text-gray-400">Time Invested</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each modules as module}
					<Card
						class="bg-black/40 border-purple-600/20 hover:border-purple-600/40 transition-all duration-300 cursor-pointer group {!module.isUnlocked ? 'opacity-60' : 'hover:scale-105'}"
						onclick={() => module.isUnlocked && (selectedModule = module)}
					>
						<CardHeader>
							<div class="flex items-center justify-between mb-4">
								<div class="p-3 rounded-lg bg-gradient-to-r {module.color} group-hover:scale-110 transition-transform">
									<BookOpen class="h-6 w-6 text-white" />
								</div>
								{#if !module.isUnlocked}
									<Lock class="h-6 w-6 text-gray-500" />
								{/if}
							</div>
							<CardTitle class="text-gray-200 group-hover:text-purple-300 transition-colors">
								{module.title}
							</CardTitle>
							<CardDescription class="text-gray-400">
								{module.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div class="space-y-4">
								<div class="flex items-center justify-between text-sm">
									<Badge class={getDifficultyColor(module.difficulty)}>
										{module.difficulty}
									</Badge>
									<div class="text-gray-400">
										{module.completedLessons}/{module.totalLessons} lessons
									</div>
								</div>
								{#if module.isUnlocked}
									<div>
										<div class="flex items-center justify-between mb-2">
											<span class="text-sm text-gray-400">Progress</span>
											<span class="text-sm text-purple-300">
												{Math.round((module.completedLessons / module.totalLessons) * 100)}%
											</span>
										</div>
										<Progress value={(module.completedLessons / module.totalLessons) * 100} class="h-2" />
									</div>
								{/if}
								<div class="flex items-center justify-between text-sm text-gray-400">
									<div class="flex items-center gap-1">
										<Clock class="h-4 w-4" />
										{module.estimatedTime}
									</div>
									<div class="flex items-center gap-1">
										<BookOpen class="h-4 w-4" />
										{module.totalLessons} lessons
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>

			<div class="mt-16 text-center">
				<div class="bg-gradient-to-r from-purple-900/10 to-indigo-900/10 rounded-2xl border border-purple-600/20 p-8">
					<h3 class="text-2xl text-gray-200 mb-4">More Paths Await in the Darkness</h3>
					<p class="text-gray-400 mb-6">
						Advanced modules in React Sorcery, Database Necromancy, and AI Divination are being forged in the void...
					</p>
					<Button variant="outline" class="border-purple-600/30 text-purple-300">
						Request New Path
					</Button>
				</div>
			</div>
		</div>
	</div>
{/if}