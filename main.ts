// One-word entry for "One Word From Grandma": writes the single word
// grandma would text about AI — "knowitall", 9 characters, the machine
// that knows everything, in her lightly scolding voice — to
// /output/entry.txt, with no trailing newline, so the file is
// byte-exactly the word. Gate: UTF-8 text, 1 to 30 characters.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "knowitall");
