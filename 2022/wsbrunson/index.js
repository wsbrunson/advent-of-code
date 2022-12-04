const fs = require("fs").promises;
const path = require("path");
const day1 = require("./day-1");
const day2 = require("./day-2");

const getInput = (day) =>
  fs.readFile(path.join(__dirname, day, `input.txt`), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    return data;
  });

const puzzles = [
  {
    day: "day-1",
    puzzle: 1,
    fn: day1.runPuzzle1,
  },
  {
    day: "day-1",
    puzzle: 2,
    fn: day1.runPuzzle2,
  },
  {
    day: "day-2",
    puzzle: 1,
    fn: day2.runPuzzle1,
  },
  {
    day: "day-2",
    puzzle: 2,
    fn: day2.runPuzzle2,
  },
];

const main = async () => {
  for (const { day, puzzle, input: inputNumber, fn } of puzzles) {
    const input = await getInput(day, inputNumber);
    const output = await fn(input);

    console.log(`${day} - puzzle: ${puzzle} -`, "Output:", output);
  }
};

main();
