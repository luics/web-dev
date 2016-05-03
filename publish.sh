#!/usr/bin/env bash

if ! [ -e _book/.git ]; then
  rm -rf _book
  git clone git@github.com:luics/web-dev.git _book
  cd _book
  git checkout -b gh-pages --track origin/gh-pages
  cd ..
fi

gitbook build
cd _book
git add .
git commit -am 'update book'
git push origin gh-pages
cd ..
