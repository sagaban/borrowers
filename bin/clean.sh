#!/bin/bash

rm -rf node_modules bower_components dist tmp
npm cache clean
bower cache clean
npm install
bower install