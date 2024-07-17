<script>
	import DispatchEvent from '../components/DispatchEvent.svelte';
	function calculate(){
		alert("The button inside DispatchEvent Component is clicked")
	}
	</script>

<DispatchEvent on:naeem={calculate}/>
