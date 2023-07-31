<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>
</svelte:head>

<Header />
<slot />
