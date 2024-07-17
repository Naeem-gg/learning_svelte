<script lang="ts">
	import { randCity, randIp } from '@ngneat/falso';
	let cities: { id: string; name: string }[] = [];
	for (let i = 0; i < 10; i++) {
		cities[i] = { id: randIp(), name: randCity() };
	}
	let selected = '';
	let answer: string;
	function handleSubmit() {
		if (selected.startsWith(answer)) alert('Correct answer: ');
		else alert('Wrong answer');
	}
</script>

<h1>Select Any city and write its first 3 letters</h1>
<div>
	<select bind:value={selected}>
		{#each cities as city (city.id)}
			<option value={city.name}>{city.name}</option>
		{/each}
	</select>
	<input type="text" bind:value={answer} class="border-4" />
	<button type="button" on:click={handleSubmit} class="rounded-lg p-2 m-2 bg-black text-white"
		>Submit</button
	>
</div>
