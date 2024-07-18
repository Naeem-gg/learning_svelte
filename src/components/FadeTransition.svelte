<script lang="ts">
	import { fade } from 'svelte/transition';

	let isChecked = false;
</script>

<h1>Fade Transition example:</h1>
<input type="checkbox" bind:checked={isChecked} />
{#if !isChecked}
	<p transition:fade>I'll fade away...</p>
{/if}
