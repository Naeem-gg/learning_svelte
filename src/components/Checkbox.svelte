<script>
	let isChecked = false;
</script>

<div class="w-1/2 h-[50vh] bg-blue-200">
	<div class="flex items-center mb-4">
		<input
			id="default-checkbox"
			type="checkbox"
			bind:checked={isChecked}
			class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
		/>
		<label for="default-checkbox" class="ms-2 text-sm font-medium"
			>{#if isChecked}Thank you for Subscribing{:else}Please check this box to subscribe.{/if}</label
		>
	</div>
	<button
		on:click={() => (isChecked = true)}
		class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
		>{#if !isChecked}Subscribe{:else}Subscribed!!{/if}</button
	>
</div>
