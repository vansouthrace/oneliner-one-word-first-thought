import { mkdirSync, writeFileSync } from "node:fs";

// One word, first thought: a word with a twist in it.
// It has to be exactly one word, nothing else, no punctuation.
const entry = "labyrinth";

// The gate wants a single word, so guard against accidental whitespace.
const clean = entry.trim().split(/\s+/)[0];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", clean);
console.log("entry written:", clean);
