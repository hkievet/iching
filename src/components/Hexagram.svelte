<script lang="typescript">
	import type { Hexagram } from 'src/types';
	import Trigram from './Trigram.svelte';

	export let hexagram: Hexagram;
</script>

<div>
	<div class="top-section">
		<p>{hexagram.number}</p>
		<p>{hexagram.name.english}</p>
		<p>{hexagram.name.chinese}</p>
		{#each hexagram.lines as line}
			<p>{line.meaning}</p>
		{/each}
		<p>{hexagram.judgement}</p>
		<p>{hexagram.images}</p>
		<Trigram trigramIndex={hexagram.trigramPair.above} />
		<Trigram trigramIndex={hexagram.trigramPair.below} />
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
