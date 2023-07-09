---
title: 'A Monorepo Story'
pubDate: 2023-07-20
description: 'What, why, how.'
author: 'pentaxis93'
image:
  url: 'assets/Convergence.jpg'
  alt: 'Convergence'
tags: ['convergence', 'programming', 'shamanism']
categories:
  - 'tech'
  - 'spiritual'
---

`There is no magic; only knowledge, more or less hidden.`
The Cumaean, Book of the New Sun, Gene Wolfe

# How and why to set up a Svelte Monorepo

In my adventures as a beginner web app developer, I have learned to hate magic. Anything magic is something I don't understand, and sure to become the source of an ever-multiplying hoarde of incomprehensible error messages and warnings. One of the worst magic things has been package managers. What's the difference between yarn and npm? They're almost the same but not really ... or are they ... and does this even matter?

When it's magic, you can't mess with it and you have a mysterious phenomenon that makes your life harder. When you understand it, it becomes your tool and you can use it to improve your craft as a developer.

## Explain the problem

I built this nice svelte app and wanted to deploy to AWS with SST. Best way would be a monorepo, but I got some baffling errors.

## What is a monorepo and why should I care?

A monorepo is a normal repository, but it has more packages inside it. It's a multi-package repository.

pnpm

To start using pnpm's monorepo tools, we need a pnpm-workspace.yaml configuration file. This is just a yaml (YAML Ain't Markup Language) file that goes in the root of the repo. It has a package key and lists all the folders that will be treated as a workspace -- that means a folder with it's own package.json, its own set of packages.

## How-To

Begin by creating a repo inside a brand-new directory.

```bash
mkdir 5th-avegallery
cd 5th-avegallery
git init
```

In the root directory, create the pnpm-workspace.yaml file:

```yaml
packages:
  - 'packages/*'
```

`packages` is the name of the directory that's going to contain our packages. Traditionally this is called packages but it can be anything. There can be multiple as well, and it supports glob things as well. This is very specific; it means any folders nested immediately inside `packages` are part of the workspace but nothing deeper.

Next, create the `packages` directory:

```bash
mkdir packages
```

This essentially becomes one of our workspaces.

The next question is how we want to struture our monorepo. This is one of the superpowers we'll gain by building our app inside a monorepo: by organizing our code into separate packages, we'll have simpler parts that are designed to work together in a modular fashion. That's gonna make everything a lot easier as our app becomes more and more complex over time.

We want to demo some basic use cases for the sake of this example, so for now we'll set up four 'subrepos' inside our monorepo:

```bash
cd packages
mkdir site
mkdir backend
mkdir utils
mkdir components
```

Now that our folders are set up, we can create our front end.

```bash
cd site
pnpm init svelte@latest .
```

We enter into the `site` subrepo and execute the pnpm command to initialize a brand-new Svelte project.

We now have a fresh Svelte project, and we can cd into the `packages/site` directory and run our Svelte dev server, just as usual.

Now we'll set up the components subrepo. It will need its own `package.json` file, so let's begin with a simple one:


```json
{
	"name": "@5th/components",
	"version": "0.0.1",
	"type": "module",
	"main": "index.js"
}
```

This names the repository, assigns a version number to indicate we're just getting started, tells Node.js to treat `.js` files in this package as ES modules (which means we can use `import` and `export` statements to load and execute this code), and sets `index.js` as the main entry point.

At this point, the monorepo is already fully functional. We can go to the root project directory and install all the dependencies with

```bash
pnpm i
```

This should create a node_modules directory in the site subrepo, and another one in the project root.

[Explain the output here, including how pnpm sets up hard links in the subrepos that link to the root directory, that link to the main store.]
