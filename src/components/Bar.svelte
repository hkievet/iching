<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let lineType: 'yin' | 'yang' | undefined;
	export let lineNumber: number; // zero based index of the line.
	let hovering: boolean;
	function onClick() {
		// selectedLine.set(lineNumber);
		dispatch('changeLine', { lineNumber });
	}
</script>

<div
	on:click={onClick}
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
	class="hover:cursor-pointer"
>
	{#if (lineType === 'yang' && !hovering) || (lineType == 'yin' && hovering)}
		<div class="w-64 flex-row flex h-10 mb-2">
			<div class="bg-black basis-1 grow" />
		</div>
		<!-- {:else if lineType === 'yin' && !hovering} -->
	{:else}
		<div class="w-64 flex-row flex h-10 mb-2">
			<div class="bg-black grow" />
			<div class="bg-transparent grow" />
			<div class="bg-black grow" />
		</div>
	{/if}
</div>
