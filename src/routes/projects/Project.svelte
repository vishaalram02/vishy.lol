<script>
	export let data;
	export let image;
</script>

<div class="grid grid-cols-2 my-5">
	<div class="pr-5">
		<a href={data.link} target="_blank">
			<p class="group text-2xl font-medium font-overflow rounded-xl hover:bg-amber-100 px-3">
				{data.emoji + ' ' + data.name}
				<span class="font-sans text-neutral-500 group-hover:text-black">↗</span>
			</p>
		</a>
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
