<script lang="ts">
	import HexagramHighLevel from '../components/HexagramHighLevel.svelte';

	import hexagrams from '../data/data.json';
</script>

<div class="flex flex-wrap m-auto justify-center">
	{#each hexagrams as hexagram (hexagram.name.english)}
		<HexagramHighLevel {hexagram} />
	{/each}
</div>
