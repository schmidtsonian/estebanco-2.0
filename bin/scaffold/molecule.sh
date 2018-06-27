#!/bin/bash

source bin/constants.sh

echo "Name of molecule?"
read -r name

moleculeName=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '-'`
moleculeNameSnakeCase=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '_'`

directoryScss=$PATH_SCSS_MOLECULES/$moleculeName
fileRootScss=$directoryScss/_molecule-$moleculeName.scss
fileBaseScss=$directoryScss/_molecule-$moleculeName-[base].scss

filePug=$PATH_PUGS_MOLECULES/_molecule_$moleculeNameSnakeCase.pug

echo "mixin molecule_$moleculeNameSnakeCase()" > $filePug

echo "${TEXT_COLOR_BLUE}$filePug${TEXT_NORMAL} done"

mkdir $directoryScss

echo "
/*=============================================
=             molecule-$moleculeName          =
=============================================*/

/*----------  Core  ----------*/
@import 'molecule-$moleculeName-[base]';

/*----------  Enhacements  ----------*/

" > $fileRootScss

echo "${TEXT_COLOR_BLUE}$fileRootScss${TEXT_NORMAL} done"

echo "" > $fileBaseScss