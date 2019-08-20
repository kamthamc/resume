.PHONY: bootstrap build clean clean-ci lint lint-ci release release-ci test test-ci

bootstrap:
	npx lerna bootstrap

git-config:
	git config --global user.email "kamthamc@users.noreply.github.com"
	git config --global user.name "Chaitanya K"
	git remote rm origin
	git remote add origin "https://kamthamc:${GH_TOKEN}@github.com/kamthamc/resume.git"
	git remote -v

npm-config:
	echo "//npm.pkg.github.com/:_authToken=${GH_TOKEN}" > .npmrc

build:
	npx lerna run build

clean:
	npx lerna clean

clean-ci:
	npx lerna clean --yes

release: clean-ci bootstrap build
	npx lerna version

release-ci: clean-ci bootstrap git-config npm-config
	git fetch --tags && git checkout master && npx lerna publish --loglevel verbose --yes --registry=https://npm.pkg.github.com

lint:
	npx lerna run lint

lint-ci:
	npx lerna run lint --yes

test:
	npx lerna run test

test-ci:
	npx lerna run test --yes
