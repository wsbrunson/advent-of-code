
if __name__ == '__main__':
    with open('d1-1_input') as f:
        max_cals = 0
        max_index = -1

        curr_cals = 0
        for i, line_raw in enumerate(f):
            line = line_raw.replace('\n', '')
            if not line:
                if curr_cals > max_cals:
                    max_cals = curr_cals
                    max_index = i
                curr_cals = 0
            else:
                try:
                    curr_cals += int(line)
                except Exception as e:
                    print(e, line)

        print(max_index, max_cals)
