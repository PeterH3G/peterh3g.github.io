#! /bin/bash

git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/PeterH3G/peterh3g.github.io.git
git branch -M main
git push -u origin --all