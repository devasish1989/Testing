# Project Overview - TequilaMockingbird

The purpose of this project is to supply a project to test your code-testing abilities. Included is a small webapp that pulls from an API, and displays results. There's also an e2e testbed ([Protractor](http://www.protractortest.org/)) as well as a unit test testbed ([Karma](https://karma-runner.github.io)). See below or `package.json` for details on running each.

## Tasks to Complete
There are a handfull of test files (`*.spec.ts`) that are filled with either failing units (example `src/app/services/cocktail.service.spec.ts`) or prompts to add unit tests (example `src/app/pipes/truncate.pipe.spec.ts`). 

The tasks to complete are marked by both `// TODO:` markers as well as filled with a failing test (`expect(false).toBeTruthy();`). Please see and complete those. 

Additionally, there's an e2e spec file (`app.e2e-spec.ts`) that has empty test clauses for your attention.

Please make it as far as you can, and add additional test cases where you see fit to.

## Delivery on Completion
Please push your completed code repository to a remote repository (GitHub, Bitbucket) and provide us with the url and public access.

## Starting Coverage

Coverage at last checkin:
```
Chrome 86.0.4240 (Mac OS X 10.13.6): Executed 59 of 59 (21 FAILED) (0.867 secs / 0.653 secs)
TOTAL: 21 FAILED, 38 SUCCESS
TOTAL: 21 FAILED, 38 SUCCESS
TOTAL: 21 FAILED, 38 SUCCESS

=============================== Coverage summary ===============================
Statements   : 61.57% ( 165/268 )
Branches     : 27.27% ( 12/44 )
Functions    : 54.64% ( 53/97 )
Lines        : 59.77% ( 153/256 )
================================================================================
```

--- 

## More Info 

- Using Angular 9 (as mentioned below), Angular Material, and NGXS for state management throughout.
- Data provided by [TheCocktailDB](https://www.thecocktaildb.com/).
- Name inspiration from [Tequila Mockingbird: Cocktails with a Literary Twist](https://www.runningpress.com/titles/tim-federle/tequila-mockingbird/9780762448654/) book by Tim Federle.
- Setup should be straightforward as listed below, might need an `npm install` before running `ng serve` to bring the project up.
- Code coverage - `ng test --no-watch --code-coverage`
- Original attribution - Austin Krueger 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

### ...more Angular default README below

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
