<script>
	import { createEventDispatcher } from 'svelte';
	let event = createEventDispatcher();
	function dispatchEvent() {
		event('naeem', { text: 'Mocha' });
	}
</script>

<h1>Dispatch Events</h1>
<button on:click={dispatchEvent}> Click me </button>
