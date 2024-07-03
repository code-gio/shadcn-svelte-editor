<script>
	import Sidebar from '$lib/components/app/theming/sidebar.svelte';
</script>

<div class="flex h-full w-full gap-4">
	<Sidebar />

	<main class="h-full flex-1 space-y-5 p-2 sm:p-5 sm:py-0 md:pt-5">
		<slot />
	</main>
</div>
