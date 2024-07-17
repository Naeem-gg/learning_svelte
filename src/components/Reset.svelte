<script lang="ts">
	import { count } from './store';

	function increment() {
		count.set(0);
	}
</script>

<button type="button" on:click={increment}>Reset</button>
