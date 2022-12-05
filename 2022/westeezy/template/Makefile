.PHONY: default build install uninstall test clean fmt run
.IGNORE: fmt

default: build

build:
	dune build

install:
	dune install

uninstall:
	dune uninstall

clean:
	dune clean
	git clean -dfXq

fmt:
	dune build @fmt
	dune promote

run:
	dune exec -- ./main.exe
