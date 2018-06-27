#!/bin/bash

echo "Name?"
read -r name

newName=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '-'`
echo $newName