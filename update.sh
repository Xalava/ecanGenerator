#!/bin/bash
set -x

gitaj $@
gulp build
cd ../ECAN  
git checkout gh-pages    
rm -r *
cp -r ../ecanGenerator/dist/* .
mkdir smart-contracts-etudes
mkdir smart-contracts-etudes/assets
cp -r ../SCAdemy/assets/* ./smart-contracts-etudes/assets/
cp -r ../SCAdemy/index.html ./smart-contracts-etudes/
mkdir fabidee
cp -r ../fabidee/* ./fabidee/
gitaj $@
