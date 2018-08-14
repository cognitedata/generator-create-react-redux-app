# Generator create-redux-app

This project was bootstrapped with [Cognite Create Redux App](https://github.com/cognitedata/generator-create-react-redux-app). Here you can find information on how to perform common tasks.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-create-redux-app using [yarn](https://www.npmjs.com/) ( **You’ll need to have Node >= 6.10.3 on your machine**  [node.js](https://nodejs.org/)).

```bash
yarn global add yo
yarn global add @cognite/generator-create-redux-app
```

Then generate your new project:

```bash
mkdir project-name
cd project-name
yo @cognite/create-redux-app
```

Once the installation is done, you can run some commands inside the project folder:

### `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## User Guide

- [Folder Structure](#folder-structure)
- [Redux Dev Tools](#redux-dev-tools)
- [Absolute Paths](#absolute-paths)
- [Import Export Containers and Components](#import-export-containers-and-components)
- [Linting](#Linting)
- [Routing](#routing)
- [Styled Components](#styled-components)
- [Generators](#generators)
- [Redux Actions](#redux-actions)
- [Create React App config](#create-react-app-config)


## Folder Structure

Once the generator runs your project folders should look like this:

```
my-app/
  docs/
  generators/
  public/
    index.html
    favicon.ico
  src/
    assets/
    components/
    containers/
    modules/
    routes/
    sagas/
    store/
    reducer/
    styles/
    utils/
    index.js
    setupTests.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.


## Redux Dev Tools

Create Redux App use [Redux DevTools Extension](http://extension.remotedev.io/). It provides access to the most popular monitors, is easy to configure and to filter actions.

### Installation

#### 1. For Chrome
 - from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
 - or build it with `yarn i && yarn run build:extension` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./build/extension`;
 - or run it in dev mode with `yarn i && yarn start` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./dev`.

#### 2. For Firefox
 - from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/remotedev/);
 - or build it with `yarn i && yarn run build:firefox` and [load the extension's folder](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) `./build/firefox` (just select a file from inside the dir).

#### 3. For Electron
  - just specify `REDUX_DEVTOOLS` in [`electron-devtools-installer`](https://github.com/GPMDP/electron-devtools-installer).

#### 4. For other browsers and non-browser environment
  - use [`remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools).

## Absolute Paths
   By default ES6 modules in create-react-app use relative paths, which is fine for cases where the files you’re importing are relatively close within the file tree
  so if the file is in the same folder and next to the file you're importing from, just use relative paths like so:
   ```js
  import { createGoal } from ‘./actions’
  import { selectAuth } from ‘./selectors’
  ```
  But using relative paths is a real pain when you start dealing with deeply nested tree structures because you end up with dot-dot syndrome. Because of the `.env` file at the root level now we can now do absolute path like this:
   ```js
  import { editUser } from ‘containers/AppContainer/actions’
  import { selectAuth } from ‘containers/AppContainer/selectors
  ```

## Import Export Containers and Components

### Export
To Export Components or Containers there is an `index.js` file in each root folder so you have to export it there first in order to import outside the root folder.
  ```js
  index.js/
    export { default as Comp1 } from './Comp1'
    export { default as Comp2 } from './Comp2'
  ```

### Import
To import Components or Containers doit like follow:
  - Inside the same folder (Components/Containers) <br>
    ```js
    import Comp1 from './Comp1'
    import Cont1 from './Cont1'
    ```
  - Outside the same folder (Components/Containers) <br>
    ```js
    import { Comp1 } from '../components'
    import { Cont1 } from '../containers'
    ```
## Linting

We use `@cognite/eslint-config"` that sets up eslint with prettier as a formatter.
Set your editor to run `eslint --fix` on save to get the full benefit.

## Routing

The best option for routing is [React Router](https://reacttraining.com/react-router/) specifically its new version for the web [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start). <br>
`src/routes/index.js` is the starter point of the app, where all the routes are specified and render the containers and components. Specify here all your routes, redirects, transitions, etc.


## Styled Components

[styled-components](https://styled-components.com/) allow you to write actual CSS code in your JavaScript to style your components,
removing the mapping between components and styles.

See the
[official documentation](https://github.com/styled-components/styled-components)
for more information!

### Usage

This creates two react components, `<Title>` and `<Wrapper>`:

```JSX
import React from 'react'

import styled from 'styled-components'

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
```

*(The CSS rules are automatically vendor prefixed, so you don't have to think about it!)*

You render them like so:

```JSX
// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

For further examples see the
[official documentation](https://github.com/styled-components/styled-components).


## Generators

```Shell
yarn generate
```

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s, `module`s and `container`s. You can
also run `yarn run generate <part>` to skip the first selection. (e.g. `yarn
generate container`). This generators are outside yeoman so you can change them to fit your necessities, for this just go to `generators/index.js`, see [plop documentation](https://plopjs.com/documentation/) for more information.

## Create React App config

You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## License

[MIT License](https://github.com/jonidelv/generator-create-redux-app/blob/master/LICENSE)
