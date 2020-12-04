const readLine = require("n-readlines");

const readFile = (file, transformLine = (line) => line) => {
  const liner = new readLine(file);
  const output = [];
  let line;

  while ((line = liner.next())) {
    const lineData = line.toString();

    output.push(transformLine(lineData));
  }

  return output;
};

module.exports = { readFile };
