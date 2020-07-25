# Kaizen Web Components 

This is a starter project for building a standalone Web Component using Stencil and Storybook. 
I've pinched this starter from [Stencilbook](https://github.com/Edd-Strickland/stencilbook) and
added support for Sass.

## Getting Started

Clone the repo

```bash
git clone https://github.com/Edd-Strickland/stencilbook.git
```

Change into the base directory:

```bash
cd stencilbook
```

Install the modules:

```bash
npm install
```

and run a build for the entire repo:

```bash
npm run build:all
```

After this run storybook:

```bash
npm run storybook
```

## Other commands for this repo include:

Build stencil:

```bash
npm run stencil
```

Start stencil directly in serve/watch mode; Useful for ameneding stencil components directly:

```bash
npm run stencil:start
```

Run storybook and a stencil build with watch and serve, deleting any previous versions built and will serve locally:

```bash
npm run storybook:build:all
```

Serve storybook Locally:

```bash
npm run storybook:serve
```

Reset modules; Deletes and reinstalls node modules:

```bash
npm run reset:modules
```

To run the unit tests for the components, run:

```bash
npm test
```

## Test

To run tests in watch mode:

```bash
npm run test.watch
```

## Generate new components

To generate new Stencil components automagically:

```bash
npm run generate
```
