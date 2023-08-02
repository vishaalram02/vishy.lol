<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

<Header />
{#key data.pathname}
	<main in:fly={{ x: -10, duration: 350, delay: 350 }} out:fly={{ y: 10, duration: 350 }}>
		<slot />
	</main>
{/key}
