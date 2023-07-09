import type { BlogPostMeta } from '$lib/types';

export const fetchMarkdownBlogPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const importedFile = (await resolver()) as { metadata: BlogPostMeta };
			const postPath = path.slice(11, -3);

			return {
				meta: importedFile.metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	const date = new Date(dateString);
	return date.toLocaleDateString(undefined, options);
}
