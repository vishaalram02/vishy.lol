<script>
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import python from 'highlight.js/lib/languages/python';
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import c from 'highlight.js/lib/languages/c';
	import plaintext from 'highlight.js/lib/languages/plaintext';
	import 'highlight.js/styles/night-owl.css';

	export let data;

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('c', c);
	hljs.registerLanguage('plaintext', plaintext);

	const marked = new Marked(
		markedHighlight({
			langPrefix: 'language-',
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		})
	);

	const posts = import.meta.glob('$lib/posts/*.md', { eager: true, as: 'raw' });
	let post = marked.parse(posts[`/src/lib/posts/${data.post}.md`]);
</script>

<section class="layout-md">
	<p class="prose prose-img:rounded-xl">
		{@html post}
	</p>
</section>
