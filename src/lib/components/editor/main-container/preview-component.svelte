<script lang="ts">
	import { componentStore, variantStore } from '$lib/stores/editor';
	import Button from '$lib/components/ui/button/button.svelte';

	function getProps(variantType: string, variantName: string) {
		return { [variantType]: variantName };
	}
</script>

{#if $componentStore}
	{#if $variantStore}
		{#key $variantStore}
			<div class="space-y-4">
				{#if $variantStore.variants}
					{#each Object.entries($variantStore.variants) as [variantType, variantOptions]}
						<div>
							<div class="flex flex-col items-start">
								<h2 class="mb-3 text-lg font-semibold capitalize text-foreground/80">
									{variantType}
								</h2>
								<div class="flex items-center gap-4">
									{#each Object.entries(variantOptions) as [variantName]}
										<Button {...getProps(variantType, variantName)}>{variantName}</Button>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		{/key}
	{/if}
{/if}
