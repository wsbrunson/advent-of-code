const fs = require("fs").promises;
const path = require("path");
const { runPuzzle1, runPuzzle2 } = require("./day-1");

const getInput = (day, input) =>
  fs.readFile(
    path.join(__dirname, day, `input-puzzle-${input}.txt`),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      return data;
    }
  );

const puzzles = [
  {
    day: "day-1",
    puzzle: 1,
    input: 1,
    fn: runPuzzle1,
  },
  {
    day: "day-1",
    puzzle: 2,
    input: 1,
    fn: runPuzzle2,
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
