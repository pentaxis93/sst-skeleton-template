import { fetchMarkdownBlogPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types';

export const GET = async () => {
  const allPosts = await fetchMarkdownBlogPosts();

  const sortedPosts = allPosts.sort((a: BlogPost, b: BlogPost) => {
    return new Date(b.meta.pubDate).getTime() - new Date(a.meta.pubDate).getTime();
  });

  return json(sortedPosts);
};
