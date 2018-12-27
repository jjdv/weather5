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

## Comments

### App ideas and final concept

#### Technology
Since I had a freedom in choosing technology I used my favourite (i.e. considered as most effective and concise) technologies and frameworks. These are Vue.js/Vuex/Vue router with Vuetify on the front-end and Node/Express on the backend.

#### Goals
There were three main goals in mind when choosing app solutions:
1. Functionality, i.e. delivery to user all usefull info available from the API
2. User experience. This means for me mainly a clear user interface with a natural, convenient navigation, at a good aesthetic level.
3. App load time, which translates into a lightweight solutions the limited number of server calls. (It's also an element of the user experience but worth of a dedicated attention.)
 
#### Solution
The API features and limitations, the app goals and the time devoted for the app resulted in the following solution elements:
- two main forecast views:
    - 5-day forecast overview and
    - a detailed forecast for a given day
- responsive design (which is a must nowadays anyway) with the views available statically for wider screens and dynamically (with a drawer) for smaller devices.
- setup of the app (units and city) displayed at the start for new users and retrived automatically (from localStore) for the users coming back
- a dedicated server/api to deliver a list of cities which match the selected city fragment. This is used to enable selection of the city from a city list and, at the same time, avoid loading to the browser the city list file (28MB) available from the regular API.

### Tradeoffs
Here are the features which hasn't been implemented due to some limitations:
- The city list is loaded to the api server from the file (at the start and filtered later on) and not from a database. Implementing a database would significantly decrease the app code portability and complicate the installation process of the development version.
- The available cities are limited to four countries: UK, USA, Ireland and Poland. The free version of the internet server used had some problems with processing the original file so I decreased its size by limiting cities available for selection.

### Possible improvements
As usuall, there a endless possibilities to improve the app ;) so I focus here on the key ones:
- The regular weather API provides data for tons of cities. Very often there are at least a few cities available on the list with the same city name (you don't see it due to cities limited to 4 countries). Ideally the app should use the geographic coordinates provided in the city list to display available cities on a map and allow user to choose a city from the map.
- The app could somehow get the info about sunrise and sunset times for a given day and reflect it in the icon background/tone diplayed for a given time. Maybe even decoding the icon code provided by the API (d/n) would suffice.
- the city list, provided by the regular API, needs some sanity check ;)
- the app could be implemented as PWA although it would only improve the convenience to run the app. Besides that, this is not a big improvement for the app which needs to fetch the forecast data each time it is used.
- an UX/UI designers could certainly help to give the app great final touch

