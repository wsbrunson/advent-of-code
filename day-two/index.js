const { readFile } = require("../utils");
const path = require("path");
const R = require("ramda");

const splitPasswordString = (string) =>
  string.split(/([a-z])\:/).map((newString) => newString.trim());

const testData = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"].map(
  splitPasswordString
);

const inputData = readFile(
  path.join(__dirname, "/input.txt"),
  splitPasswordString
);

const examinePasswords = (passwords) => {
  return R.sum(
    passwords.map(([number, letter, password]) => {
      const [min, max] = number
        .split("-")
        .map((string) => parseInt(string, 10));

      const occurances = password
        .split("")
        .reduce((count, current) => (current == letter ? count + 1 : count), 0);

      return occurances >= min && occurances <= max ? 1 : 0;
    })
  );
};

const examinePasswordsPart2 = (passwords) => {
  return R.sum(
    passwords.map(([number, letter, password]) => {
      const [min, max] = number
        .split("-")
        .map((string) => parseInt(string, 10));

      const [newMin, newMax] = [min - 1, max - 1];

      const firstPositionHasLetter = password[newMin] === letter;
      const secondPositionHasLetter = password[newMax] === letter;

      if (firstPositionHasLetter && !secondPositionHasLetter) return 1;
      if (!firstPositionHasLetter && secondPositionHasLetter) return 1;

      return 0;
    })
  );
};

console.log(examinePasswords(inputData));
console.log(examinePasswordsPart2(inputData));
