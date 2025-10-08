<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { currentPage, setCurrentPage } from '$lib/stores/navigation';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar currentPage={$currentPage} {setCurrentPage} />
{@render children?.()}
<Footer />
