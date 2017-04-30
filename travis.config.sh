#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

git config --global user.email "$COMMIT_AUTHOR_EMAIL"
git config --global user.name "Travis CI"
