'use strict';

import {weekDays, weatherSeverityCodes} from './data.js'

export function weekDay (day) {
    const dayNo = day.getDay()

    return weekDays[dayNo]
}

export function nextDay(day, plusDaysNo = 1) {
    const oneDay = 24*60*60*1000
    return new Date(day.valueOf() + oneDay*plusDaysNo)
}

export function xhRequest(url, method, body=null, dataType='JSON') {
    return new Promise((resolve, reject) => {
    
        let xhr = new XMLHttpRequest()
        if (['GET', 'POST'].includes(method)) xhr.responseType = 'json'
        xhr.open(method, url)

        xhr.onload = () => {
            if (xhr.readyState == 4 && 200 >= xhr.status < 300) resolve(xhr.response)
            else reject("Wrong state/status of the response from the server.")
        }
        xhr.onerror = () => reject(xhr.statusText)

        if (body && dataType == 'JSON') body = JSON.stringify(body)
        xhr.send(body)
    })
}

function dd(int) {
    if (int < 10) return '0'+int
    else return int.toString()
}

function dateFormat(date) {
    const dateFormated = `${date.getFullYear()}-${dd(date.getMonth()+1)}-${dd(date.getDate())}`
    return dateFormated
}

/*
function timeFormat(date) {
    const dateFormated = `${dd(date.getHours())}:${dd(date.getMinutes())}`
    return dateFormated
}

function dateTimeFormat(date) {
    return `${dateFormat(date)} ${timeFormat(date)}`
}
*/

function arrAverage (arr) {
    return arr.reduce((acc, cVal) => acc + cVal)/arr.length
}

function normalizeApiData(apiList) {
    return apiList.map(forecast => ({
        date: forecast.dt_txt.substring(0,10),
        time: forecast.dt_txt.substring(11, 16),
        weatherId: forecast.weather[0].id,
        description: forecast.weather[0].description,
        icon: forecast.weather[0].icon,
        temp: Math.round(forecast.main.temp),
        pressure: forecast.main.pressure,
        humidity: forecast.main.humidity,
        windSpeed: Math.round(forecast.wind.speed),
        windDirection: forecast.wind.deg
    }))
}

function mostSevereForecast (forecastList) {
    let mostSevereForecast = null
    forecastList.forEach(hourForecastItem => {
        if (mostSevereForecast) {
            if (
                weatherSeverityCodes[hourForecastItem.weatherId] > weatherSeverityCodes[mostSevereForecast.weatherId]
            ) mostSevereForecast = Object.assign({}, hourForecastItem)
        } else mostSevereForecast = Object.assign({}, hourForecastItem)
    })
    return mostSevereForecast
}

function dayForecast (forecastList, units) {
    const msForecast = mostSevereForecast(forecastList)
    if (!msForecast) return {}
    const tempArr = forecastList.map(f => f.temp)
    const tempUnit = units == 'metric' ? '°C' : '°F'
    const windUnit = units == 'metric' ? ' m/s' : ' mph'
    return {
        description: msForecast.description,
        icon: msForecast.icon,
        tempMax: Math.max(...tempArr) + tempUnit,
        tempMin: Math.min(...tempArr) + tempUnit,
        pressure: Math.round(Math.max(...forecastList.map(f => f.pressure))) + ' hPa',
        humidity: Math.max(...forecastList.map(f => f.humidity)) + '%',
        windSpeed: Math.max(...forecastList.map(f => f.windSpeed)) + windUnit,
        windDirection: arrAverage(forecastList.map(f => f.windDirection))
    }
}

function addUnits(forecastList, units) {
    const tempUnit = units == 'metric' ? '°C' : '°F'
    const windUnit = units == 'metric' ? ' m/s' : ' mph'
    forecastList.forEach(f => {
        f.temp = f.temp + tempUnit
        f.pressure = Math.round(f.pressure) + ' hPa'
        f.humidity = f.humidity + '%'
        f.windSpeed = f.windSpeed + windUnit
    })
}

export function weatherForecast(state, apiData) {
    if (
        typeof state != 'object' || typeof apiData != 'object' ||
        typeof apiData.city != 'object' || !Array.isArray(apiData.list) ||
        state.cityId != apiData.city.id || !apiData.list.length
    ) return

    const forecastList = normalizeApiData(apiData.list)
    const forecast = [], today = state.today
    let day, dateStr
    for (let i=0; i<5; i++) {
        day = nextDay(today, i)
        dateStr = dateFormat(day)
        forecast[i] = {
            date: dateStr,
            weekDay: weekDays[day.getDay()],
            hourForecast: forecastList.filter(forecast => forecast.date == dateStr)
        }
    }
    forecast.forEach(day => {
        day.dayForecast = dayForecast(day.hourForecast, state.units)
        addUnits(day.hourForecast, state.units)
    })
    return forecast
}