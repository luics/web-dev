#!/usr/bin/env bash

gitbook build
cd _book
git commit -am 'update book'
git push origin gh-pages
cd ..
