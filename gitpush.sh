#!/bin/bash

echo "PUSHING TO GITHUB"
echo "-----------------"
git init
git config user.name "peterh3g"
git config user.email "peterh3g@gmail.com"
git remote add origin https://github.com/peterh3g/peterh3g.github.io
git branch -M main

git add .
git commit -m "publishing online..."
git push -u --force origin main