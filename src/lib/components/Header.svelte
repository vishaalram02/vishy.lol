<script>
	import { page } from '$app/stores';

	const links = [
		{ name: 'projects 🧑‍💻', href: '/projects' },
		{ name: 'classes 📚', href: '/classes' },
		{ name: 'blog ✏️', href: '/blog' }
	];
	const socials = [
		{ icon: 'envelope', color: 'text-sky-400', brand: false, href: 'mailto:vishr@mit.edu' },
		{
			icon: 'github',
			color: 'text-gray-900',
			brand: true,
			href: 'https://github.com/vishaalram02'
		},
		{
			icon: 'book',
			color: 'text-rose-400',
			brand: false,
			href: 'https://www.goodreads.com/user/show/135129343-vishaal-ram'
		},
		{
			icon: 'spotify',
			color: 'text-green-400',
			brand: true,
			href: 'https://open.spotify.com/user/b1xck719vtjwh2saj01gxftku'
		},
		{
			icon: 'strava',
			color: 'text-orange-400',
			brand: true,
			href: 'https://www.strava.com/athletes/107723971'
		}
	];
</script>

<header class="layout-md mb-10" data-sveltekit-noscroll>
	<a href="/" class="text-4xl font-overfont">hi, i'm vishy 🐧</a>
	<div class="flex justify-between items-start my-4 md:flex-col md:space-y-3">
		<nav class="flex text-neutral-500 justify-end space-x-6 text-lg py-0.5">
			{#each links as link (link)}
				<a
					href={link.href}
					class="hover:text-black transition-colors font-overfont"
					class:text-black={$page.url.pathname === link.href}
				>
					{link.name}
				</a>
			{/each}
		</nav>
		<div class="flex items-start text-neutral-500 space-x-4">
			{#each socials as social (social)}
				<a href={social.href} target="_blank">
					<i
						class="fa{social.brand
							? 'b'
							: ''} fa-{social.icon} text-neutral-500 hover:text-black transition-colors hover:cursor-pointer"
					/>
				</a>
			{/each}
		</div>
	</div>
</header>
