<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/night-owl.css';
	import python from 'highlight.js/lib/languages/python';
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import c from 'highlight.js/lib/languages/c';

	export let data;

	hljs.registerLanguage('python', python);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('c', c);

	marked.setOptions({
		highlight: function (code, lang) {
			return hljs.highlight(lang, code).value;
		}
	});
	const url = `/static/posts/${data.pathname.substring(6)}.md?raw`;
	let post;

	onMount(async () => {
		post = marked.parse((await import(/* @vite-ignore */ url)).default);
	});
</script>

<section class="layout-md">
	<p class="prose prose-img:rounded-xl">
		{@html post}
	</p>
</section>
