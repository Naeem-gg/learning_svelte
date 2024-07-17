<script lang="ts">
	import Decrement from './Decrement.svelte';
	import Increment from './Increment.svelte';
	import Reset from './Reset.svelte';
	import { count } from './store';
</script>

<h1>{$count}</h1>
<Increment />
<Decrement />
<Reset />
