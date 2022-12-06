
print(
    sum([
        [
            [3, 4, 8],
            [1, 5, 9],
            [2, 6, 7],
        ][ord(l[0]) - 65][ord(l[2]) - 88]
        for l in open('d2-1.input')
    ])
)
