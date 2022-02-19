<script lang="ts">
	import { page } from '$app/stores';
	import Hexagram from '../../components/Hexagram.svelte';
	import { getHexByNumber } from '../../helpers/getHexByNumber';
	const numb = Number.parseInt($page.params.number);
	const hex = getHexByNumber(numb);
</script>

<Hexagram hexagram={hex} />
