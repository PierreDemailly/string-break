import assert from "node:assert";
import { EOL } from "node:os";
import { test } from "node:test";

import { stringBreak } from "../index.js";

test("should wrap", () => {
  assert.strictEqual(
    stringBreak("Hello", 2),
    `He${EOL}ll${EOL}o`
  );
});

test("should remove leading whitespace", () => {
  assert.strictEqual(
    stringBreak("Hello World", 5),
    `Hello${EOL}World`
  );
});

test("should remove trailing whitespace & cannot wrap word", () => {
  assert.strictEqual(
    stringBreak("Hello World", 3),
    `Hel${EOL}lo${EOL}Wor${EOL}ld`
  );
});

test("should handle new lines", () => {
  assert.strictEqual(
    stringBreak("ISC License:\n\nCopyright (c) 2004-2010 by Internet Systems Consortium, Inc. (\"ISC\")\nCopyright (c)", 80),
    `ISC License:${EOL}${EOL}Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")${EOL}Copyright (c)`
  );
});

test("should wrap words longer than maxColLength", () => {
  assert.strictEqual(
    stringBreak("Hello World", 8),
    `Hello${EOL}World`
  );
});

test("should not wrap space", () => {
  assert.strictEqual(
    stringBreak("Hello World", 6),
    `Hello${EOL}World`
  );
});

test("should wrap last word", () => {
  assert.strictEqual(
    stringBreak("Hello World", 10),
    `Hello${EOL}World`
  );
});

test("should wrap multiple word", () => {
  assert.strictEqual(
    stringBreak("Hello World Hello World Hello World Hello World", 7),
    `Hello${EOL}World${EOL}Hello${EOL}World${EOL}Hello${EOL}World${EOL}Hello${EOL}World`
  );
});

test("should not wrap after prohibited characters", () => {
  assert.strictEqual(
    stringBreak("Lorem ipsum dolor sit amet, consectetur adipcing elit.", "Lorem ipsum dolor sit amet,".length),
    `Lorem ipsum dolor sit${EOL}amet, consectetur adipcing${EOL}elit.`
  );
});
