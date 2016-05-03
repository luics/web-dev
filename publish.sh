#!/usr/bin/env bash

if ! [ _book/.git ]; then
  rm -rf _book
  git clone git@github.com:luics/web-dev.git _book
  git fetch gh-pages
  git checkout gh-pages
fi

gitbook build
cd _book
git add .
git commit -am 'update book'
git push origin gh-pages
cd ..
