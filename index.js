import { EOL } from "node:os";

const kWinEOL = "\r\n";
const kPosixEOL = "\n";
const kToReplaceEOL = EOL === kWinEOL ? kPosixEOL : kWinEOL;

/**
 * Add a maximum column length to a string without breaking words (if possible).
 * @param {string} string
 * @param {Number} maxColLength
 * @returns {string}
 */
export function stringBreak(string, maxColLength = 80) {
  let outputString = "";

  const lines = string.replaceAll(kToReplaceEOL, EOL).split(EOL);

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
        while (line[i] !== " " && line[i + sliceLength] !== " " && line[j + 1] !== " ") {
          sliceLength--;
          j--;
        }
      }

      yield line.slice(i, i + sliceLength).trim();

      i = j;
    }
  }
}
