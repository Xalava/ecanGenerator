#!/bin/bash
gitaj $@
gulp build
cd ../ECAN      
rm -r *
cp -r ../ecanGenerator/dist/* .
gitaj $@
