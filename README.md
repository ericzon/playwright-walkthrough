# Intro
Just a quick walkthrough to start using Playwright. I was made for me but glad if it was also useful for you.


## How to begin

Run this command in your empty project folder and follow the steps:
```
npm init playwright@latest
```


### Output message after install

Inside that directory, you can run several commands:
```
npx playwright test
```
Runs the end-to-end tests.

```
npx playwright test --project=chromium
```
Runs the tests only on Desktop Chrome.

```
npx playwright test example
```
Runs the tests in a specific file.
```
npx playwright test --debug
```
Runs the tests in debug mode.
```
npx playwright codegen
```
Auto generate tests with Codegen.

We suggest that you begin by typing:
```
npx playwright test
```
And check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information

## How to start debugging

To open a browser during the tests & see the real-time execution:
```
export PWDEBUG=console
```
To open Playwrigth Inspector:
```js
await page.pause();
```