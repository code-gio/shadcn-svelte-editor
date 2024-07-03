<script lang="ts">
	import { components } from '$lib/components/editor/config';
	import { componentStore, variantStore } from '$lib/stores/editor';

	function selectComponent(component: any) {
		componentStore.set(component.name);
		variantStore.set(component.defaultConfig);
	}
</script>

<ul>
	<li>
		<h5 class="mb-3 text-sm font-semibold text-foreground/80">Base Components</h5>
		<ul class="ms-0.5 space-y-2 border-s-2 border-foreground/10">
			<li>
				{#each components as component}
					<button
						class="-ms-px block border-s-2 border-transparent py-1 ps-4 text-sm capitalize text-foreground/70 hover:border-foreground/40 hover:text-foreground/90 {$componentStore ===
						component.name
							? 'border-blue-400 text-blue-700'
							: ''}"
						on:click={() => selectComponent(component)}>{component.name}</button
					>
				{/each}
			</li>
		</ul>
	</li>
</ul>
