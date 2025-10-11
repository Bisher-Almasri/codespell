<script lang="ts">
	import CoursesSelection from '$lib/components/pages/coursesSelection.svelte';
	import Features from '$lib/components/pages/features.svelte';
	import Hero from '$lib/components/pages/hero.svelte';
	import Lessons from '$lib/components/pages/lessons.svelte';
	import { currentPage } from '$lib/stores/navigation';
</script>

{#if $currentPage === 'lessons'}
	<Lessons />
{:else}
	<Hero />
	<CoursesSelection />
	<Features />
{/if}
