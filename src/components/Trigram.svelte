<script>
	import Bar from './Bar.svelte';

	export let trigramIndex;
	let trigrams = ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'];
	let trigramMapping = {
		'☰': '888',
		'☱': '788',
		'☲': '878',
		'☳': '778',
		'☴': '887',
		'☵': '787',
		'☶': '877',
		'☷': '777'
	};
</script>

<!-- <p>{trigrams[trigramIndex - 1]}</p> -->

{#each trigramMapping[trigrams[trigramIndex - 1]] as line}
	<Bar lineType={line === '8' ? 'yang' : 'yin'} />
{/each}
