<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { label } from '$lib/stores/button';
	import { buttonVariantsStore } from '$lib/stores/button';

	function getProps(variantType: string, variantName: string) {
		return { [variantType]: variantName };
	}

	let buttons = {};

	$: {
		if ($buttonVariantsStore.variants) {
			Object.keys(buttons).forEach((key) => {
				if (buttons[key]) {
					buttons[key].rerender(); // Custom method to force rerender, if applicable
				}
			});
		}
	}
</script>

<div class="space-y-4">
	{#if $buttonVariantsStore.variants}
		{#each Object.entries($buttonVariantsStore.variants) as [variantType, variantOptions]}
			<div>
				<div class="flex flex-col items-start">
					<h2 class="mb-3 text-lg font-semibold capitalize text-foreground/80">{variantType}</h2>
					<div class="flex items-center gap-4">
						{#each Object.entries(variantOptions) as [variantName, variantClass]}
							{#key variantClass}
								<Button {...getProps(variantType, variantName)}>{variantName}</Button>
							{/key}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	{/if}
</div>
