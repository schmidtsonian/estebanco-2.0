#!/bin/bash

source bin/constants.sh

echo "Name of atom?"
read -r name

atomName=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '-'`
atomNameSnakeCase=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '_'`

directoryScss=$PATH_SCSS_ATOMS/$atomName
fileRootScss=$directoryScss/_atom-$atomName.scss
fileBaseScss=$directoryScss/_atom-$atomName-[base].scss

filePug=$PATH_PUGS_ATOMS/_atom_$atomNameSnakeCase.pug

echo "mixin atom_$atomNameSnakeCase()" > $filePug

echo "${TEXT_COLOR_BLUE}$filePug${TEXT_NORMAL} done"

mkdir $directoryScss

echo "
/*=============================================
=                 atom-$atomName              =
=============================================*/

/*----------  Core  ----------*/
@import 'atom-$atomName-[base]';

/*----------  Enhacements  ----------*/

" > $fileRootScss

echo "${TEXT_COLOR_BLUE}$fileRootScss${TEXT_NORMAL} done"

echo "" > $fileBaseScss