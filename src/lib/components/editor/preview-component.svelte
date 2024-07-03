<script>
	import { selectedComponent } from '$lib/stores/editor';
	import { components } from '$lib/components/editor/config';
	$: currentComponent = components.filter(({ name }) => name === $selectedComponent);
</script>

{#if $selectedComponent}
	<svelte:component this={currentComponent[0].preview} />
{/if}
