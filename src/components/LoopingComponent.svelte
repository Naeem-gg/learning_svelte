<script lang="ts">
    import {randEmail,randColor} from "@ngneat/falso"
    let emails:string[] = []
    for(let i = 0;i<20;i++){
        emails.push(randEmail().concat(`           ${i}`))
        emails = emails
    }
    function removeEmail(){
        emails = emails.splice(1)
    }
</script>



<div class="p-4 w-full flex flex-wrap justify-between">
    <button on:click={removeEmail} class="font-bold font-serif bg-black text-white hover:bg-slate-600 p-4 m-4">Remove last</button>
    
    {#each emails as currentEmail (crypto.randomUUID())}
    <div class="p-1 border border-red-600 m-1">

        <p>{currentEmail}</p>
    </div>
    {/each}
</div>
