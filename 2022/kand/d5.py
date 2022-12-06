with open('d5.in') as f:
    stacks = {}
    for line in f:
        if line[:4] == 'move':
            c = int(line[5:(m1 := line.find('from')) - 1])
            s1 = int(line[m1 + 5:(m2 := line.find('to')) - 1])
            s2 = int(line[m2 + 3:])
            for i in range(c):
                stacks[s2].insert(0, stacks[s1].pop(0))
        elif line == '\n' or line[:2] == ' 1':
            pass
        else:
            for i in range(0, len(line), 4):
                box = line[i:i+4]
                currStack = int(i / 4) + 1
                if box[0] == '[':
                    x = box[1]
                    if (s := stacks.get(currStack)):
                        s.append(x)
                    else:
                        stacks[currStack] = [x]

print(''.join([stacks[i + 1][0] for i in range(len(stacks))]))

with open('d5.in') as f:
    stacks = {}
    for line in f:
        if line[:4] == 'move':
            c = int(line[5:(m1 := line.find('from')) - 1])
            s1 = int(line[m1 + 5:(m2 := line.find('to')) - 1])
            s2 = int(line[m2 + 3:])
            for i in range(c):
                stacks[s2].insert(0, stacks[s1].pop(c - i - 1))
        elif line == '\n' or line[:2] == ' 1':
            pass
        else:
            for i in range(0, len(line), 4):
                box = line[i:i+4]
                currStack = int(i / 4) + 1
                if box[0] == '[':
                    x = box[1]
                    if (s := stacks.get(currStack)):
                        s.append(x)
                    else:
                        stacks[currStack] = [x]

print(''.join([stacks[i + 1][0] for i in range(len(stacks))]))
