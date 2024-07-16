<script>
    function triggerAlert(){
        alert("clicked")
    }
</script>

<div on:click|once={triggerAlert}>
    Click me
</div>