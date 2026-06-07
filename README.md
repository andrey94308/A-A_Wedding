# Anna & Andrey Wedding Invite

Angular + TypeScript + Tailwind MVP for personalized wedding invitation pages:

```text
/invite/{uuid}
```

The current fallback links are:

```text
/invite/demo-guest
/invite/demo-anna-andrey
```

## Google Sheets setup

For reading guests, publish a Google Sheet as CSV and paste the URL into
`src/app/core/invite-source.config.ts` as `GOOGLE_SHEETS_CSV_URL`.

Recommended columns:

```text
uuid,firstName,lastName,email,partySize,tableName,note
```

For writing RSVP/email updates, create a Google Apps Script web app that accepts
`POST` JSON and paste its URL into `RSVP_SCRIPT_URL`. Keeping writes behind Apps
Script avoids exposing Google API credentials in the browser.

## GitHub Pages build

Use:

```bash
npm run build:gh-pages
```

This builds with `/A-A_Wedding/` as the base href and creates `404.html` for
direct links like `/invite/{uuid}` on GitHub Pages.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
