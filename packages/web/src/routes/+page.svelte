<script>
	import galleryImage from '../assets/5th-avenue-gallery-by-ejgold.png?format=webp';
</script>

<svelte:head>
	<title>5th Ave. Gallery</title>
</svelte:head>

<h1 class="h1">Hello 5th Ave. Gallery</h1>
<img class="w-auto h-auto" src={galleryImage} alt="5th Ave. Gallery" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<div class="flex justify-center">
	<section>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
	</section>
</div>
