# _leaflet-toolkit_

![github](https://img.shields.io/github/stars/institutohidrografico/leaflet-toolkit "Github")

![Node.js](https://img.shields.io/badge/Node.js-22.17-339933?logo=node.js)
![npm](https://img.shields.io/badge/npm-10.9.2-CB3837?logo=npm)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)

## how to publish a library on npm
After creating an account on npmjs.com

```
npm adduser
npm run build
npm publish --access public
```

```
npm install tslib leaflet
npm install --save-dev @types/leaflet
npm install --save-dev rollup @rollup/plugin-url @rollup/plugin-typescript rollup-plugin-postcss 
```

## how publish on git packages
After add .npmrc file on project

```
npm publish --registry=https://npm.pkg.github.com
npm publish --registry=https://registry.npmjs.org/
npm login --registry=https://registry.npmjs.org/
```

# how update version
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/InstitutoHidrografico/leaflet-toolkit.git
git push -u origin main
```