<script lang="ts">
	import Hero from '$lib/components/pages/hero.svelte';

	let currentPage: 'home' | 'lessons' = 'home';

	function setCurrentPage(page: 'home' | 'lessons') {
		currentPage = page;
	}
</script>

<Hero {setCurrentPage} />
