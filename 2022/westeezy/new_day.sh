#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")"

if [ -z "${AOC_SESSION+x}" ]; then
    echo "AOC_SESSION is not defined, exiting..."
    exit 1
fi

day=""
day_unpadded=""
if [ -z "${1+x}" ]; then
    day=$(date +%d)
    day_unpadded=$(date +%-d)
else
    day_unpadded=$((10#$1))
    day=$day_unpadded
    if [ "$day" -lt 10 ]; then
        day="0$day"
    fi
fi

if [ -d "$day" ]; then
    echo "Folder for day exists already, exiting..."
    exit 0
fi

cp -r template "$day"

curl "https://adventofcode.com/2022/day/$day_unpadded/input" \
  -H "cookie: session=$AOC_SESSION" > $day/input

bold=$(tput bold)
normal=$(tput sgr0)

echo "${bold}Challenge description:${normal} https://adventofcode.com/2022/day/$day_unpadded"
