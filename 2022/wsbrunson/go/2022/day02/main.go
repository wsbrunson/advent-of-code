package main

import (
	"bufio"
	"fmt"
	"os"
)

func part1(scores map[string]int, hands []string) {
	score := 0

	for _, hand := range hands {
		score = score + scores[hand]
	}

	fmt.Println("Part 1 total score is:", score)
}

func part2(scores map[string]int, hands []string) {
	conditionToHand := map[string]string{
		"A X": "A Z",
		"A Y": "A X",
		"A Z": "A Y",
		"B X": "B X",
		"B Y": "B Y",
		"B Z": "B Z",
		"C X": "C Y",
		"C Y": "C Z",
		"C Z": "C X",
	}

	score := 0

	for _, hand := range hands {
		score = score + scores[conditionToHand[hand]]
	}

	fmt.Println("Part 2 total score is:", score)
}

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	var hands []string
	for scanner.Scan() {
		hands = append(hands, scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}

	scores := map[string]int{
		"A X": 1 + 3,
		"A Y": 2 + 6,
		"A Z": 3 + 0,
		"B X": 1 + 0,
		"B Y": 2 + 3,
		"B Z": 3 + 6,
		"C X": 1 + 6,
		"C Y": 2 + 0,
		"C Z": 3 + 3,
	}

	part1(scores, hands)
	part2(scores, hands)
}
