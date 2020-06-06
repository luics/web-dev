#!/usr/bin/env bash

if ! [ -e gh-pages/.git ]; then
  rm -rf gh-pages
  git clone --branch=gh-pages --single-branch https://github.com/luics/web-dev.git gh-pages
fi

gitbook build
cd _book
cp -rf examples en zh-hans gitbook index.html search_index.json ../gh-pages/
cd ../gh-pages/
git add -f .
git commit -am 'by publish.sh'
git push -f origin gh-pages
cd ..