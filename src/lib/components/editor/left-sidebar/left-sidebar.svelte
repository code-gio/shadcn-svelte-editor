<script>
	import ComponentsList from './components-list.svelte';
	import { SwatchBook } from 'lucide-svelte';
</script>

<div class="flex w-72 flex-col space-y-6 border-e border-border/80 bg-background/95 p-6 xl:w-80">
	<ul class="space-y-3">
		<li>
			<a
				class="active-link group flex items-center gap-x-2 text-sm font-semibold capitalize text-foreground/70 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-neutral-300"
				href="/theming"
			>
				<SwatchBook class="size-5" strokeWidth={1.5} />
				Theming
			</a>
		</li>
	</ul>
	<ComponentsList />
</div>
