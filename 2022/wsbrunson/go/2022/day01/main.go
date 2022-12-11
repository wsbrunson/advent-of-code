package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func part1(caloriesByElf map[int]int) {
	var elves []int
	for _, total := range caloriesByElf {
		elves = append(elves, total)
	}

	sort.Slice(elves, func(i, j int) bool {
		return elves[i] > elves[j]
	})

	fmt.Println("The most calories carried by an elf is", elves[0])
}

func part2(caloriesByElf map[int]int) {
	var elves []int
	for _, total := range caloriesByElf {
		elves = append(elves, total)
	}

	sort.Slice(elves, func(i, j int) bool {
		return elves[i] > elves[j]
	})

	var total int

	for i := 0; i < 3; i += 1 {
		total += elves[i]
	}

	fmt.Println("The top three Elves are carrying a total of", total, "Calories")
}

func main() {
	file, err := os.Open("input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	caloriesByElf := make(map[int]int)

	var elf int

	for scanner.Scan() {
		line := scanner.Text()

		if line == "" {
			elf++
			continue
		}

		value, err := strconv.Atoi(line)
		if err != nil {
			panic(err)
		}

		caloriesByElf[elf] += value
	}

	if err := scanner.Err(); err != nil {
		panic(err)
	}

	part1(caloriesByElf)
	part2(caloriesByElf)

}
