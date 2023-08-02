<script>
    export let data;
    export let image;
</script>

<div class="grid grid-cols-2 my-5">
    <div class="pr-5">
        <p class="text-2xl font-bold">{data.name}</p>
        <p class="text-weight-400 mb-2">{data.header}</p>
        <p class="text-sm text-neutral-500">{@html data.description}</p>
        
    </div>
    <div class="p-5">
        <img alt="{data.name}" src={image}/>
    </div>
</div>
