#!/usr/bin/env bash

if ! [ -e _book/.git ]; then
  rm -rf _book
  git clone --branch=gh-pages --single-branch git@github.com:luics/web-dev.git _book
fi

gitbook build
cd _book
git add -f .
git commit -am 'by publish.sh'
git push -f origin gh-pages
cd ..