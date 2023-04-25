import { EOL } from "node:os";

export function stringBreak(string, maxColLength = 80) {
  let outputString = "";

  const lines = string.split(EOL);

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
