.PHONY: bootstrap build clean clean-ci lint lint-ci release release-ci test test-ci npm-install

npm-install:
	npm install

bootstrap:
	npx lerna bootstrap --ci

git-config:
	git config --global user.email "kamthamc@users.noreply.github.com"
	git config --global user.name "Chaitanya K"
	git remote rm origin
	git remote add origin "https://kamthamc:${GH_TOKEN}@github.com/kamthamc/resume.git"
	git remote -v

npm-config:
	echo "registry=https://npm.pkg.github.com/kamthamc" > .npmrc
	npm run lerna exec -- "echo \"//npm.pkg.github.com/:_authToken=${GH_TOKEN}\" > .npmrc"

build:
	npm run lerna run build

clean:
	npm run clean

clean-ci:
	npm run clean

release: clean-ci bootstrap build
	npm run lerna version

release-ci: git-config npm-install npm-config clean-ci bootstrap
	git fetch --tags && git checkout master && npm run publish

lint:
	npm run lerna run lint

lint-ci:
	npm run lerna run lint --yes

test:
	npm run lerna run test

test-ci:
	npm run lerna run test --yes
