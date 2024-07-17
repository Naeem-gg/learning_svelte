<script lang="ts">
	export let numbers: number[] = [0, 1];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}
	// function rmLastNumber() {
	// 	let lastElement = delete numbers[numbers.length - 1];
	// 	numbers = numbers;
	// 	}
	$: result = numbers.reduce(
		(total, currentValue) => {
			return total + currentValue;
		},

		0
	);
</script>

<div>
	<p class="mb-3 dark:text-gray-900">{numbers.join('+')} = {result}</p>
	<button
		on:click={addNumber}
		class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
		>Add Number</button
	>
	<!-- <button
		on:click={rmLastNumber}
		class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
		>Remove last number</button
	> -->
</div>
