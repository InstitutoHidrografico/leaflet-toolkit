# 🗺️ _leaflet-toolkit_

![github](https://img.shields.io/github/stars/institutohidrografico/leaflet-toolkit "Github")

![Node.js](https://img.shields.io/badge/Node.js-22.17-339933?logo=node.js)
![npm](https://img.shields.io/badge/npm-10.9.2-CB3837?logo=npm)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)

A versatile platform designed for the consolidation of georeferenced data, enabling its use in spatial analysis, monitoring, decision-making, and real-time interdisciplinary applications.
Perfect for maritime applications, hydrographic surveys, nautical charts, ship tracking, and marine navigation systems.

## Installation
npm install @institutohidrografico/leaflet-toolkit

## Development
### setup
```
# clone the repository
git clone https://github.com/institutohidrografico/leaflet-toolkit.git
cd leaflet-toolkit

# install dependencies
npm install

# cuild the library
npm run build
```
### building
```
npm run build
```
### publishing
to npm Registry
```
# login to npm (first time only)
npm login

# build and publish
npm run build
npm publish --access public
```
to GitHub Packages
create a .npmrc file in your project root:
```
@institutohidrografico:registry=https://npm.pkg.github.com
```
then publish
```
npm publish --registry=https://npm.pkg.github.com
```

## Roadmap
### in development
- [x] hospedagem: vercel;
- [x] visualização de clusters de pontos;
- [x] visualização de linhas (rotas, conexões) no mapa;
- [x] visualização de imagens georeferenciadas;
- [x] visualização de polígonos (áreas, regiões) no mapa;
- [x] upload de dados (txt, CSV, GeoJSON, Shapefiles, KML/KMZ): em colunas de latitude/longitude;
- [x] cálculo de distâncias;
- [x] desenho derrota;
- [ ] lighthouses, tide stations, and ETA calculations
- [ ] ship Tracking - real-time vessel monitoring and trackin
- [ ] controle de opacidade;
- [ ] integração com APIs de dados externos: AIS
- [ ] alertas de colisão baseados em rotas;
- [ ] otimização de rotas considerando correntes e clima;
- [ ] pontos coloridos por valor;
- [ ] popups com detalhes ao clicar;
- [ ] correntes marítimas com vetores animados;
- [ ] heatmaps (densidade de dados: população, temperatura, profundidade);
- [ ] painel lateral com estatísticas;
- [ ] gráficos sincronizados com o mapa (ao selecionar área, atualiza gráficos)
- [ ] pesquisa rápida
- [ ] filtros dinâmicos em tempo real;
- [ ] filtros por data, categoria, região;
- [ ] consultas espaciais ("dentro de", "próximo a");
- [ ] slider range da timeline para visualização de dados históricos
- [ ] exportação de visualização de imagens, relatórios [pdf, txt];

### in concept
- [ ] workspaces salvos na nuvem, privado ou compartilhado
- [ ] compartilhamento de visualizações via link
- [ ] anotações colaborativas no mapa
- [ ] salvar/recuperar workspace;
- [ ] compartilhamento de dashboards
- [ ] salvamento de configurações

## developer installations
```
npm install tslib leaflet
npm install --save-dev @types/leaflet
npm install --save-dev rollup @rollup/plugin-url @rollup/plugin-typescript rollup-plugin-postcss 
```

## git developer
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/InstitutoHidrografico/leaflet-toolkit.git
git push -u origin main
```