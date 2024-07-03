<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { label, buttonVariantsStore } from '$lib/stores/button';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Accordion from '$lib/components/ui/accordion';

	function updateVariant(variantType: string, variantName: string, newValue: string) {
		buttonVariantsStore.update((store) => {
			store.variants[variantType][variantName] = newValue;
			return store;
		});
	}

	$: console.log($buttonVariantsStore.variants);
</script>

<div class="space-y-4">
	<div class="flex w-full flex-col gap-1.5">
		<Label for="preview-text">Button Text Preview</Label>
		<Input bind:value={$label} id="preview-text" />
	</div>
	<Accordion.Root>
		{#each Object.entries($buttonVariantsStore.variants) as [variantType, variantOptions]}
			<Accordion.Item value={variantType}>
				<Accordion.Trigger class="capitalize">{variantType}</Accordion.Trigger>
				<Accordion.Content>
					{#each Object.entries(variantOptions) as [variantName, variantClass]}
						<div class="mb-4 flex w-full flex-col gap-1.5 px-2">
							<Label for={variantName} class="capitalize">{variantName}</Label>
							<Input
								value={variantClass}
								on:input={(e) => updateVariant(variantType, variantName, e.target.value)}
								id={variantName}
							/>
						</div>
					{/each}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
