<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Vishaal Ram</title>
	<meta name="description" content="Vishaal Ram's personal website!" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css"
		integrity="sha512-ioRJH7yXnyX+7fXTQEKPULWkMn3CqMcapK0NNtCN8q//sW7ZeVFcbMJ9RvX99TwDg6P8rAH2IqUSt2TLab4Xmw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-C9RRXFBHB4"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-C9RRXFBHB4');
	</script>
</svelte:head>

<Header />
{#key data.pathname}
	<main in:fly={{ x: -10, duration: 350, delay: 350 }} out:fly={{ y: 10, duration: 350 }}>
		<slot />
	</main>
{/key}
