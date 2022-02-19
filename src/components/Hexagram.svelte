<script lang="ts">
	import type { Hexagram } from 'src/types';
	import Trigram from './Trigram.svelte';

	export let hexagram: Hexagram;
</script>

<div>
	<div class="top-section">
		<p>{hexagram.number}</p>
		<p>{hexagram.name.english}</p>
		<p class="text-2xl">{hexagram.name.chinese}</p>
		{#each hexagram.lines as line, i}
			<p>{i + 1}. {line.meaning}</p>
		{/each}
		<h2>Judgement</h2>
		<p>{hexagram.judgement}</p>
		<h2>Image</h2>
		<p>{hexagram.images}</p>
		<div class="mt-5">
			<Trigram trigramIndex={hexagram.trigramPair.above} />
			<Trigram trigramIndex={hexagram.trigramPair.below} />
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
