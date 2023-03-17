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

Creating the bundle in a way that the distribution works succeeded. It has been difficult to setup the tests
using _Karma_ and _Jasmine_ though. However, switching to `jest`, `ts-jest` and `jsdom` it has been possible to enable
the tests without too much change:

- `expect` defines slightly different assertions.
- Mocking works differently.
- The test environment for the browser (`jsdom`) is more picky about the `innerText` and `innerHTML` fields than common
  browsers.

_Jest_ runs the tests more quickly and has a better reporting (at least "on my machine") but unfortunately it does not
_watch_ the tests by default. This may eventually be addressed when setting up the development service...

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
npm run test
```

