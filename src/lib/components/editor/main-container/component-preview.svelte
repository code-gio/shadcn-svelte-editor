<script lang="ts">
	import { componentStore } from '$lib/stores/editor';
	import Button from '$lib/components/ui/button/button.svelte';
	export let props;
	export let variantName;
</script>

{#if $componentStore === 'button'}
	<Button {...props}>{variantName}</Button>
{/if}
