<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input';
	import * as Accordion from '$lib/components/ui/accordion';
	import { variantStore } from '$lib/stores/editor';
	import * as Tabs from '$lib/components/ui/tabs';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	type UpdateVariantFunction = (variantType: string, variantName: string, newValue: string) => void;

	function debounce(func: UpdateVariantFunction, delay: number): UpdateVariantFunction {
		let timeout: ReturnType<typeof setTimeout>;
		return function (this: unknown, ...args: [string, string, string]) {
			const context = this;
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(context, args), delay);
		};
	}

	// Update variant function with TypeScript annotations
	function updateVariant(variantType: string, variantName: string, newValue: string): void {
		variantStore.update((store: any) => {
			store.variants[variantType][variantName] = newValue;
			return store;
		});
		console.log($variantStore);
	}

	// Debounced update function
	const debouncedUpdateVariant: UpdateVariantFunction = debounce(updateVariant, 300); // 300ms delay

	function handleInput(variantType: string, variantName: string, e: Event): void {
		const newValue = (e.target as HTMLInputElement).value;
		debouncedUpdateVariant(variantType, variantName, newValue);
	}
</script>

{#if $variantStore && $variantStore.variants}
	<Tabs.Root value="variant">
		<Tabs.List>
			<Tabs.Trigger value="variant">Options</Tabs.Trigger>

			<Tabs.Trigger value="base">Base</Tabs.Trigger>
		</Tabs.List>
		<Separator class="mb-4 mt-2" />
		<Tabs.Content value="variant">
			<Accordion.Root>
				{#each Object.entries($variantStore.variants) as [variantType, variantOptions]}
					<Accordion.Item value={variantType}>
						<Accordion.Trigger class="capitalize">{variantType}</Accordion.Trigger>
						<Accordion.Content>
							{#each Object.entries(variantOptions) as [variantName, variantClass]}
								<div class="mb-4 flex w-full flex-col gap-1.5 px-2">
									<Label for={variantName} class="capitalize">{variantName}</Label>
									<Input
										value={variantClass}
										on:input={(e) => handleInput(variantType, variantName, e)}
										id={variantName}
									/>
								</div>
							{/each}
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root></Tabs.Content
		>
		<Tabs.Content value="base">
			<div class="mb-4 flex w-full flex-col gap-1.5">
				<Label for="base" class="capitalize">Base</Label>

				<Input value={$variantStore.base} id="base" />
			</div>
			{#each Object.entries($variantStore.defaultVariants) as [variantType, variantOptions]}
				<div class="mb-4 flex w-full flex-col gap-1.5">
					<Label for={variantType} class="capitalize">Default {variantType}</Label>
					<Input value={variantOptions} id={variantType} />
				</div>
			{/each}
		</Tabs.Content>
	</Tabs.Root>
{/if}
