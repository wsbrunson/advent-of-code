const { compose, map, sum, chunk } = require("lodash/fp");
const { splitStringByNewLine } = require("../utilities");

const splitString = (string) => [
  string.slice(0, string.length / 2),
  string.slice(string.length / 2, string.length),
];

const findCommonItem = (immutableItems) => {
  const lists = [...immutableItems];
  const lastList = lists.pop();

  const mapOfOtherItems = lists.map((list) =>
    list.reduce((acc, curr) => {
      acc[curr] = curr;
      return acc;
    }, {})
  );

  return lastList.find((item) => mapOfOtherItems.every((map) => map[item]));
};

const convertToPriority = (string) => {
  const charCode = string.charCodeAt(0);

  if (charCode < 96) {
    return charCode - 64 + 26;
  } else {
    return charCode - 96;
  }
};

module.exports = [
  {
    day: "day-3",
    puzzle: 1,
    fn: compose(
      sum,
      map(convertToPriority),
      map(findCommonItem),
      map(map((string) => string.split(""))),
      map(splitString),
      splitStringByNewLine
    ),
  },
  {
    day: "day-3",
    puzzle: 2,
    fn: compose(
      sum,
      map(convertToPriority),
      map(findCommonItem),
      map(map((string) => string.split(""))),
      chunk(3),
      splitStringByNewLine
    ),
  },
];
