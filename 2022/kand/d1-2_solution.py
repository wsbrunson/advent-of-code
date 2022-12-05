
if __name__ == '__main__':
    with open('d1-1_input') as f:
        cal_totals = []

        curr_cals = 0
        for i, line_raw in enumerate(f):
            line = line_raw.replace('\n', '')
            if not line:
                cal_totals.append(curr_cals)
                curr_cals = 0
            else:
                try:
                    curr_cals += int(line)
                except Exception as e:
                    print(e, line)

        print(sum(sorted(cal_totals)[-3:]))
