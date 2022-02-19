<script lang="ts">
	import type { Hexagram } from 'src/types';
	import { lookupHexagramByTrigrams } from './store';
	import Trigram from './Trigram.svelte';

	export let hexagram: Hexagram;
	let lines = hexagram.lines;
	lines.reverse();

	function onTrigramChange(detail, aboveOrBelow: 'top' | 'bottom') {
		let newHex;
		if (aboveOrBelow === 'top') {
			newHex = lookupHexagramByTrigrams({
				above: detail.newTrigramIndex,
				below: hexagram.trigramPair.below
			});
		} else if (aboveOrBelow === 'bottom') {
			newHex = lookupHexagramByTrigrams({
				above: hexagram.trigramPair.above,
				below: detail.newTrigramIndex
			});
		}
		console.log(newHex);
		window.location.href = '/hex/' + newHex.number;
	}
</script>

<div>
	<div class="top-section">
		<div class="flex justify-evenly text-xl">
			<p>{hexagram.number}</p>
			<p class="text-3xl">{hexagram.name.english}</p>
			<p class="text-2xl">{hexagram.name.chinese}</p>
		</div>
		<h2>Judgement</h2>
		<p>{hexagram.judgement}</p>
		<h2>Image</h2>
		<p>{hexagram.images}</p>
		<div class="mt-5 flex flex-wrap">
			<div>
				<Trigram
					trigramIndex={hexagram.trigramPair.above}
					on:trigramChange={({ detail }) => onTrigramChange(detail, 'top')}
				/>
				<Trigram
					trigramIndex={hexagram.trigramPair.below}
					on:trigramChange={({ detail }) => onTrigramChange(detail, 'bottom')}
				/>
			</div>
			<div>
				{#each lines as line, i}
					<p>{6 - i}. {line.meaning}</p>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	div {
		@apply p-5 m-5;
	}
	p:not(:last-of-type) {
		@apply mb-5;
	}
	a {
		@apply p-5 border-solid border-2 rounded-sm;
	}
	a:hover {
		@apply bg-slate-200;
	}
</style>
