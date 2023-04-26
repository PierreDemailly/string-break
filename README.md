# string-break

![version](https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&url=https://raw.githubusercontent.com/PierreDemailly/string-break/main/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/PierreDemailly/string-break/graphs/commit-activity)
[![mit](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://github.com/PierreDemailly/string-break/blob/main/LICENSE)
![build](https://img.shields.io/github/actions/workflow/status/PierreDemailly/string-break/node.js.yml?style=for-the-badge)

Javascript utility function that add a maximum column length to a string without breaking words (if possible).

This is **NOT** an implementation of [UNICODE LINE BREAKING ALGORITHM](http://unicode.org/reports/tr14/).

## Requirements

- [Node.js](https://nodejs.org/en/) v14 or higher

## Getting Started

> **Note** This package is ESM only.

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @pierred/string-break
# or
$ yarn add @pierred/string-break
```

## Usage example

```js
import { stringBreak } from "@pierred/string-break";

stringBreak("Hello World", 5);
```

Look at [tests](./test/stringBreak.test.js) for more details.

## API

### `stringBreak`

```js
stringBreak(string: string, maxColLength: number = 80): string
```
