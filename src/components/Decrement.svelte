<script lang="ts">
	import { count } from './store';

	function increment() {
		count.update((pre) => pre - 1);
	}
</script>

<button type="button" on:click={increment}>-</button>
