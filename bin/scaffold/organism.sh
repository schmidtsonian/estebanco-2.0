#!/bin/bash

source bin/constants.sh

echo "Name of organism?"
read -r name

organismName=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '-'`
organismNameSnakeCase=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '_'`

directoryScss=$PATH_SCSS_ORGANISMS/$organismName
fileRootScss=$directoryScss/_organism-$organismName.scss
fileBaseScss=$directoryScss/_organism-$organismName-[base].scss

filePug=$PATH_PUGS_ORGANISMS/_organism_$organismNameSnakeCase.pug

echo "mixin organism_$organismNameSnakeCase()" > $filePug

echo "${TEXT_COLOR_BLUE}$filePug${TEXT_NORMAL} done"

mkdir $directoryScss

echo "
/*=============================================
=             organism-$organismName          =
=============================================*/

/*----------  Core  ----------*/
@import 'organism-$organismName-[base]';

/*----------  Enhacements  ----------*/

" > $fileRootScss

echo "${TEXT_COLOR_BLUE}$fileRootScss${TEXT_NORMAL} done"

echo "" > $fileBaseScss