const { split, map, pipe, spread, range, sum, curry } = require("lodash/fp");
const { splitStringByNewLine, log } = require("../../utilities");

const sortListsByLength = ([list1, list2]) => {
  let smallerList = list1.length > list2.length ? list2 : list1;
  let biggerList = list1.length > list2.length ? list1 : list2;

  return [smallerList, biggerList];
};

const isListInsideOfList = ([list1, list2]) =>
  list1.every((item) => list2.includes(item));

const isAnyPartOfListInsideList = ([list1, list2]) =>
  list1.some((item) => list2.includes(item));

const mapBooleanToNumber = map((boolean) => (boolean ? 1 : 0));

module.exports = [
  pipe(
    splitStringByNewLine,
    map(split(",")),
    map(
      map(
        pipe(split("-"), ([lower, upper]) => [lower, upper + 1], spread(range))
      )
    ),
    map(sortListsByLength),
    map(isListInsideOfList),
    mapBooleanToNumber,
    sum
  ),
  pipe(
    splitStringByNewLine,
    map(split(",")),
    map(
      map(
        pipe(
          split("-"),
          ([lower, upper]) => [lower, (parseInt(upper, 10) + 1).toString()],
          spread(range)
        )
      )
    ),
    map(sortListsByLength),
    map(isAnyPartOfListInsideList),
    mapBooleanToNumber,
    sum
  ),
];
