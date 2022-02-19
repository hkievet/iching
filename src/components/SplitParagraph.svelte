<script lang="ts">
	export let text = '';
	let lines: string[];
	$: lines = text.split('\n');
</script>

{#each lines as line}
	<p>{line}</p>
{/each}
