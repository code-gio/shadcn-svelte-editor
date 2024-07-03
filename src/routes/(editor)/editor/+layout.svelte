<script>
	import LeftSidebar from '$lib/components/editor/left-sidebar/left-sidebar.svelte';
	import RightSidebar from '$lib/components/editor/right-sidebar/right-sidebar.svelte';
</script>

<div class="flex h-full w-full gap-4">
	<LeftSidebar />

	<main class="h-full flex-1 space-y-5 p-2 sm:p-5 sm:py-0 md:pt-5">
		<slot />
	</main>
	<RightSidebar />
</div>
