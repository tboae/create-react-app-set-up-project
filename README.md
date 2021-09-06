# Create React App Skeleton Project

**contains: Storybook, Material UI, ESlint, Prettier and husky**

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    npx create-react-app [project-name]

<!-- ![Screenshot](images/ProjectLayout.png) -->

## `Visual Studio Code`

Please use VSCode for all ReactJS development.\
[VSCode Download page](https://code.visualstudio.com/download)

## Installed Libraries

### [`ESlint`](https://eslint.org/)

A linter analyses your code statically. It checks out the code without executing it.
`ESLint` is an open-source project initially created by Nicholas C. Zakas, which provides a pluggable linting utility for JavaScript.\
It provides the first layer of safety in your application development.\
`ESLint` parses your code, analyses it, and runs linting rules. These rules may trigger warnings or errors to let you know if your code is right or wrong.

**Install ESLint**\
In an terminal (Terminal -> New Terminal) opened on a project in VSCode.

```js
npm install eslint --save-dev
```

**Note:** You can also use the [ESLint extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)\
It'll deeply improve your developer experience by highlighting errors and warnings directly in your code. Prettier can also be executed on each save.

**Configure ESLint**\
Add the following files to the root of the application project.\
_.eslintrc_

```json
{
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  },
  "plugins": ["import"],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "17.0.2"
    }
  }
}
```

_.eslintignore_

```css
node_modules/
package.json
package-lock.json
settings.json
manifest.json

```

You can now run Lint with

```js
npm run lint

```

### [`Prettier`](https://prettier.io/)

`Prettier` helps in formatting the code. It makes sure the entire codebase looks uniform when there are multiple developers working on it.

**Install Prettier**

In an terminal opened on a project in VSCode.

```js
npm install prettier --save-dev

```

**Configure Prettier**

_.prettierrc_

```json
{
  "printWidth": 75,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "auto",
  "semi": true
}
```

_.prettierignore_

```
node_modules/
package.json
package-lock.json
settings.json
manifest.json
```

Add the following to _package.json_

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.+(js|jsx|json|css|md)\""
  }
}
```

Now you can run prettier with

```
npm run format**
```

to format your entire codebase.

### `Prettier-eslint`

`ESLint` can also format your code to some extent. As we are using `Prettier`, we need to replace ESLint’s formatting rules.\

We replace ESLint’s formatting rules and not the code-quality rules. ESLint will still check the quality for us based on the rules specified.\

The following packages need to be installed

```
eslint-config-prettier disables rules that conflict with Prettier
eslint-plugin-prettier adds the rule that format content using Prettier
```

_Install prettier-eslint_

```
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

### [`husky`](https://typicode.github.io/husky/#/)

You can make use of Git hooks to run ESLint and Prettier before each commit or each push. Then, your code is constantly linted and formatted before deploying to production using husky

_Install husky_

```
npm install --save-dev husky
```

_Insert the following in *package.json*_

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint && npm run format"
    }
  }
}
```

At each commit, the command associated with pre-commit will be run. So your codebase will be linted and formatted.

### `Material UI core and icons`

Material UI is a large component library and is aligned with Material Design by Google. Material UI provides access to a fully customisable theme that can be overridden at the root App level.  
Material UI also provides a huge set of icons that are easily imported, implemented and customised.

#### Custom Theming

### `Storybook`

    npx sb init

### `Project Structure`

    jsconfig.json\
    .env

### `Folder Structure`

### `Useful VSCode Extensions`

1. Thunder Client
