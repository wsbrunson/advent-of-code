const R = require("ramda");
const path = require("path");
const { readFile } = require("../utils");

const convertStringArrayToNumbers = (array) =>
  array.map((string) => parseInt(string, 10)).sort();

const testData = convertStringArrayToNumbers([
  "1721",
  "979",
  "366",
  "299",
  "675",
  "1456",
]);

const getTwoFactorsForCondition = R.curry((condition, data) => {
  const factors = {};

  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      const firstFactor = data[i];
      const secondFactor = data[j];

      if (condition(firstFactor, secondFactor) && i !== j) {
        const array = [firstFactor, secondFactor].sort();
        const key = array.join(",");

        if (!factors[key]) factors[key] = array;
      }
    }
  }

  return Object.values(factors);
});

const isSumEqualToNumber = (number) => (...args) =>
  R.equals(R.sum(args), number);
const isSumLessThanNumber = (number) => (...args) => R.lt(R.sum(args), number);

const log = R.curry((message, data) => {
  console.log(message, data);

  return data;
});

const fixExpenseReportPart1 = R.compose(
  R.product,
  R.flatten,
  getTwoFactorsForCondition(isSumEqualToNumber(2020))
);

const mapFunction = (data) => (...args) => {
  const [x, y] = args[0];
  const z = 2020 - (x + y);

  return data.includes(z) ? x * y * z : false;
};

const mapFunctionCurried = R.curry(([x, y], data) => {
  const z = 2020 - (x + y);

  return data.includes(z) ? x * y * z : false;
});

const fixExpenseReportPart2 = (data) =>
  R.compose(
    R.head,
    R.filter(Boolean),
    R.map(mapFunction(data)),
    getTwoFactorsForCondition(isSumLessThanNumber(2020))
  )(data);

const expect = (message, expected, actual) =>
  expected === actual
    ? console.log(`${message}: ${expected} equaled ${actual}`)
    : console.error(`${message}: ${expected} did not equal ${actual}`);

const runProblem = () => {
  const inputData = convertStringArrayToNumbers(
    readFile(path.join(__dirname, "input.txt"))
  );

  expect("part 1 test data", 514579, fixExpenseReportPart1(testData));
  expect("part 1 input data", 987339, fixExpenseReportPart1(inputData));

  expect("part 2 test data", 241861950, fixExpenseReportPart2(testData));
  expect("part 2 input data", 259521570, fixExpenseReportPart2(inputData));
};

runProblem();
