<script>
	import { getData } from './getData';

	let promise = getData();
	function handleClick() {
		promise = getData();
	}
</script>

<div class="h-[100vh] w-full flex justify-center items-center flex-col bg-black">
	<button
		on:click={handleClick}
		class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
		>New Quote</button
	><br />
	<div>
		{#await promise}
			<p
				class="mb-3 w-[50vw] text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3"
			>
				waiting...
			</p>
		{:then result}
			<p
				class="mb-3 w-[50vw] text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start"
			>
				{JSON.stringify(result)}
			</p>
		{:catch error}
			<p>{JSON.stringify(error)}</p>
		{/await}
	</div>
</div>
