const fs = require("fs").promises;
const path = require("path");

const getInput = (day) =>
  fs.readFile(
    path.join(__dirname, "days", day, `input.txt`),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      return data;
    }
  );

const main = async () => {
  const days = await (await fs.readdir(path.join(__dirname, "days"))).sort();
  const puzzles = await Promise.all(
    days.map((day) => require(path.join(__dirname, "days", day, "index.js")))
  );

  puzzles.forEach(async (puzzle, index) => {
    const dayNumber = index + 1;
    const input = await getInput(dayNumber.toString());

    puzzle.forEach((fn, index) => {
      const output = fn(input);

      console.log(
        `day: ${dayNumber} - puzzle: ${index + 1} -`,
        "Output:",
        output
      );
    });
  });
};

main();
