'use strict';

import Vue from 'vue'
import Vuex from 'vuex'
import {APPID} from './data.js'
import {xhRequest, weatherForecast} from './helpers.js'
import {settingsStore} from './settings.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarOn: false,
    today: new Date(),
    cityId: settingsStore.cityId,
    cityName: settingsStore.cityName,
    units: settingsStore.units,
    forecast: null,
    forecastState: null,
    forecastTimeStamp: null
  },
  getters: {
    forecastOverview: state => {
      if (!state.forecast) return []

      const forecastOverview = []
      state.forecast.forEach((day, index) => {
        forecastOverview[index] = {
          date: day.date,
          weekDay: day.weekDay,
          ...day.dayForecast
        }
      })
      return forecastOverview
    }
},
  mutations: {
    sidebarOn: (state, value) => state.sidebarOn = value,
    cityId: (state, value) => {
      state.cityId = value
      settingsStore.cityId = value
    },
    cityName: (state, value) => {
      state.cityName = value
      settingsStore.cityName = value
    },
    units: (state, value) => {
      state.units = value
      settingsStore.units = value
    },
    forecast: (state, value) => state.forecast = value,
    forecastState: (state, value) => state.forecastState = value,
    forecastTimeStamp: (state, value) => state.forecastTimeStamp = value
  },
  actions: {
    getForecast ({ state, commit }) {
      if (!state.cityId || !state.units) return

      const conf = `mode=json&APPID=${APPID}`
      const url = `http://api.openweathermap.org/data/2.5/forecast?id=${state.cityId}&units=${state.units}&${conf}`
      xhRequest(url, 'GET')
      .then(apiData => {
        const forecastData = weatherForecast(state, apiData)
        commit('forecast', forecastData)
        commit('forecastTimeStamp', new Date())
        commit('forecastState', 'loaded')
      })
      .catch(errorMsg => alert(errorMsg))
      commit('forecastState', 'loading')
    }
  }
})
