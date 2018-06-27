#!/bin/bash

source bin/constants.sh

echo "Name of template?"
read -r name

templateName=`echo "$name" | tr '[A-Z]' '[a-z]' | sed 's/[^a-z  A-Z]//g' | tr ' ' '-'`

directoryPug=$PATH_PUGS/$templateName
filePug=$directoryPug/index.pug

fileJson=$PATH_JSONS/page-$templateName.json

directoryScss=$PATH_SCSS_TEMPLATES/$templateName
fileRootScss=$directoryScss/_$templateName.scss
fileBaseScss=$directoryScss/_$templateName-[base].scss



mkdir $directoryPug
echo "extends ../_layout/master/_master

block body

  #$templateName.h-invisible
    h1 about" > $filePug

echo "${TEXT_COLOR_BLUE}$filePug${TEXT_NORMAL} done"




echo "{
  \"$templateName\": {
    \"title\": \"hello $templateName\"
  }
}" > $fileJson

echo "${TEXT_COLOR_BLUE}$fileJson${TEXT_NORMAL} done"




mkdir $directoryScss
echo "
/*=============================================
=                 $templateName               =
=============================================*/

/*----------  Core  ----------*/
@import '$templateName-[base]';

/*----------  Enhacements  ----------*/

" > $fileRootScss

echo "${TEXT_COLOR_BLUE}$fileRootScss${TEXT_NORMAL} done"




echo "" > $fileBaseScss

echo "${TEXT_COLOR_BLUE}$fileBaseScss${TEXT_NORMAL} done"