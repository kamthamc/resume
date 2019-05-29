.PHONY: bootstrap build clean clean-ci lint lint-ci release release-ci test test-ci

bootstrap:
	npx lerna bootstrap

build:
	npx lerna run build

clean:
	npx lerna clean

clean-ci:
	npx lerna clean --yes

release: clean-ci bootstrap build
	npx lerna version

release-ci: clean-ci bootstrap build
	get fetch --tags && git checkout master && npx lerna version --yes

lint:
	npx lerna run lint

lint-ci:
	npx lerna run lint --yes

test:
	npx lerna run test

test-ci:
	npx lerna run test --yes
