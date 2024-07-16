<script>
    export let user="Guest"
</script>

<p>This component will render only if you're {#if user==="Guest"} not {/if}signed in</p>
<h1>Oh hello {user}!</h1>