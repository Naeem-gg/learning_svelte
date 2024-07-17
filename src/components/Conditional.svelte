<script>
	export let user = 'Guest';
	export let secret = 'shhhhhh';
</script>

<p>
	This component will render only if you're {#if user === 'Guest'}
		not
	{/if}signed in
</p>
<h1>Oh hello {user}!</h1>

{#if user === 'Guest'}
	<p>I wont tell you the secret</p>
{:else if user === 'Naeemgg'}
	<p>The secret is {secret}</p>
{:else}
	<p>The secret is {secret}</p>
{/if}
