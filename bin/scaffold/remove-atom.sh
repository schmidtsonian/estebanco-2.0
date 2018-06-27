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

echo "${TEXT_BOLD}Are you sure you want to delete this:${TEXT_NORMAL}"
echo $fileBaseScss
echo $fileRootScss
echo $directoryScss/
echo $filePug
echo "${TEXT_BOLD}[Y/n]?${TEXT_NORMAL}"
read -r confirm

if [[ $confirm == 'y' || $confirm == 'Y' ]]; then

  echo "${TEXT_BOLD}As you wich...${TEXT_NORMAL}"

  rm -rf $directoryScss
  echo "${TEXT_COLOR_RED}$fileBaseScss${TEXT_NORMAL} done"
  echo "${TEXT_COLOR_RED}$fileRootScss${TEXT_NORMAL} done"
  echo "${TEXT_COLOR_RED}$directoryScss/${TEXT_NORMAL} done"

  rm $filePug
  echo "${TEXT_COLOR_RED}$filePug${TEXT_NORMAL} done"

else
  echo "${TEXT_BOLD}meh!${TEXT_NORMAL}"
fi
