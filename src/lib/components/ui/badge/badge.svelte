<script lang="ts">
	export let variant: 'default' | 'outline' = 'default';
	
	let className = '';
	export { className as class };
	
	$: baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors';
	$: variantClasses = variant === 'outline' 
		? 'border border-current bg-transparent' 
		: 'bg-current text-white';
</script>

<span class="{baseClasses} {variantClasses} {className}">
	<slot />
</span>