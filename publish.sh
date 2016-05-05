#!/usr/bin/env bash

if ! [ -e _book/.git ]; then
  rm -rf _book
  git clone --branch=gh-pages git@github.com:luics/web-dev.git _book
fi

gitbook build
cd _book
git add -f .
git commit -am 'published in CI'
git push -f origin gh-pages
cd ..