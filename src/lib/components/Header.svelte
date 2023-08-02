<script>
	import { page } from '$app/stores';

	const links = [
		{ name: 'projects 🧑‍💻', href: '/projects' },
		{ name: 'classes 📚', href: '/classes' },
		{ name: 'blog ✏️', href: '/blog' },
	];
	const socials = [
		{ icon: 'envelope', href: 'mailto:vishr@mit.edu' },
		{ icon: 'github', href: 'https://github.com/vishaalram02' },
		{ icon: 'book', href: 'https://www.goodreads.com/user/show/135129343-vishaal-ram' },
		{ icon: 'spotify', href: 'https://open.spotify.com/user/b1xck719vtjwh2saj01gxftku' }
	];
	let pageTitle = null;
	$: {
		const link = links.find(({ href }) => href === $page.url.pathname);
		if (link) {
			pageTitle = link.name.charAt(0).toUpperCase() + link.name.slice(1);
		} else {
			pageTitle = null;
		}
	}
</script>

<header class="layout-md" data-sveltekit-noscroll>
	<a href="/" class="text-4xl">hi, i'm vishy 🐧</a>
	<div class="flex justify-between items-start my-4">
		<nav>
			{#each links as link (link)}
				<a
					href={link.href}
					class="hover:text-black transition-colors"
					class:text-black={$page.url.pathname === link.href}
				>
					{link.name}
				</a>
			{/each}
		</nav>
		<div class="social">
			{#each socials as social (social)}
				<a href={social.href} target="_blank">
					<i
						id={social.icon}
						class="fa fa-{social.icon} hover:text-black transition-colors hover:cursor-pointer"
					/>
				</a>
			{/each}
		</div>
	</div>
</header>

<style lang="postcss">
	nav {
		@apply flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5;
	}
	.social {
		@apply flex items-start text-neutral-500 space-x-4 text-lg;
	}
</style>
