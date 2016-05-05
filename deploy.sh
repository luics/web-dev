#!/usr/bin/env bash

# env
git config --global user.email "luics.xu@gmail.com"
git config --global user.name "luics"
git clone --branch=gh-pages "https://luics:${GITHUB_TOKEN}@github.com:luics/web-dev.git" _book
cd _book
git remote rm origin
git remote add origin "https://luics:${GITHUB_TOKEN}@github.com:luics/web-dev.git"
cd ..

./publish.sh