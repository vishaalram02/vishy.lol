<script>
	import Project from './Project.svelte';

	const projects = [
		{
			name: 'qstack',
			emoji: '✔️',
			tags: ['React/TS', 'Flask', 'Auth0'],
			header: 'A hackathon helpqueue platform!',
			description:
				'A ticket submission platform made for HackMIT 2023. Allows hackers to create tickets with technical issues which mentors can claim and provide assistance.',
			link: 'https://qstack.hackmit.org',
			source: 'https://github.com/techx/qstack'
		},
		{
			name: 'vishy.lol',
			emoji: '🐧',
			tags: ['Sveltekit/JS', 'TailwindCSS'],
			header: 'This website ‼️',
			description:
				'Woah where am I? My lightweight personal website powered by Svelte! No unnecessary packages and plugins needed :0',
			link: 'https://vishy.lol',
			source: 'https://github.com/vishaalram02/vishy.lol'
		},
		{
			name: 'blendai',
			emoji: '🖌️',
			tags: ['React/TS', 'Flask', 'Pytorch'],
			header: 'A text-based image editor! (HTN 2022)',
			description:
				"Utilize the blended-diffusion model to selectively edit an image with a prompt. Deployed as a serverless webhook on the cloud using <a target='_blank' href='https://beam.cloud'>Beam</a>.",
			link: 'https://blendai-95173c1b3ebe.herokuapp.com/',
			source: 'https://github.com/vishaalram02/blendai'
		},
		{
			name: 'multimine',
			emoji: '💣',
			tags: ['React/JS', 'Express', 'MongoDB', 'SocketIO'],
			header: 'Minesweeper live !! (MIT Weblab 2022)',
			description:
				"The first webapp I've worked on : ) A realtime multiplayer minesweeper app that allows you to create game lobbies and race against your friends on the same board.",
			link: 'https://multimine.vishy.lol',
			source: 'https://github.com/vishaalram02/multimine'
		},
		{
			name: 'bakery',
			emoji: '🧑‍🍳',
			tags: ['Express'],
			header: "Vishy's cookies? (HackMIT Puzzle 2023)",
			description:
				"A simple cross site scripting (XSS) challenge. Exploit a vulnerability in image upload to acquire Vishy's cookies! Submissions are automatically verified with a headless chromium browser.",
			link: 'https://bakery.hackxgpt.com/u/vishaalram02_7abee6',
			source: 'https://github.com/vishaalram02/bakery'
		}
	];
</script>

<section class="layout-md">
	<hr />
	{#each projects as data (data)}
		<Project {data} />
		<hr />
	{/each}
</section>
