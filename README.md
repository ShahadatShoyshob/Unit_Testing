# Calculator Web App — Unit Testing with Mocha, Chai & JSDOM

This repository contains a small **JavaScript calculator** (HTML/CSS/JS) created for a university project focused on **unit testing**.

It includes:
- A simple browser calculator UI (`index.html`, `style.css`)
- Calculator logic functions (`script.js`)
- Automated unit tests using **Mocha** + **Chai** with **JSDOM** (`test/script.test.js`)

---

## Features

### Calculator Functions (script.js)
The calculator provides common operations such as:

- Input editing: `addChar`, `deleteChar`, `changeSign`
- Trigonometry: `sin`, `cos`, `tan`
- Math functions: `sqrt`, `square`, `ln`, `exp`, `percent`
- Expression evaluation: `compute`
- Input validation: `checkNum`

All functions are exported as ES modules so they can be tested from Node.js.

---

## Tech Stack

- JavaScript (ES Modules)
- **Mocha** (test runner)
- **Chai** (assertions)
- **JSDOM** (DOM simulation for form/input testing)

---

## Project Structure

```
Unit test/
├─ index.html
├─ style.css
├─ script.js
├─ package.json
├─ package-lock.json
└─ test/
   └─ script.test.js
```

---

## Run the App (Browser)

Open `index.html` in your browser to use the calculator.

> Tip: If your browser blocks local scripts, run a local server:
```bash
npx http-server .
```
(or use VS Code “Live Server”)

---

## Install & Run Unit Tests

### 1) Install dependencies
From inside the `Unit test` folder:

```bash
npm install
```

### 2) Run tests
```bash
npm test
```

This runs Mocha and executes the test suite in `test/script.test.js`.

---

## What the Tests Cover

The test file validates key behaviors such as:

- `addChar` correctly appending characters to the input
- `deleteChar` removing the last character
- `compute` evaluating expressions
- `percent` formatting values as percentages
- `checkNum` allowing only valid numeric/operator characters
- Trigonometric and math functions producing expected numeric outputs

JSDOM is used to create mock `<form>` and `<input>` elements so the functions can be tested without a real browser.

---

## Notes / Limitations

- This is a coursework project aimed at learning **unit testing** and **DOM testing**.
- `compute` relies on evaluating expressions; for production code you would typically implement a safer parser.

---
