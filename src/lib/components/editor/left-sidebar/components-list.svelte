<script>
	import { components } from '$lib/components/editor/config';
	import { selectedComponent } from '$lib/stores/editor';
</script>

<ul>
	<li>
		<h5 class="mb-3 text-sm font-semibold text-foreground/80">Base Components</h5>
		<ul class="ms-0.5 space-y-2 border-s-2 border-foreground/10">
			<li>
				{#each components as { name }}
					<button
						class="-ms-px block border-s-2 border-transparent py-1 ps-4 text-sm capitalize text-foreground/70 hover:border-foreground/40 hover:text-foreground/90 {$selectedComponent ===
						name
							? 'border-blue-400 text-blue-700'
							: ''}"
						on:click={() => selectedComponent.set(name)}>{name}</button
					>
				{/each}
			</li>
		</ul>
	</li>
</ul>
