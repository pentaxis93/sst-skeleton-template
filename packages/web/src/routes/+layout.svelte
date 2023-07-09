<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../styles/theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import '../styles/prism-cb.css';
	import '../styles/global.scss';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">5th Ave. Gallery</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex gap-6 items-center">
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://github.com/pentaxis93/5th-avegallery"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					<LightSwitch />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/uses">Uses</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<div class="flex justify-center p-3">
			<p>
				May this be used for the benefit of all beings everywhere and for the benefit of the
				Absolute.
			</p>
		</div>
	</svelte:fragment>

	<!-- Page Route Content -->
	{#key data.currentRoute}
		<div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
			<div class="p-8">
				<slot />
			</div>
		</div>
	{/key}
</AppShell>
