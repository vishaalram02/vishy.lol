import { error } from '@sveltejs/kit';

export const load = async ({ url, params }) => {
	const posts = ['puzzle'];
	const post = params['post'];
	if (!posts.includes(post)) throw error(404, 'Not Found');
	return { post: post };
};
