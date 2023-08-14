<script>
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/night-owl.css';

	export let data;

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
