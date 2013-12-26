grunt-wd-parallel Tutorial
=============

In this tutorial you will learn how to scaffold a project using `grunt-init-sauce`.

## 1/ Install tools

```
npm install grunt -g
npm install grunt-init-g
git clone git@github.com:saucelabs/grunt-init-sauce.git ~/.grunt-init/sauce
```

## 1/ Generate project

```
mkdir tutorial && cd tutorial
grunt init sauce # press enter when asked
npm install
```

## 1/ Run tests

```
grunt test:sauce:chrome
grunt test:sauce:firefox
grunt test:sauce:explorer
```

## 1/ Run tests in parallel

```
grunt test:sauce:parallel
```
