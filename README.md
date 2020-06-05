# Grommet Web Extension Starter

Web extension starter kit built with Grommet, React, Styled Components, Babel, Webpack, Jest, Enzyme, ESLint, Prettier, Husky.

Compatible with Google Chrome, Mozilla Firefox, Microsoft Edge and Brave Browser.

## Getting Started

Install dependencies and start local development

```
npm install (or yarn)
npm start
```

<details>
  <summary>Load extension in Chrome</summary>

1. Visit `chrome://extensions` and enable _Developer mode_
2. Choose _Load unpacked_ and point to the `dist` directory in your new project

   </details>

<details>
  <summary>Load extension in Firefox</summary>

1. Go to _Add-ons_ from menu
2. In _Manage Your Extensions_, select _Debug Add-ons_ from the settings menu
3. Choose _Load Temporary Add-on..._ and point to the manifest file in the `dist` directory of your new project

</details>

<details>
  <summary>Load extension in Edge</summary>

1. Visit `edge://extensions` and enable _Developer mode_
2. Choose _Load unpacked_ and point to the `dist` directory in your new project

</details>

<details>
  <summary>Load extension in Brave</summary>

1. Visit `brave://extensions` and enable _Developer mode_
2. Choose _Load unpacked_ and point to the `dist` directory in your new project

</details>

## Scripts

`npm run build` - Builds a production-ready unpacked extension  
`npm start` - Runs webpack in watch mode  
`npm test` - Runs test suite  
`npm run lint` - Runs linter on source files  
`npm run prettify` - Formats all source files

## VSCode Settings

#### Prettier

1. Install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension from the marketplace
2. Open VS Code's user settings/preferences as JSON and put the following:

```
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
```

If you want to limit the scope to the current project only, create a new file `.vscode/settings.json` in the root of your project and paste the settings from above.

#### ESLint

Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension from the marketplace to enable seamless linting as you type in VSCode.

#### EditorConfig

Install the [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension from the marketplace.

## Built with

- [Grommet](https://v2.grommet.io/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint staged](https://github.com/okonet/lint-staged)
- [Jest](https://jestjs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Webpack Chrome Extension Reloader](webpack-chrome-extension-reloader)

## References

- [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
- [Firefox Extension Developer Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
