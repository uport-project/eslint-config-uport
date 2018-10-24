# uPort Shared ESLint Configs

**An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) based on [standardjs](https://github.com/standard/eslint-config-standard) and using [prettier](https://github.com/prettier/prettier) for formatting.**

## Installation

Install this module as a dev dependency.

```
npm i -D eslint-config-uport
```

Install the peer dependencies of this module as dev dependencies.

```
npm i -D eslint babel-eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier prettier
```

Install the remaining peer dependencies of `eslint-config-standard` as dev dependencies.

```
npm i -D eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

Create `.eslintrc.js` in the root folder of your project and extend this configuration.

```
module.exports = {
  extends: 'uport',
  rules: {
    // configure your own custom rules
  }
}
```

Add the following scripts to your `package.json`

```
"scripts": {
  "lint": "eslint ./src",
  "format": "eslint --fix ./src"
}
```

## VSCode Support

In order to allow the formatting to be handled through `eslint` along with automatic fixes when saving, you should **disable** the `Prettier` extension and make sure the `eslint` extension is enabled. Add the following configurations to your User Settings json:

```
  "editor.formatOnSave": false,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true
```