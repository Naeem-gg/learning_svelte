<script>
    let pointer = {x:0, y:0}
    // function logPointers(){
    //     pointer.x = e.clientX
    //     pointer.y = e.clientY
    // }
</script>


<div class="w-full h-[100vh] flex flex-col justify-center items-center" on:pointermove={e=>{pointer.x = e.clientX;pointer.y=e.clientY}}>
    <div class="text-2xl p-4 m-4">x:{pointer.x}</div>
    <div class="text-2xl p-4 m-4">y:{pointer.y}</div>
</div>