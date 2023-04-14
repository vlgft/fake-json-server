# **Fake Json Server**

## Init project

> npm init

set package name, version, entry point,...

> create file db.json

## Install

Install json-server, auth and query string

> npm install -D json-server json-server-auth query-string

install nodemon for dev enviroment

> npm i --save-dev nodemon

## Config

### Random test data

- [faker.js](https://github.com/faker-js/faker)
- [casual](https://github.com/boo1ean/casual)
- [Chancejs](https://chancejs.com/usage/node.html)

> create generate-data.js

> add run file to script in package.json

custom api, auth, ...

> edit file server.js

custom routes

> edit file routes.json

database

> db.json

### Usage

Start

> npm start

test auth

> curl --location 'localhost:3000/register' --header 'Content-Type: application/json' --data-raw '{"email": "nilson@email.com","password":"nilson"}'
