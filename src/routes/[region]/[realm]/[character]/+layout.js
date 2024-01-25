import { posts } from './data.js';

/** @type {import('./$types').LayoutLoad} */
export function load({params}) {
    const post = posts.find((post) => post.slug === "safety");

	/*
		// login
		https://simplearmory.com/ 

		// overview
		https://simplearmory.com/#/us/proudmoore/marko

		// achievements
		https://simplearmory.com/#/us/proudmoore/marko/achievements/character
		https://simplearmory.com/#/us/proudmoore/marko/achievements/quests
		https://simplearmory.com/#/us/proudmoore/marko/achievements/exploration
		https://simplearmory.com/#/us/proudmoore/marko/achievements/pvp
		https://simplearmory.com/#/us/proudmoore/marko/achievements/professions
		https://simplearmory.com/#/us/proudmoore/marko/achievements/reputation
		https://simplearmory.com/#/us/proudmoore/marko/achievements/events
		https://simplearmory.com/#/us/proudmoore/marko/achievements/pets
		https://simplearmory.com/#/us/proudmoore/marko/achievements/collections
		https://simplearmory.com/#/us/proudmoore/marko/achievements/expansions
		https://simplearmory.com/#/us/proudmoore/marko/achievements/legacy
		https://simplearmory.com/#/us/proudmoore/marko/achievements/feats

		// collectables
		https://simplearmory.com/#/us/proudmoore/marko/collectable/mounts
		https://simplearmory.com/#/us/proudmoore/marko/collectable/companions
		https://simplearmory.com/#/us/proudmoore/marko/collectable/battlepets
		https://simplearmory.com/#/us/proudmoore/marko/collectable/toys
		https://simplearmory.com/#/us/proudmoore/marko/collectable/heirlooms
		https://simplearmory.com/#/us/proudmoore/marko/collectable/titles

		// calendar
		https://simplearmory.com/#/us/proudmoore/marko/calendar

		// reputation
		https://simplearmory.com/#/us/proudmoore/marko/reputation

		// settings
		https://simplearmory.com/#/us/proudmoore/marko/settings

	*/

	// if (!post) throw error(404);
	return {
		realm: params.realm,
		region: params.region,
		character: params.character + "-" + post?.title,
	};
}
