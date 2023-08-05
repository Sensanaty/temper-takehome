# temper-takehome

This is a takehome assignment for Temper, in which I had to build a List view of Posts whose positions could be manipulated using arrows, as well as a History feature that would let users time travel and reset the state of the list back to a previous point.

Built with Vue 3 with some sensible defaults (Tailwind, Typescript, Vitest, [`vue-testing-library`](https://testing-library.com/docs/vue-testing-library/intro/), Vite), as well as a few icons from [`Phosphor Icons`](https://phosphoricons.com/).

## Running It

To run it locally, you can pull all dependencies with `pnpm`. If you don't have `pnpm` installed, you can follow the steps on their website: https://pnpm.io/installation. You could also try removing the `pnpm-lock.yaml` file and running `npm install` or `yarn install`, but there's always a chance of running different package managers causing things to break unexpectedly.

Once it's built you can run `pnpm dev` (or `yarn dev` or `npm run dev`) to spin up the local dev server.

Alternatively, you can just go to https://temper-takehome.pages.dev to view it live.
