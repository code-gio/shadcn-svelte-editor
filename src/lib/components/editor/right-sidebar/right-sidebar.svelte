<script>
	import { selectedComponent } from '$lib/stores/editor';
	import { components } from '$lib/components/editor/config';
	$: currentComponent = components.filter(({ name }) => name === $selectedComponent);
</script>

<div class="flex w-72 flex-col border-s border-border/80 bg-background/95 p-6 pb-4 xl:w-80">
	<h2 class="mb-3 text-lg font-semibold text-foreground/80">Component Setting</h2>
	{#if $selectedComponent}
		<svelte:component this={currentComponent[0].config} />
	{/if}
</div>
