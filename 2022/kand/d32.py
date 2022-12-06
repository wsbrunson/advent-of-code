total = 0
lines = open('d3.input').readlines()
for ilg in range(0, len(lines), 3):
    lg = lines[ilg:ilg+3]
    o = ord(
        next((
            c
            for c in lg[0]
            if c in lg[1] and c in lg[2]
        ))
    )
    total += o - (96 if o > 96 else 38)

print(total)
