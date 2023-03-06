# bhr1

This is a React and TypeScript Project using Vite. The unit tests use Vitest.

The app allows viewing the contents of the root folder and navigating to nested folders.

Future considerations:
* Add routing with react-router, (i.e. `/files/:id`).
* Get the file ID from route params and use this to directly fetch data for the file being viewed, rather than using state.
* Add Cypress tests to test user journeys, i.e. navigating from the root to a nested folder.

Install dependencies:
```
yarn
```

Run the app:
```
yarn dev
```

Run the unit tests:
```
yarn test
```
