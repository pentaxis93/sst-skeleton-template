import { fetchMarkdownBlogPosts } from '$lib/utils';
import type { BlogPost } from '$lib/types';

const siteURL = 'https://5th-avegallery.com';
const siteTitle = '5th Avenue Gallery';
const siteDescription = 'In search of the harmonious human being.';

export const prerender = true;

export const GET = async () => {
  const allPosts = await fetchMarkdownBlogPosts();
  const sortedPosts = allPosts.sort((a: BlogPost, b: BlogPost) => {
    return new Date(b.meta.pubDate).getTime() - new Date(a.meta.pubDate).getTime();
  });

  const body = render(sortedPosts);
  const options = {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml'
    }
  };

  return new Response(body, options);
};

const render = (posts: BlogPost[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
    .map(
      (post) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.path}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}/blog/${post.path}</link>
<description>${post.meta.title}</description>
<pubDate>${new Date(post.meta.pubDate).toUTCString()}</pubDate>
</item>`
    )
    .join('')}
</channel>
</rss>
`;
