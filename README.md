# Weather5 Project

## Overview
This project was built to play with the [Openweather API](https://openweathermap.org/forecast5). The 5 day weather forecast data was used.   
The main technologies used are Vue.js/Vuex/Vue router with Vuetify on the front-end and Node/Express on the backend.   
You can play with the working app under <http://weather5.appspot.com>.

## Project setup
Assuming you have [Node.js](https://nodejs.org/en/) installed, which includes npm, please copy this repository to a local project folder. Start a terminal, change the working directory to the project folder and run:
```
npm install
```
Stay in the project working directory for all the following commands.

### Compiles and hot-reloads for development
In order to run a developement version of the project run:
```
npm run serve
```
Since the project uses dynamic list of cities when choosing a city name for the forecast, please start another terminal, change to the project directory and run:
```
node server\static-server.js
```
After starting both servers you can play with the app in your browser under: `http://localhost:3000` or, in case you have the `process.env.PORT` defined, replace the port number 3000 in the url with the one defined.

### Compiles and minifies for production
To create the production version hit:
```
npm run build
```
To play with the production version locally, start the static server with the command:
```
node server\static-server.js
```
and view the app under `http://localhost:3000` with your browser.   
The same production version is available at <http://weather5.appspot.com>.
