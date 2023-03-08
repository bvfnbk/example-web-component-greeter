# `input-element`

The `<input>` element responsible to pass the attribute to the `<hello-message>` element is converted to a component as
well. More details can be found here:

https://bvfnbk.github.io/posts/example-web-components/ts-hello-message/

## Overview

This module has the following goals:

- Convert the `<label>` and its `<input>` element to a web component.
- Define a custom event passing the value along.
- Test event handling.

It does not

- bundle the transpiled `.ts` files
- process the source files etc.

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
