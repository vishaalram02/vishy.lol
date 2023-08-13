import { error } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const posts = ['puzzle'];
	if (!posts.includes(url.pathname.substring(6))) throw error(404, 'Not Found');
	return { pathname: url.pathname };
};
