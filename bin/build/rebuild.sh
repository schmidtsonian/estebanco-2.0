#!/bin/bash

rm -rf node_modules
rm -rf public
rm package-lock.json
npm install
gulp && gulp watch