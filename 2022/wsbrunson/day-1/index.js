const {
  take,
  sortBy,
  reverse,
  sum,
  head,
  compose,
  identity,
} = require("lodash/fp");

const createListOfCalories = (data) =>
  data
    .split(/\r?\n/)
    .map((number) => (number.length > 0 ? parseInt(number, 10) : "break"));

const sumListOfCalories = (data) => {
  let sums = [];
  let currentElf = 0;

  for (const item of data) {
    if (item === "break") {
      currentElf = currentElf + 1;
    } else {
      const currentCalorieCount = sums[currentElf];
      if (currentCalorieCount === undefined) {
        sums[currentElf] = item;
      } else {
        sums[currentElf] = currentCalorieCount + item;
      }
    }
  }

  return sums;
};

const log = (message) => (data) => {
  console.log(message, data);

  return data;
};

module.exports = {
  runPuzzle1: compose(
    head,
    reverse,
    sortBy(identity),
    sumListOfCalories,
    createListOfCalories
  ),
  runPuzzle2: compose(
    sum,
    take(3),
    reverse,
    sortBy(identity),
    sumListOfCalories,
    createListOfCalories
  ),
};
