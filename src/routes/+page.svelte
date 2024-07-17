<script lang="ts">
	import EventForwarding from '../components/EventForwarding.svelte';
	function calculate(e){
		alert("The button inside DispatchEvent Component is clicked")
		alert(e.detail.text)
		console.log(e)
	}
	</script>

<EventForwarding on:naeem={calculate}/>
