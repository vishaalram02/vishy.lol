<script>
	import Project from './Project.svelte';

	const projects = [
		{
			name: 'decafe',
			emoji: '☕',
			tags: ['NextJS/TS', 'Flask'],
			header: 'My decaf compiler IR visualizer!',
			description:
				'A control flow graph visualizer for my 6.110 compiler project! Dynamically view the effect of optimizations on the intermediate representation and run the code in a virtual environment.',
			link: 'https://decafe.vishy.lol',
			source: 'https://github.com/vishaalram02/decafe'
		},
		{
			name: 'juzi',
			emoji: '🍊',
			tags: ['SvelteKit/TS', 'Redis', 'Vercel'],
			header: 'An LLM Chinese sentence parser!',
			description:
				'A serverless webapp designed to help you break down Chinese sentences into grammatical components. Each component in the syntax tree presents its own meaning in context to help you understand the overall meaning and structure of the sentence.',
			link: 'https://juzi.vishy.lol',
			source: 'https://github.com/vishaalram02/juzi'
		},
		{
			name: 'pigeon',
			emoji: '🐦',
			tags: ['React', 'Flask', 'Redis'],
			header: 'A RAG Email Assistant! (HackHarvard 2023)',
			description:
				'A fully functional email client built to automate email workflows. Procures relevant documents from a Redis vector database to generate responses. Built with and currently maintained by the HackMIT dev team.',
			link: 'https://pigeon.hackmit.org',
			source: 'https://github.com/techx/pigeon'
		},
		{
			name: 'qstack',
			emoji: '✔️',
			tags: ['React/TS', 'Flask', 'Auth0'],
			header: 'A hackathon helpqueue platform!',
			description:
				'A ticket submission platform made for HackMIT 2023. Allows hackers to create tickets with technical issues which mentors can claim and provide assistance.',
			link: 'https://help.hackmit.org',
			source: 'https://github.com/techx/qstack'
		},
		{
			name: 'vishy.lol',
			emoji: '🐧',
			tags: ['SvelteKit/JS', 'TailwindCSS'],
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
				'My first webapp : ) A realtime multiplayer minesweeper app that allows you to create game lobbies and race against your friends on the same board.',
			link: 'https://multimine.vishy.lol',
			source: 'https://github.com/vishaalram02/multimine'
		}
	];
</script>

<section class="layout-md">
	<p class="text-2xl mb-5">Here are some projects I've worked on for fun or at hackathons! 💻</p>
	<hr />
	{#each projects as data (data)}
		<Project {data} />
		<hr />
	{/each}
</section>
