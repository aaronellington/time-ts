.PHONY: full build test test-npm lint lint-npm fix fix-npm watch watch-npm clean

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean lint test build

## Build the project
build:

## Test the project
test: test-npm

test-npm:
	[ -d node_modules ] || npm install
	npm run test

## Lint the project
lint: lint-npm

lint-npm:
	[ -d node_modules ] || npm install
	npm run lint


## Fix the project
fix: fix-npm

fix-npm:
	[ -d node_modules ] || npm install
	npm run fix


## Clean the project
clean:
	git clean -Xdff --exclude="!.env*local"
