<script lang="ts">
	import {
		BookOpen,
		FileText,
		Lock,
		Check,
		Clock,
		Star,
		Terminal,
		Scroll,
		PenTool,
		ChevronRight,
		Award
	} from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
	import { Badge } from '../ui/badge';
	import { Progress } from '../ui/progress';
	import MarkdownRenderer from '../MarkdownRenderer.svelte';
	import { setCurrentPage } from '$lib/stores/navigation';
	import { userProgress, progressActions, achievements } from '$lib/stores/progress';
	import AchievementToast from '../ui/achievement-toast.svelte';
	import { onMount } from 'svelte';

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
		contentPath?: string;
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

	
	const baseModules: Omit<Module, 'completedLessons'>[] = [
		{
			id: 'foundations',
			title: 'Foundations of Dark Magic',
			description:
				'Master the fundamental incantations and basic spells of programming, including the Python serpent',
			totalLessons: 13,
			estimatedTime: '1 hours reading',
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
					type: 'article',
					contentPath: '/content/variables-basics.md'
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
					type: 'guide',
					contentPath: '/content/functions-guide.md'
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
					type: 'article',
					contentPath: '/content/loops-guide.md'
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
					type: 'challenge',
					contentPath: '/content/conditionals-guide.md'
				},
				{
					id: 'python-serpent',
					title: "Python: The Serpent's First Incantation",
					description: 'Awaken the ancient serpent and learn the fundamental spells of Python',
					duration: '45 min',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/python-awakening.md'
				},
				{
					id: 'data-types',
					title: 'Data Types: The Elements of Creation',
					description:
						'Master the fundamental elements: strings, numbers, booleans, and collections',
					duration: '35 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/data-types.md'
				},
				{
					id: 'lists-arrays',
					title: 'Lists: Containers of Power',
					description: 'Learn to wield arrays and lists to store multiple mystical elements',
					duration: '40 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/lists-arrays.md'
				},
				{
					id: 'dictionaries',
					title: 'Dictionaries: Maps of Knowledge',
					description: 'Create key-value mappings to organize complex magical data',
					duration: '30 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/dictionaries.md'
				},
				{
					id: 'error-handling',
					title: 'Error Handling: Taming the Chaos',
					description: 'Learn to catch and handle exceptions with try-except blocks',
					duration: '25 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/error-handling.md'
				},
				{
					id: 'file-operations',
					title: 'File Operations: Reading Ancient Scrolls',
					description: 'Master the art of reading from and writing to files',
					duration: '35 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/file-operations.md'
				},
				{
					id: 'modules-imports',
					title: 'Modules: Libraries of Power',
					description: 'Learn to import and use external libraries and create your own modules',
					duration: '30 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/modules-imports.md'
				},
				{
					id: 'classes-objects',
					title: 'Classes: Blueprints of Reality',
					description: 'Create your own data types and objects with classes and methods',
					duration: '50 min read',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/classes-objects.md'
				},
				{
					id: 'final-project',
					title: 'Final Project: Your First Spell',
					description: 'Combine all your knowledge to create a complete Python application',
					duration: '90 min',
					difficulty: 'Apprentice',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'challenge',
					contentPath: '/content/python-final-project.md'
				}
			]
		},
		{
			id: 'web-sorcery',
			title: 'Web Sorcery',
			description: 'Weave the fabric of the digital realm with HTML, CSS, and JavaScript',
			totalLessons: 16,
			estimatedTime: '2 hours reading',
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
					type: 'guide',
					contentPath: '/content/html-structure.md'
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
					type: 'article',
					contentPath: '/content/css-styling.md'
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
					type: 'challenge',
					contentPath: '/content/javascript-power.md'
				},
				{
					id: 'dom-manipulation',
					title: 'DOM Manipulation: Reshaping Reality',
					description: 'Learn to dynamically modify web pages with JavaScript',
					duration: '45 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/dom-manipulation.md'
				},
				{
					id: 'events-interactions',
					title: 'Events: Responding to User Magic',
					description: 'Handle clicks, keyboard input, and other user interactions',
					duration: '40 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/events-interactions.md'
				},
				{
					id: 'async-javascript',
					title: 'Async JavaScript: Time Manipulation',
					description: 'Master promises, async/await, and asynchronous programming',
					duration: '55 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/async-javascript.md'
				},
				{
					id: 'fetch-apis',
					title: 'Fetch APIs: Summoning External Data',
					description: 'Learn to communicate with external services and APIs',
					duration: '35 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/fetch-apis.md'
				},
				{
					id: 'responsive-design',
					title: 'Responsive Design: Adaptive Enchantments',
					description: 'Create websites that work perfectly on all devices and screen sizes',
					duration: '50 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/responsive-design.md'
				},
				{
					id: 'css-animations',
					title: 'CSS Animations: Motion Magic',
					description: 'Bring your designs to life with smooth animations and transitions',
					duration: '45 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/css-animations.md'
				},
				{
					id: 'web-accessibility',
					title: 'Web Accessibility: Inclusive Sorcery',
					description: 'Ensure your web magic is accessible to all users',
					duration: '30 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/web-accessibility.md'
				},
				{
					id: 'browser-devtools',
					title: 'Browser DevTools: The Debugging Crystal',
					description: "Master the browser's built-in debugging and development tools",
					duration: '35 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/browser-devtools.md'
				},
				{
					id: 'local-storage',
					title: 'Local Storage: Persistent Memory Spells',
					description: 'Store data in the browser for persistent user experiences',
					duration: '25 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/local-storage.md'
				},
				{
					id: 'form-validation',
					title: 'Form Validation: Guardian Spells',
					description: 'Protect your forms with client-side and server-side validation',
					duration: '40 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/form-validation.md'
				},
				{
					id: 'web-performance',
					title: 'Web Performance: Speed Enchantments',
					description: 'Optimize your websites for lightning-fast loading times',
					duration: '45 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'guide',
					contentPath: '/content/web-performance.md'
				},
				{
					id: 'web-security',
					title: 'Web Security: Protective Wards',
					description: 'Secure your web applications against common vulnerabilities',
					duration: '50 min read',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'article',
					contentPath: '/content/web-security.md'
				},
				{
					id: 'web-final-project',
					title: 'Final Project: Interactive Web Portal',
					description: 'Build a complete interactive web application using all your skills',
					duration: '120 min',
					difficulty: 'Adept',
					isCompleted: false,
					isLocked: false,
					progress: 0,
					type: 'challenge',
					contentPath: '/content/web-final-project.md'
				}
			]
		}
	];

	
	$: modules = baseModules.map((baseModule) => {
		const moduleProgress = $userProgress.modules[baseModule.id];
		return {
			...baseModule,
			completedLessons: moduleProgress?.completedLessons || 0
		} as Module;
	});

	let selectedModule: Module | null = null;
	let selectedLesson: Lesson | null = null;
	let lessonContent: string = '';
	let isLoadingContent: boolean = false;
	let lessonStartTime: number = 0;
	let showAchievement: { title: string; description: string; icon: string } | null = null;
	let previousAchievements: string[] = [];
	let isNavigating: boolean = false;

	
	onMount(() => {
		baseModules.forEach((module) => {
			progressActions.setModuleLessonCount(module.id, module.totalLessons);
		});

		
		previousAchievements = [...$userProgress.achievements];

		
		const handleScroll = () => {
			if (selectedLesson && selectedModule && !selectedLesson.isCompleted && !isNavigating) {
				updateReadingProgress();
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	
	$: if (selectedModule) {
		selectedModule.lessons = selectedModule.lessons.map((lesson) => {
			const lessonProgress = $userProgress.lessons[`${selectedModule!.id}-${lesson.id}`];
			return {
				...lesson,
				isCompleted: lessonProgress?.isCompleted || false,
				progress: lessonProgress?.progress || 0
			};
		});
	}

	
	async function loadLessonContent(lesson: Lesson) {
		if (!lesson.contentPath) return;

		isLoadingContent = true;
		try {
			const response = await fetch(lesson.contentPath);
			if (response.ok) {
				lessonContent = await response.text();
			} else {
				lessonContent = `# ${lesson.title}\n\nContent not found. This lesson is still being crafted in the void...`;
			}
		} catch (error) {
			console.error('Failed to load lesson content:', error);
			lessonContent = `# ${lesson.title}\n\nError loading content. The mystical energies are disrupted...`;
		} finally {
			isLoadingContent = false;
		}
	}

	
	$: if (selectedLesson) {
		
		isNavigating = true;

		
		window.scrollTo({ top: 0, behavior: 'smooth' });

		
		setTimeout(() => {
			loadLessonContent(selectedLesson!);
			lessonStartTime = Date.now();
			
			setTimeout(() => {
				isNavigating = false;
			}, 500);
		}, 300);
	}

	
	function markLessonComplete() {
		if (!selectedLesson || !selectedModule) return;

		const timeSpent = Math.round((Date.now() - lessonStartTime) / 1000 / 60); 
		progressActions.completeLesson(selectedModule.id, selectedLesson.id, timeSpent);

		
		showCompletionMessage();
	}

	
	function goToNextLesson() {
		if (!selectedModule || !selectedLesson) return;

		const currentIndex = selectedModule.lessons.findIndex((l) => l.id === selectedLesson!.id);
		const nextLesson = selectedModule.lessons[currentIndex + 1];

		if (nextLesson && !nextLesson.isLocked) {
			selectedLesson = nextLesson;
			
		}
	}

	
	function showCompletionMessage() {
		
		const newAchievements = $userProgress.achievements.filter(
			(achievement) => !previousAchievements.includes(achievement)
		);

		if (newAchievements.length > 0) {
			const latestAchievement = newAchievements[newAchievements.length - 1];
			showAchievement = achievements[latestAchievement as keyof typeof achievements];
		}

		previousAchievements = [...$userProgress.achievements];
	}

	
	function updateReadingProgress() {
		
		if (!selectedLesson || !selectedModule || selectedLesson.isCompleted || isNavigating) return;

		const scrollPercent = Math.min(
			100,
			Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
		);

		
		const timeSinceLoad = Date.now() - lessonStartTime;
		if (scrollPercent >= 10 && timeSinceLoad > 2000) {
			progressActions.updateLessonProgress(selectedModule.id, selectedLesson.id, scrollPercent);
		}
	}

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case 'Apprentice':
				return 'bg-green-900/50 text-green-300';
			case 'Adept':
				return 'bg-yellow-900/50 text-yellow-300';
			case 'Master':
				return 'bg-red-900/50 text-red-300';
			default:
				return 'bg-gray-900/50 text-gray-300';
		}
	};

	const getTypeIcon = (type: string) => {
		switch (type) {
			case 'article':
				return FileText;
			case 'guide':
				return Scroll;
			case 'challenge':
				return Terminal;
			case 'exercise':
				return PenTool;
			default:
				return BookOpen;
		}
	};
</script>

{#if selectedLesson && selectedModule}
	<div class="min-h-screen pt-20 pb-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-8 lg:grid-cols-4">
				<div class="lg:col-span-3">
					<div class="mb-6">
						<Button
							variant="ghost"
							onclick={() => (selectedLesson = null)}
							class="mb-4 text-gray-400 hover:text-purple-300"
						>
							← Back to {selectedModule.title}
						</Button>
						<div class="mb-4 flex items-center gap-4">
							<Badge class={getDifficultyColor(selectedLesson.difficulty)}>
								{selectedLesson.difficulty}
							</Badge>
							<Badge variant="outline" class="border-purple-600/30 text-purple-300">
								<svelte:component this={getTypeIcon(selectedLesson.type)} class="mr-1 h-4 w-4" />
								<span class="capitalize">{selectedLesson.type}</span>
							</Badge>
							<div class="flex items-center text-sm text-gray-400">
								<Clock class="mr-1 h-4 w-4" />
								{selectedLesson.duration}
							</div>
						</div>
						<h1 class="mb-2 text-3xl text-gray-200">{selectedLesson.title}</h1>
						<p class="text-gray-400">{selectedLesson.description}</p>
					</div>

					<div class="mb-6 rounded-lg border border-purple-600/20 bg-black/40">
						<div class="p-8">
							<div class="mb-8 text-center">
								<div
									class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-purple-600/30 bg-purple-800/50"
								>
									<svelte:component
										this={getTypeIcon(selectedLesson.type)}
										class="h-8 w-8 text-purple-300"
									/>
								</div>
								<h2 class="mb-2 text-2xl text-gray-200">Begin Your Study</h2>
								<p class="text-gray-400">
									{selectedLesson.type === 'challenge'
										? 'Prepare for the coding challenge'
										: 'Immerse yourself in the mystical text'}
								</p>
							</div>

							<div class="mx-auto max-w-4xl">
								<div class="rounded-lg border border-purple-600/10 bg-gray-900/50 p-6">
									{#if isLoadingContent}
										<div class="flex items-center justify-center py-12">
											<div
												class="h-8 w-8 animate-spin rounded-full border-b-2 border-purple-400"
											></div>
											<span class="ml-3 text-gray-400">Loading mystical content...</span>
										</div>
									{:else if lessonContent}
										<div class="prose prose-invert max-w-none">
											<MarkdownRenderer content={lessonContent} />
										</div>
										{#if selectedLesson.type === 'challenge'}
											<div class="mt-6 rounded-lg border border-purple-600/20 bg-purple-900/20 p-4">
												<h4 class="mb-2 text-purple-300">Challenge Mode</h4>
												<p class="text-sm text-gray-400">
													Complete coding exercises and submit your solutions to progress.
												</p>
											</div>
										{/if}
									{:else}
										<div class="py-12 text-center">
											<div
												class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-purple-600/30 bg-purple-800/50"
											>
												<svelte:component
													this={getTypeIcon(selectedLesson.type)}
													class="h-6 w-6 text-purple-300"
												/>
											</div>
											<h3 class="mb-2 text-lg text-purple-300">Content Unavailable</h3>
											<p class="text-gray-400">
												This lesson is still being forged in the mystical realm...
											</p>
										</div>
									{/if}
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
							{#if !selectedLesson.isCompleted}
								<Button
									variant="outline"
									class="border-purple-600/30 text-purple-300 hover:bg-purple-800/20"
									onclick={markLessonComplete}
								>
									Mark Complete
								</Button>
							{:else}
								<Button variant="outline" class="border-green-600/30 text-green-300" disabled>
									<Check class="mr-2 h-4 w-4" />
									Completed
								</Button>
							{/if}
							<Button class="bg-purple-800 text-white hover:bg-purple-700" onclick={goToNextLesson}>
								Next Lesson
								<ChevronRight class="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>

				<div class="lg:col-span-1">
					<div class="sticky top-24">
						<Card class="border-purple-600/20 bg-black/40">
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
											onclick={() => {
												selectedLesson = lesson;
												
											}}
											disabled={lesson.isLocked}
											class="w-full rounded-lg border p-3 text-left transition-colors {selectedLesson.id ===
											lesson.id
												? 'border-purple-600/50 bg-purple-900/30'
												: lesson.isLocked
													? 'cursor-not-allowed border-gray-700/20 bg-gray-900/20 opacity-50'
													: 'border-gray-700/20 bg-gray-900/20 hover:border-purple-600/30'}"
										>
											<div class="mb-1 flex items-center justify-between">
												<span class="truncate text-sm text-gray-300">{lesson.title}</span>
												{#if lesson.isCompleted}
													<Check class="h-4 w-4 flex-shrink-0 text-green-400" />
												{:else if lesson.isLocked}
													<Lock class="h-4 w-4 flex-shrink-0 text-gray-500" />
												{:else}
													<svelte:component
														this={getTypeIcon(lesson.type)}
														class="h-4 w-4 flex-shrink-0 text-gray-400"
													/>
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
	</div>
{:else if selectedModule}
	<div class="min-h-screen pt-20 pb-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8">
				<div class="mb-4 flex items-center gap-4">
					<Button
						variant="ghost"
						onclick={() => setCurrentPage('home')}
						class="text-gray-400 hover:text-purple-300"
					>
						← Back to Home
					</Button>
					<Button
						variant="ghost"
						onclick={() => (selectedModule = null)}
						class="text-gray-400 hover:text-purple-300"
					>
						← Back to Modules
					</Button>
				</div>
				<div class="mb-4 flex items-center gap-4">
					<div class="rounded-lg bg-gradient-to-r p-3 {selectedModule.color}">
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
					<div class="mb-2 flex items-center justify-between">
						<span class="text-sm text-gray-400">Module Progress</span>
						<span class="text-sm text-purple-300">
							{Math.round((selectedModule.completedLessons / selectedModule.totalLessons) * 100)}%
						</span>
					</div>
					<Progress
						value={(selectedModule.completedLessons / selectedModule.totalLessons) * 100}
						class="h-2"
					/>
				</div>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each selectedModule.lessons as lesson}
					<Card
						class="cursor-pointer border-purple-600/20 bg-black/40 transition-colors hover:border-purple-600/40 {lesson.isLocked
							? 'opacity-50'
							: ''}"
						onclick={() => {
							if (!lesson.isLocked) {
								selectedLesson = lesson;
								
							}
						}}
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
									<Check class="h-5 w-5 text-green-400" />
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
										<Progress value={lesson.progress} class="h-2 w-16" />
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
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-6">
				<Button
					variant="ghost"
					onclick={() => setCurrentPage('home')}
					class="text-gray-400 hover:text-purple-300"
				>
					← Back to Home
				</Button>
			</div>
			<div class="mb-12 text-center">
				<div class="mb-4 flex items-center justify-center space-x-2">
					<Star class="h-6 w-6 animate-pulse text-purple-400/60" />
					<span class="text-sm tracking-wider text-gray-400 uppercase">Path of Mastery</span>
					<Star class="h-6 w-6 animate-pulse text-indigo-400/60" />
				</div>
				<h1 class="mb-6 text-4xl lg:text-6xl">
					<span class="block text-gray-200">Choose Your</span>
					<span
						class="block bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
					>
						Dark Path
					</span>
				</h1>
				<p class="mx-auto max-w-3xl text-lg text-gray-400">
					Each module unlocks deeper mysteries of the coding arts. Progress through the shadows,
					from apprentice to master, as you forge your skills in the void.
				</p>
			</div>

			<div class="mb-12">
				<Card class="border-purple-600/30 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
					<CardContent class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<div>
								<h3 class="mb-1 text-xl text-gray-200">Your Journey</h3>
								<p class="text-gray-400">Overall progress across all paths</p>
							</div>
							<div class="flex items-center gap-2">
								<Award class="h-8 w-8 text-purple-400" />
								<div class="text-right">
									<div class="text-2xl text-purple-300">
										{#if $userProgress.currentStreak >= 30}
											Master
										{:else if $userProgress.currentStreak >= 7}
											Adept
										{:else}
											Apprentice
										{/if}
									</div>
									<div class="text-sm text-gray-400">Current Rank</div>
								</div>
							</div>
						</div>
						<div class="grid grid-cols-3 gap-4 text-center">
							<div>
								<div class="text-2xl text-gray-200">
									{Object.values($userProgress.lessons).filter((l) => l.isCompleted).length}
								</div>
								<div class="text-sm text-gray-400">Lessons Completed</div>
							</div>
							<div>
								<div class="text-2xl text-gray-200">{$userProgress.currentStreak}</div>
								<div class="text-sm text-gray-400">Day Streak</div>
							</div>
							<div>
								<div class="text-2xl text-gray-200">
									{Math.round($userProgress.totalTimeSpent / 60)}h
								</div>
								<div class="text-sm text-gray-400">Time Invested</div>
							</div>
						</div>

						{#if $userProgress.achievements.length > 0}
							<div class="mt-4 border-t border-purple-600/20 pt-4">
								<div class="mb-2 text-sm text-gray-400">Recent Achievements</div>
								<div class="flex flex-wrap gap-2">
									{#each $userProgress.achievements.slice(-3) as achievement}
										<Badge variant="outline" class="border-purple-600/30 text-xs text-purple-300">
											{achievement.replace('-', ' ')}
										</Badge>
									{/each}
								</div>
							</div>
						{/if}
					</CardContent>
				</Card>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each modules as module}
					<Card
						class="group cursor-pointer border-purple-600/20 bg-black/40 transition-all duration-300 hover:border-purple-600/40 {!module.isUnlocked
							? 'opacity-60'
							: 'hover:scale-105'}"
						onclick={() => module.isUnlocked && (selectedModule = module)}
					>
						<CardHeader>
							<div class="mb-4 flex items-center justify-between">
								<div
									class="rounded-lg bg-gradient-to-r p-3 {module.color} transition-transform group-hover:scale-110"
								>
									<BookOpen class="h-6 w-6 text-white" />
								</div>
								{#if !module.isUnlocked}
									<Lock class="h-6 w-6 text-gray-500" />
								{/if}
							</div>
							<CardTitle class="text-gray-200 transition-colors group-hover:text-purple-300">
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
										<div class="mb-2 flex items-center justify-between">
											<span class="text-sm text-gray-400">Progress</span>
											<span class="text-sm text-purple-300">
												{Math.round((module.completedLessons / module.totalLessons) * 100)}%
											</span>
										</div>
										<Progress
											value={(module.completedLessons / module.totalLessons) * 100}
											class="h-2"
										/>
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
				<div
					class="rounded-2xl border border-purple-600/20 bg-gradient-to-r from-purple-900/10 to-indigo-900/10 p-8"
				>
					<h3 class="mb-4 text-2xl text-gray-200">More Paths Await in the Darkness</h3>
					<p class="mb-6 text-gray-400">
						Advanced modules in React Sorcery, Database Necromancy, and AI Divination are being
						forged in the void...
					</p>
					<div class="flex gap-2">
						<!-- <Button variant="outline" class="border-purple-600/30 text-purple-300">
							Request New Path
						</Button> -->
						<Button
							variant="outline"
							class="border-red-600/30 text-xs text-red-300"
							onclick={() => progressActions.resetProgress()}
						>
							Reset Progress
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Achievement Toast -->
{#if showAchievement}
	<AchievementToast achievement={showAchievement} on:close={() => (showAchievement = null)} />
{/if}
