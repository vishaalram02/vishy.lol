<script>
	import Project from './Project.svelte';

	const images = import.meta.glob('$lib/images/projects/*.png', { eager: true });
	const projects = [
		{
			name: 'blendai',
			emoji: '🖌️',
			tags: ['React/TS', 'Flask', 'Pytorch'],
			header: 'A text-based image editor! (HTN 2022)',
			description:
				"Utilize the blended-diffusion model to selectively edit an image with a prompt. The model is deployed as a serverless webhook on the cloud using <a target='_blank' href='https://beam.cloud'>Beam</a>.",
			link: 'https://blendai.vishy.lol'
		},
		{
			name: 'vishy.lol',
			emoji: '🐧',
			tags: ['Sveltekit/JS', 'TailwindCSS'],
			header: 'This website !!',
			description: 'Woah where am I? My lightweight personal website powered by Svelte! No unnecessary packages and plugins needed :0',
			link: 'https://vishy.lol'
		},
		{
			name: 'multimine',
			emoji: '💣',
			tags: ['React/JS', 'Express', 'MongoDB', 'SocketIO'],
			header: 'Minesweeper live !! (MIT Weblab 2022)',
			description:
				"The first webapp I've worked on : ) A realtime multiplayer minesweeper app that allows you to create game lobbies and race against your friends on the same board.",
			link: 'https://multimine.vishy.lol'
		},
		{
			name: 'bakery',
			emoji: '🧑‍🍳',
			tags: ['Express'],
			header: "Vishy's cookies? (HackMIT Puzzle 2023)",
			description:
				"A simple cross site scripting (XSS) challenge. Exploit a vulnerability in image upload to acquire Vishy's cookies! Submissions are automatically verified with a headless chromium browser.",
			link: 'https://bakery.vishy.lol'
		}
	];
</script>

<section class="layout-md">
	{#each projects as data (data)}
		<Project {data} image={images[`/src/lib/images/projects/${data.name}.png`]?.default} />
	{/each}
</section>
