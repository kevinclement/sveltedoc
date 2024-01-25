import { error } from '@sveltejs/kit';

export function load({ params }) {
	// if (!post) throw error(404);
	return {
		realm: params.realm,
		region: params.region,
		character: params.character,
	};
}
