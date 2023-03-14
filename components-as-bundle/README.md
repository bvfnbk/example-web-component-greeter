# `components-as-bundle`

The web components are converted to a single-file bundle. More details can be found here:

https://bvfnbk.github.io/posts/example-web-components/components-as-bundle/

## Overview

This module has the following goals:

- Convert the web components `src/ts/HelloMessage.ts` and `src/ts/MessageInput.ts` to a single file _JavaScript_ bundle.
- Process `src/public/index.html` and update the `<script>` line to load the bundle.
- The component tests should still work.

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
