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

module.exports = {
  runPuzzle1: (data) => {
    const listOfCalories = createListOfCalories(data);
    const sums = sumListOfCalories(listOfCalories);

    return sums.reduce((biggest, current) =>
      current > biggest ? current : biggest
    );
  },
  runPuzzle2: (data) => {
    const listOfCalories = createListOfCalories(data);
    const sums = sumListOfCalories(listOfCalories);

    return 0;
  },
};
