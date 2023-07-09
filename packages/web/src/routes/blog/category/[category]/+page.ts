import type { BlogPost } from '$lib/types';

export const load = async ({
	fetch,
	params
}: {
	fetch: typeof window.fetch;
	params: { category: string };
}): Promise<{ category: string; posts: BlogPost[] }> => {
	const { category } = params;
	const response = await fetch('/api/blog');
	const allPosts = await response.json();

	const posts = allPosts.filter((post: BlogPost) => post.meta.categories.includes(category));

	return {
		category,
		posts
	};
};
