# SignUp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## libraries
- Angular 11 & Angular CLI
- Bulma CSS framework https://bulma.io/
- FakerJs for mocking data in integration test https://fakerjsdocs.netlify.app/

## Folder structure

- Root: e2e; Where integration test is manage
  - Locators: Map for elements with `[data-locator]` attribute, that attribute is used to locate elements for test
  - PageObject: Breaking page into objects to make it easier for accessing in spec while writing test cases
  - Data: Map for static data, like error message, so the spec file will be clean and more focus on test flow, also easier to manage changes in static data.
  - Specs: spec file to test the integrated components in Sign Up single page app

- Root: src/app; source code for the app
  - App root component: main component for the app
  - App module: main module for the app
  - Components:
    - All child components that are used in main component app
    - All components are dumb except the `SignUpFormComponent` , that one is a smart component where the logic for calling the API is managed and all child components are render with needed inputs
  - Services:
    - `UserService` where the API call for demoAPI is managed
  - Shared:
    - Validation: reactive form validation along with validation messages
    - Models: types & interfaces

## Architecture & approach
- Full adoption of Angular framework, for example using Reactive forms.
- Smart & dumb components:
  - Where the business log is manage in smart components and dumb component are only for presentational layer, dumb components are `NotificationComponent`, `FieldValidationMessageComponent` and smart component is `SignUpFormComponent`
  - `SignUpFormComponent` includes a presentational layer but since the application is not complex I decided to make the smart component but that can be improved
- Using a light weigh CSS Framework "Bulma"
  - Save time to focus on application logic
  - Zero CSS/styles
  - responsiveness and more...
- Unit testing: basic unit test and not covering all units
- E2E/Integration test, provided coverage for two scenarios
  - Fill all required info and submit, verify that success notification is shown
  - Skip one required filed and verify that validation error is shown for each field with the correct message
  - Note: test is not stable because of missing password pattern for `fackerJs` password mock method

## Resources
- Valid password pattern: https://www.w3resource.com/javascript/form/email-validation.php
- Valid email pattern: https://stackoverflow.com/questions/5601647/html5-email-input-pattern-attribute

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
