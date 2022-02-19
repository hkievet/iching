<script lang="ts">
	import Bar from './Bar.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	import { lookupTrigramByValue, trigramMapping, trigrams } from './store';

	export let trigramIndex = 0;
	// export let topOrBottom: 'top' | 'bottom';
	$: trigram = trigrams[trigramIndex - 1];
	let trigramLines: string;
	$: trigramLines = trigramMapping[trigram];

	// what's the new trigram?
	function onLineChange(lineNumber) {
		const lines = Array.from(trigramLines);
		lines[lineNumber] = lines[lineNumber] === '7' ? '8' : '7';
		const newSequence = lines.join('');
		const newTrigram = lookupTrigramByValue(newSequence);
		dispatch('trigramChange', { newTrigram, newTrigramIndex: trigrams.indexOf(newTrigram) + 1 });
	}
</script>

{#each trigramLines as line, i (trigram + line + i)}
	<Bar
		on:changeLine={({ detail }) => onLineChange(detail.lineNumber)}
		lineType={line === '8' ? 'yang' : 'yin'}
		lineNumber={i}
	/>
{/each}
