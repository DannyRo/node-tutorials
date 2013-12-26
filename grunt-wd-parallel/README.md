grunt-wd-parallel Tutorial
=============

In this tutorial you will learn how to scaffold a project using `grunt-init-sauce`.

## 1/ Configure your Sauce Labs credentials

First you may need to create a Sauce Labs account (Go 
[here](https://saucelabs.com/signup), there is a free plan.) and enter your 
credentials as in the following:  

```
export SAUCE_USERNAME=<SAUCE_USERNAME>
export SAUCE_ACCESS_KEY=<SAUCE_ACCESS_KEY>
```

## 2/ Install tools

```
npm install grunt -g
npm install grunt-init-g
git clone git@github.com:saucelabs/grunt-init-sauce.git ~/.grunt-init/sauce
```

## 3/ Generate project

```
mkdir tutorial && cd tutorial
grunt init sauce # press enter when asked
npm install
```

## 4/ Run tests

```
grunt test:sauce:chrome
grunt test:sauce:firefox
grunt test:sauce:explorer
```

## 5/ Run tests in parallel

```
grunt test:sauce:parallel
```
