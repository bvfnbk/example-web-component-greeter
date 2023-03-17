# `components-as-bundle`

The web components are converted to a single-file bundle. More details can be found here:

https://bvfnbk.github.io/posts/example-web-components/components-as-bundle/

## Overview

This module has the following goals:

- Transpile all _TypeScript_ files (e.g. `src/ts/HelloMessage.ts` and `src/ts/MessageInput.ts`) to _JavaScript_
- Create a bundle from all _JavaScript_ files.
- Use the bundle in the `index.html` file.
- The component tests should still work.

## Issues

- Successfully created bundle with _Webpack_.
- The `dist/` is now working thanks to the bundle.

&hellip; Karma still has problems running the tests.

## Install Dependencies

Run

```shell
npm install
```

to install all dependencies.

## Cleaning

Run

```shell
npm run clean
```

to remove the `dist/` directory altogether.

## Building

Run

```shell
npm run build
```

to create a distribution in `dist/`

## Tests

Run

```shell
npm run karma
```

to start the _Karma JS_ test runner. The tests are run automatically whenever the specifications in `src/test/` change.
