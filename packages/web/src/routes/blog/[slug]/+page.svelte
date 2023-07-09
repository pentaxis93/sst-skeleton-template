<script>
	export let data;
	const { title, pubDate, categories, Content } = data;
</script>

<svelte:head>
	<title>5th Ave. Gallery - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<h1>{title}</h1>
	<p>Published: {pubDate}</p>
	<Content />
</article>

{#if categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each data.categories as category}
				<li>
					<a href="/blog/category/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
