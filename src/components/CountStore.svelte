<script lang="ts">
	import Decrement from './Decrement.svelte';
	import Increment from './Increment.svelte';
	import Reset from './Reset.svelte';
	import { count } from './store';

	let insiderCount: number;
	count.subscribe((currentValue) => (insiderCount = currentValue));
</script>

<h1>{insiderCount}</h1>
<Increment />
<Decrement />
<Reset />
