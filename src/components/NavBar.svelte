<script>
	import { onMount } from 'svelte';

	let links = [
		{ href: '/', text: 'Home' },
		{ href: '/list', text: 'List' }
	];
	let pathname;
	onMount(() => {
		pathname = window.location.pathname;
	});
</script>

<nav>
	<h1>I Ching Explorer</h1>
	{#each links as link}
		{#if link.show === undefined || link.show}
			<a href={link.href} class:current={link.href === pathname}>{link.text}</a>
		{/if}
	{/each}
</nav>

<style lang="postcss">
	nav {
		@apply bg-slate-200 p-2 flex gap-x-4 mb-3;
	}
	a {
		@apply text-blue-900 font-bold;
	}
	a.current {
		@apply text-emerald-900;
	}
	a:hover {
		@apply underline underline-offset-4;
	}
	h1 {
		@apply font-mono mr-4;
	}
</style>
