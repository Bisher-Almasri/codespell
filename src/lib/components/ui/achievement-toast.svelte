<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { Award, X } from 'lucide-svelte';

	export let achievement: {
		title: string;
		description: string;
		icon: string;
	};
	export let visible = true;

	const dispatch = createEventDispatcher();

	function close() {
		visible = false;
		dispatch('close');
	}

	// Auto-close after 5 seconds
	setTimeout(close, 5000);
</script>

{#if visible}
	<div 
		class="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-900 to-indigo-900 border border-purple-600/50 rounded-lg p-4 shadow-2xl max-w-sm"
		transition:fly={{ x: 300, duration: 300 }}
	>
		<div class="flex items-start gap-3">
			<div class="flex-shrink-0">
				<div class="w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center">
					<Award class="h-5 w-5 text-purple-300" />
				</div>
			</div>
			<div class="flex-1 min-w-0">
				<div class="flex items-center justify-between mb-1">
					<h4 class="text-sm font-semibold text-purple-300">Achievement Unlocked!</h4>
					<button 
						onclick={close}
						class="text-gray-400 hover:text-gray-300 transition-colors"
					>
						<X class="h-4 w-4" />
					</button>
				</div>
				<p class="text-sm text-gray-200 font-medium">{achievement.title}</p>
				<p class="text-xs text-gray-400 mt-1">{achievement.description}</p>
			</div>
			<div class="text-2xl">{achievement.icon}</div>
		</div>
	</div>
{/if}