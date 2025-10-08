<script lang="ts">
	import { BookOpen, Sparkles, Wand2 } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
</script>

<header
	class="fixed top-0 z-50 w-full border-b border-purple-500/20 bg-background/80 backdrop-blur-md"
>
	<div class="container mx-auto flex items-center justify-between px-6 py-4">
		<div class="flex items-center gap-2">
			<div class="relative">
				<Sparkles class="h-8 w-8 text-purple-500" />
			</div>
			<span
				class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xl font-medium text-transparent"
			>
				CodeSpell Academy</span
			>
		</div>

		<nav class="hidden items-center gap-8 md:flex">
			<a href="#courses" class="text-muted-foreground transition-colors hover:text-purple-400">
				Spellbooks
			</a>
			<a href="#practice" class="text-muted-foreground transition-colors hover:text-purple-400">
				Practice Arena
			</a>
			<a href="#community" class="text-muted-foreground transition-colors hover:text-purple-400">
				Wizard Council
			</a>
			<a href="#about" class="text-muted-foreground transition-colors hover:text-purple-400">
				About
			</a>
		</nav>
		<div class="flex items-center gap-4">
			<Button variant="ghost" class="text-purple-400 hover:text-purple-300">Sign In</Button>
			<Button
				class="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
			>
				<BookOpen class="mr-2 h-4 w-4" />
				Begin Quest
			</Button>
		</div>
	</div>
</header>
