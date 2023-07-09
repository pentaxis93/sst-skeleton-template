<script>
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>5th Ave. Gallery - {data.category}</title>
</svelte:head>

<h1>Robert's work room</h1>
<h2>Category: {data.category}</h2>

<p>Robert's work room is a place where he can work on his projects.</p>

{#if data.posts && data.posts.length > 0}
	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {formatDate(post.meta.pubDate)}
			</li>
		{/each}
	</ul>
{:else}
	<p>No posts yet.</p>
{/if}
