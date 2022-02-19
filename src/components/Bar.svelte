<script lang="ts">
	export let line = '';
	export let lineType: 'yin' | 'yang' | undefined;
</script>

{#if lineType === 'yang'}
	<div>-- {line}</div>
{:else if lineType === 'yin'}
	<div>- - {line}</div>
{/if}
