import type { BlogPost } from '$lib/types';

export const load = async ({
  fetch
}: {
  fetch: typeof window.fetch;
}): Promise<{ posts: BlogPost[] }> => {
  const response = await fetch('/api/blog');
  const posts = await response.json();

  return {
    posts
  };
};
