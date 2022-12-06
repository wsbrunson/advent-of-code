print(sum([(o := ord((set(lg[0]) & set(lg[1]) & set(lg[2])).pop())) - (96 if o > 96 else 38) for lg in zip(*[iter(open('d3.input').read().splitlines())]*3)]))

#2363
#https://stackoverflow.com/a/435712/468160
