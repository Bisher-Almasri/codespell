<script lang="ts">
	export let value: number = 0;
	export let max: number = 100;
	
	let className = '';
	export { className as class };
	
	$: percentage = Math.min(Math.max((value / max) * 100, 0), 100);
</script>

<div class="relative w-full bg-gray-800 rounded-full overflow-hidden {className}">
	<div 
		class="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 ease-out rounded-full"
		style="width: {percentage}%"
	></div>
</div>