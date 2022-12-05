const { compose, map, words, sum, mapValues, invert } = require("lodash/fp");
const { splitStringByNewLine } = require("../../utilities");

const letterToHand = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const letterToCondition = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const opponentWinConditions = {
  Rock: {
    win: "Paper",
    draw: "Rock",
    lose: "Scissors",
  },
  Paper: {
    win: "Scissors",
    draw: "Paper",
    lose: "Rock",
  },
  Scissors: {
    win: "Rock",
    draw: "Scissors",
    lose: "Paper",
  },
};

const handByHandResult = mapValues(invert, opponentWinConditions);

const handScores = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const battleScores = {
  lose: 0,
  draw: 3,
  win: 6,
};

const scoreHand = map(([opponentHand, playerHand]) => {
  const battleOutcome = handByHandResult[opponentHand][playerHand];
  const battleScore = battleScores[battleOutcome];

  return battleScore + handScores[playerHand];
});

const mapChoiceToHand = map((choice) => letterToHand[choice]);

module.exports = [
  compose(
    sum,
    scoreHand,
    map(compose(mapChoiceToHand, words)),
    splitStringByNewLine
  ),
  compose(
    sum,
    scoreHand,
    map(([opponentChoice, playerChoice]) => {
      const opponentHand = letterToHand[opponentChoice];
      const playerOutcome = letterToCondition[playerChoice];

      const playerHand = opponentWinConditions[opponentHand][playerOutcome];

      return [opponentHand, playerHand];
    }),
    map(words),
    splitStringByNewLine
  ),
];
