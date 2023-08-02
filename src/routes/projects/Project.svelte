<script>
	export let data;
	export let image;
</script>

<div class="grid grid-cols-2 my-5">
	<div class="pr-5">
		<p class="text-2xl font-medium font-overflow">{data.emoji + ' ' + data.name}</p>
		<div class="flex space-x-1 mt-1 mb-2">
			{#each data.tags as tag (tag)}
				<div class="bg-amber-100 text-xs rounded-xl px-2 py-px">{tag}</div>
			{/each}
		</div>
		<p class="text-weight-400 mb-2">{data.header}</p>
		<p class="text-sm text-neutral-500">{@html data.description}</p>
	</div>
	<div class="p-5">
		<img class="rounded-md" alt={data.name} src={image} />
	</div>
</div>
