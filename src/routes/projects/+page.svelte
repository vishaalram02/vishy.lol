<script>
	import Project from './Project.svelte';

	const images = import.meta.glob('$lib/images/projects/*.png', { eager: true });
	const projects = [
		{
			name: 'blendai',
			header: 'A text-based image editor! (HTN 2022)',
			description:
				"Utilize the blended-diffusion model to selectively edit an image with a prompt. The model is deployed as a serverless webhook on the cloud using <a target='_blank' href='https://beam.cloud'>Beam</a>.",
			link: 'https://multimine.herokuapp.com'
		},
		{
			name: 'multimine',
			header: 'Minesweeper live !! (MIT Weblab 2022)',
			description:
				'A realtime multiplayer minesweeper app that allows you to create game lobbies and race against your friends on the same board.',
			link: 'https://vishy.lol'
		},
		{
			name: 'bakery',
			header: "Vishy's cookies? (HackMIT Puzzle 2023)",
			description:
				"A simple cross site scripting (XSS) challenge. Exploit a vulnerability in image upload to acquire Vishy's cookies! Submissions are automatically verified with a headless chromium browser."
		}
	];
</script>

<section class="layout-md my-10">
	{#each projects as data (data)}
		<Project {data} image={images[`/src/lib/images/projects/${data.name}.png`]?.default} />
	{/each}
</section>
