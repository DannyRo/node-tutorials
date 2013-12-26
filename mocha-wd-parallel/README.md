Parallel tests with Mocha and WD.js 
=============

In this tutorial you will learn how to run tests in parallel using WD.js 
and Mocha.

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
npm install mocha -g 
```

## 3/ Install local package

In this tutorial directory (there should be a `package.json` file) run:

```
npm install 
```

## 4/ Inspect the code

- The browsers are configured in `desireds.js`
- The mocha test suite is in `tutorial-specs.js`
- The mocha test suite is in `parallel-mochas.js`

## 5/ Run tests

```
BROWSER='chrome' mocha --reporter spec *-specs.js
BROWSER='firefox' mocha --reporter spec *-specs.js
BROWSER='explorer' mocha --reporter spec *-specs.js
```

Go [here](https://saucelabs.com/tests) to view the tests.

## 6/ Run tests in parallel

```
node parallel-mochas '--reporter spec *-specs.js' chrome firefox explorer
```

Go [here](https://saucelabs.com/tests) to view the tests.
