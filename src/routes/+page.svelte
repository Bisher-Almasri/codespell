<script lang="ts">
	import CoursesSelection from '$lib/components/pages/coursesSelection.svelte';
	import Features from '$lib/components/pages/features.svelte';
	import Hero from '$lib/components/pages/hero.svelte';
	import { setCurrentPage } from '$lib/stores/navigation';
</script>

<Hero />
<CoursesSelection />
<Features />