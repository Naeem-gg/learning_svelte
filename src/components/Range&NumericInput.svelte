<script>
	let first = 0;
	let second = 0;
</script>

<div class="flex">
	<div class="w-[25vw] h-[25vh] bg-blue-500 flex justify-around items-center m-4 p-4">
		<input type="range" bind:value={first} min="0" max="10" />
		<input type="number" bind:value={first} min="0" max="10" />
	</div>

	<div class="w-[25vw] h-[25vh] bg-blue-500 flex justify-around items-center m-4 p-4">
		<input type="range" bind:value={second} min="0" max="10" />
		<input type="number" bind:value={second} min="0" max="10" />
	</div>
</div>
