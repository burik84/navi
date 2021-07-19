# navi

| Comment | Date |ver. |
| ------ | ------ |------ |
| current | 01.10.2018 | v4.18.12 |
| update | 01.06.2021 | v5.00.01 |

## Use

Use the web-browser as a navigator for documentation, instructions and diagrams.
All information used in the project must be decomposed into folders and grouped.
Further use suggests adding new files to the appropriate category and updating links in the project.

I see the further development of the project -

- study and use ui/ux for convenient use
- adaptive view
- use React+Typescript
- open source project

Before using

- create folder with any name (etc. Navi)
- copy folder public and dist in new folder (Navi)
- open folder dist
- run index.html

## Support

- dist // files and folder for production
  - assets  // files and folder to work locale
    - fonts
- public // static files and folder for works Application
- src // files and folder for development
  - assets // files and folder for compilation
  - script // files scripts .tsx
  - styles // files styles .scss

### Plugins

- React
- Typescript
- SCSS
- Webpack
- Eslint
- Prettier

Other folders and files use old version. I dont use it after **update**.

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

### Downloading

```cmd
git clone {repository URL}
```

### Installing NPM modules

```cmd
npm install
```

### Running application

```cmd
npm run dev //mode developer
npm run build //mode production
npm run server //start server in mode developer
```

Check file from Eslint in folder src before running app

```cmd
npm run lint
```

Check and Write file Prettier in folder src before running app

```cmd
npm run prettier
```
