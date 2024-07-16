<script>
    import Profile from "../components/Profile.svelte";
    let name = "Naeem Navjivan";
    let src = "";
</script>

<div>
    <h1 class="text-3xl">Greetings <span class="font-bold">{name.toUpperCase()}</span>!</h1>
    <img src={src} alt="coding">
</div>
<Profile/>


<style>
    div{
        height: 20vh;
        width: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
    }
</style>