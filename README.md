# Javascript ES6 + Docker template

## Features
[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
- Supports ES6 syntax out-of-the-box.
- Developer mode using nodemon and production mode using Docker.
- Contains ESLint for better coding.
- Designed for Javascript Standard style.


## How to use

1. Edit [package.json](./app/package.json) file (set name and description fields).
2. Add your libraries and run your app in developer mode (nodemon):
```sh
cd app/
yarn install
yarn dev
```
3. For production use:
```sh
sudo docker-compose up -d
```
1. To lint code:
```sh
./app/node_modules/.bin/eslint ./app
```