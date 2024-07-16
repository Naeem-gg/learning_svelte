<script lang="ts">
    import {randEmail,randColor} from "@ngneat/falso"
    let emails:string[] = []
    for(let i = 0;i<200;i++){
        emails.push(randEmail())
        emails = emails
    }
</script>



<div class="p-4 w-full flex flex-wrap justify-between">
    {#each emails as currentEmail}
    <p class="p-1 border border-red-600 m-1">{currentEmail}</p>
    {/each}
</div>
