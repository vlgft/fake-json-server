#!/bin/bash

if [[ npm install -g json-server ]] 
then
    npm i json-server --save
fi 
npm install jsonwebtoken --save
npm i body-parser --save

# install with dev enviroment
# env dev auto refresh
npm i nodemon --save-dev
# generate data to db
npm i casual --save-dev