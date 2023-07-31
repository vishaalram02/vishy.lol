<script>
	import { page } from '$app/stores';

	const links = [
		{ name: 'projects', href: '/projects' },
		{ name: 'blog', href: '/blog' },
		{ name: 'classes', href: '/classes' }
	];
	const socials = [
		{ icon: 'envelope', color: 'red-500' },
		{ icon: 'github', color: 'blue-500' },
		{ icon: 'book', color: 'emerald-400' }
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
	<div class="mb-3">
		<a href="/" class="text-4xl">hi, i'm vishy</a>
	</div>
	<div class="flex justify-between items-start">
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
				<i
					id={social.icon}
					class="fa fa-{social.icon} text-lg hover:text-purple-500 transition-colors hover:cursor-pointer"
				/>
			{/each}
		</div>
	</div>
</header>

<style lang="postcss">
	nav {
		@apply flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5;
	}
	.social {
		@apply flex items-start space-x-4;
	}
</style>
