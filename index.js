// Import Node.js Dependencies
import { EOL } from "node:os";

// Constants
const kWinEOL = "\r\n";
const kPosixEOL = "\n";
const kToReplaceEOL = EOL === kWinEOL ? kPosixEOL : kWinEOL;
const kProhibitedBreakBefore = [":", ";", ",", ".", ")", "}", "]", "?", "!", "\"", "'"];
const kProhibitedBreakAfter = [";", "," ,"(", "[", "{"];

/**
 * Add a maximum column length to a string without breaking words (if possible).
 * @param {string} text
 * @param {Number} maxColLength
 * @returns {string}
 */
export function stringBreak(text, maxColLength = 80) {
  if (typeof text !== "string") {
    throw new TypeError(`Expected string, ${typeof text} given.`);
  }

  if (typeof maxColLength !== "number") {
    throw new TypeError(`Expected number, ${typeof maxColLength} given.`);
  }

  let outputString = "";

  const lines = text.replaceAll(kToReplaceEOL, EOL).split(EOL);

  for (const line of checkLines(lines, maxColLength)) {
    outputString += line + EOL;
  }

  return outputString.trimEnd();
}

function* checkLines(lines, maxColLength) {
  for (const line of lines) {
    if (line.length <= maxColLength) {
      yield line;

      continue;
    }

    for (let i = 0; i < line.length; i += maxColLength) {
      let sliceLength = maxColLength;

      if (line[i] === " ") {
        i++;
      }

      let j = i;

      if (line.slice(i, i + sliceLength).includes(" ")) {
        // eslint-disable-next-line max-depth
        while (kProhibitedBreakAfter.includes(line[i + sliceLength - 1]) || (line[i] !== " " && line[i] !== " " && line[i + sliceLength] !== " " && line[j + 1] !== " ")) {
          sliceLength--;
          j--;
        }
      }

      yield line.slice(i, i + sliceLength).trim();

      i = j;
    }
  }
}
