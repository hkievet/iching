<script lang="ts">
	import type { Hexagram } from 'src/types';

	export let hexagram: Hexagram;
</script>

<a class="p-2 m-4 text-center w-64 shadow-sm hover:bg-slate-200" href={`/hex/${hexagram.number}`}>
	<p>{hexagram.number}</p>
	<p>{hexagram.name.chinese}</p>
	<p>{hexagram.name.pinyin}</p>
	<p>{hexagram.name.english}</p>
</a>
