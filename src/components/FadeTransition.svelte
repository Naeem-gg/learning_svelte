<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let isChecked = false;
</script>

<h1>Fade Transition example:</h1>
<input type="checkbox" bind:checked={isChecked} />
{#if !isChecked}
	<p transition:fly={{ duration: 1000, y: 200 }}>I'll fade away...</p>
{/if}
