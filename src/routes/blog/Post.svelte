<script>
	export let data;
	export let image;
</script>

<a href="/blog/{data.name}">
	<div
		class="grid grid-cols-3 sm:grid-cols-1 group bg-amber-50 hover:bg-amber-100 transition-transform hover:scale-105 p-4 rounded-lg transition-colors"
	>
		<div class="pr-5 col-span-2">
			<a href="/blog/{data.name}">
				<p
					class="group text-2xl font-medium font-overflow rounded-md hover:bg-amber-100 px-3 transition-colors"
				>
					{data.emoji + ' ' + data.header}
					<span class="font-sans text-neutral-500 group-hover:text-black transition-colors">↗</span>
				</p>
			</a>
			<p class="text-md text-neutral-500">{data.date}</p>
			<div class="flex space-x-1 mt-1 mb-2">
				{#each data.tags as tag (tag)}
					<div class="bg-amber-100 group-hover:bg-amber-200 text-sm rounded-xl px-2 py-px">
						{tag}
					</div>
				{/each}
			</div>
			<p class="text-lg text-neutral-500 mb-2">{@html data.description}</p>
		</div>
		<div class="p-5">
			<img class="rounded-md" alt={data.name} src={image} />
		</div>
	</div>
</a>
