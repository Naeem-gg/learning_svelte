<script>
	function triggerAlert() {
		alert('clicked');
	}
</script>

<button type="button" on:click|once={triggerAlert}> Click me </button>
