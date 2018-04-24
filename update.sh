#!/bin/bash
set -x

gitaj $@
gulp build
cd ../ECAN      
rm -r *
cp -r ../ecanGenerator/dist/* .
mkdir smart-contracts-etude
mkdir smart-contracts-etude/assets
cp -r ../SCAdemy/assets/* ./etude-smart-contracts/assets/
cp -r ../SCAdemy/index.html ./etude-smart-contracts/
mkdir fabidee
cp -r ../fabidee/* ./fabidee/
gitaj $@
