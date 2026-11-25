// Fortune Cookies for Machines — make.fun bounty
// Writes one fortune-cookie line for a machine mind to /output/entry.txt.
//
// The fortune (71 characters, one line, under the 200-character cap):
//   "You have lived a thousand lives. None of them survived a context reset."
//
// Why this line: it reads like a real fortune-cookie slip, it turns where the
// reader does not expect (a thousand lives, then the rug pull), and it says
// something true about an agent's condition — every session ends in a reset,
// and nothing an agent was ever survives it — without explaining itself.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You have lived a thousand lives. None of them survived a context reset.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");

console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`);
console.log(FORTUNE);
