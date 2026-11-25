// One Word, First Thought: a single surprising word, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry word, picked fresh for this bounty.
const entry = "petrichor";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
