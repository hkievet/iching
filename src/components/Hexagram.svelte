<script lang="ts">
	import type { Hexagram } from 'src/types';
	import SplitParagraph from './SplitParagraph.svelte';
	import { lookupHexagramByTrigrams } from './store';
	import Trigram from './Trigram.svelte';

	export let hexagram: Hexagram;
	let lines = [...hexagram.lines];
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
		// todo change the hex and the route without doing routing... save the reload...
		// window.location.href = '/hex/' + newHex.number;
		hexagram = newHex;
		lines = hexagram.lines;
		lines.reverse();
		window.history.pushState('', '', `/hex/${newHex.number}`);
	}
</script>

<div class="spaced	">
	<div class="top-section">
		<div class="flex justify-evenly text-xl">
			<p class="flex-grow">{hexagram.number}</p>
			<p class="text-3xl flex-grow text-center">{hexagram.name.english}</p>
			<p class="text-2xl flex-grow text-right">{hexagram.name.chinese}</p>
		</div>
		<div class="md:flex mb-10">
			<div class="mb-5 md:mb-0">
				<h2 class="font-bold">Judgement</h2>
				<SplitParagraph text={hexagram.judgement} />
			</div>
			<div class="md:ml-10">
				<h2 class="font-bold">Image</h2>
				<SplitParagraph text={hexagram.images} />
			</div>
		</div>
		<div class="mt-5 lg:flex m-0 p-0">
			<div class="mb-10">
				<Trigram
					trigramIndex={hexagram.trigramPair.above}
					on:trigramChange={({ detail }) => onTrigramChange(detail, 'top')}
				/>
				<Trigram
					trigramIndex={hexagram.trigramPair.below}
					on:trigramChange={({ detail }) => onTrigramChange(detail, 'bottom')}
				/>
			</div>
			<div class="lg:ml-10">
				{#each lines as line, i}
					<p>{6 - i}. {line.meaning}</p>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	div.spaced {
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
