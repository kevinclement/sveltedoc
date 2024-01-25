import { error } from '@sveltejs/kit';
import { posts } from './data.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug === "safety");

	// if (!post) throw error(404);
	return {
		realm: params.realm,
		region: params.region,
		character: params.character + " " + post?.title,
	};
}
