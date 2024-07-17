<script>
	let count = 0;
	$: doubleCount = count * 2;

	$: if (count >= 10) {
		// console.log(count)
		// console.log(doubleCount)
		alert(count);
		count = 0;
	}
	// let string = false
	// let message = "count cannot be negative"
	const increment = () => {
		count += 1;
	};
	const decrement = () => {
		// if(count <=0)
		// string = true
		count -= 1;
	};
</script>

<div class="h-[100vh] w-full flex flex-col justify-center items-center p-4">
	<h1 class="text-6xl font-extrabold">Counter: {count}</h1>
	<h1 class="text-6xl font-extrabold">Reactive doubleCounter: {doubleCount}</h1>

	<div>
		<button
			on:click={increment}
			class="w-16 h-16 text-4xl font-bold font-serif bg-black text-white hover:bg-slate-600 p-4 m-4"
			>+</button
		>

		<button
			on:click={decrement}
			class="w-16 h-16 text-4xl font-bold font-serif bg-black text-white hover:bg-slate-600 p-4 m-4"
			>-</button
		>
		<!-- {string && message} -->
	</div>
</div>
