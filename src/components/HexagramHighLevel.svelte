<script lang="ts">
	import type { Hexagram } from 'src/types';
	// import CharacterStroke from './CharacterStroke.svelte';

	export let hexagram: Hexagram;
</script>

<a class="p-2 m-4 text-center w-64 shadow-sm hover:bg-slate-200" href={`/hex/${hexagram.number}`}>
	<p>{hexagram.number}</p>
	<!-- <CharacterStroke character={hexagram.name.chinese} /> -->
	<p class="text-2xl">{hexagram.name.chinese}</p>
	<p>{hexagram.name.pinyin}</p>
	<p>{hexagram.name.english}</p>
</a>
