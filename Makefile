.PHONY: bootstrap build clean clean-ci lint lint-ci release release-ci test test-ci

bootstrap:
	npx lerna bootstrap
	git --version
	git config --local --list
	git remote -v
	git status

git-config:
	git config --global user.email "kamthamc@users.noreply.github.com"
	git config --global user.name "Chaitanya K"
	git remote -v
	ssh -T -p 443 git@ssh.github.com
	ssh -T git@github.com

build:
	npx lerna run build

clean:
	npx lerna clean

clean-ci:
	npx lerna clean --yes

release: clean-ci bootstrap build
	npx lerna version

release-ci: clean-ci bootstrap git-config
	git fetch --tags && git checkout master && npx lerna publish --loglevel verbose --yes --registry=https://npm.pkg.github.com

lint:
	npx lerna run lint

lint-ci:
	npx lerna run lint --yes

test:
	npx lerna run test

test-ci:
	npx lerna run test --yes
