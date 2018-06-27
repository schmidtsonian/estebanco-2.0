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

echo "${TEXT_BOLD}Are you sure you want to delete this:${TEXT_NORMAL}"
echo $filePug
echo $directoryPug
echo $fileJson
echo $fileRootScss
echo $fileBaseScss
echo $directoryScss/
echo "${TEXT_BOLD}[Y/n]?${TEXT_NORMAL}"
read -r confirm

if [[ $confirm == 'y' || $confirm == 'Y' ]]; then

  echo "${TEXT_BOLD}You are the boss...${TEXT_NORMAL}"

  rm -rf $directoryPug
  echo "${TEXT_COLOR_RED}$filePug${TEXT_NORMAL} done"
  echo "${TEXT_COLOR_RED}$directoryPug${TEXT_NORMAL} done"

  rm $fileJson
  echo "${TEXT_COLOR_RED}$fileJson${TEXT_NORMAL} done"

  rm -rf $directoryScss
  echo "${TEXT_COLOR_RED}$directoryScss${TEXT_NORMAL} done"
  echo "${TEXT_COLOR_RED}$fileBaseScss${TEXT_NORMAL} done"
  echo "${TEXT_COLOR_RED}$directoryScss/${TEXT_NORMAL} done"

else
  echo "${TEXT_BOLD}Don't play with me boy!${TEXT_NORMAL}"
fi
