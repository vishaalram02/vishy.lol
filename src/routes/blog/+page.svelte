<script>
	import Post from './Post.svelte';

	const images = import.meta.glob('$lib/images/blog/*.png', { eager: true });
	const Posts = [
		{
			name: 'puzzle',
			emoji: '🎈',
			header: 'dev notes: hackmit puzzle 2023',
			date: 'Aug 12, 2023',
			tags: ['CTF Writeup', 'HackMIT'],
			description:
				"Can we save Rurl from the HackXAI headquarters? My experience running HackMIT's annual admissions CTF challenge, and what I learned along the way!"
		}
	];
</script>

<section class="layout-md">
	<hr />
	{#each Posts as data (data)}
		<Post {data} image={images[`/src/lib/images/blog/${data.name}.png`]?.default} />
		<hr />
	{/each}
</section>
