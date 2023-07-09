---
title: 'Brand New Monorepo'
pubDate: 2023-07-30
description: 'The nth post.'
author: 'pentaxis93'
image:
  url: 'assets/Convergence.jpg'
  alt: 'Convergence'
tags: ['convergence', 'programming', 'shamanism']
categories:
  - 'tech'
  - 'spiritual'
---

We begin by setting up a new SST project with `pnpm create sst`.

This sets up a monorepo, which contains two projects so far: `core` and `functions`.

In the project root, we have our `pnpm-workspace.yaml` file, which contains:

```yaml
packages:
  - 'packages/**/*'
```

This means that packages can be defined anywhere within the monorepo directory structure; basically any directory with a `package.json` file will be its own package.

There are also separate tsconfig.json files in the root and inside each package. That means each package will have its own typescript configuration.

[Look at `core` and `functions` packages -- these will support back end functionality]

Next we will add our front end; for this project we'll be using Svelte and SvelteKit with Skeleton UI.

```bash
cd packages
pnpm create skeleton-app web
```

We choose typescript, but we say "no" to the options to install ESLint, Prettier, Playwright, and Vitest. We'll be setting these up for the entire monorepo, so we don't want to configure them separately in our Svelte project. We'll also decline Svelte Inspector because we probably don't need it; let's keep things simple for now.

However, we'll add all the UI goodies: tailwind-forms, tailwind-typography, CodeBlock, and popups.
