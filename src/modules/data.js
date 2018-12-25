'use strict';

export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const cityNameRgx = /, [A-Z]{2} {4}\(Lt: .*\)$/

export const APPID = '989269eff14327f8bff46cbd02aaffdb'

export const weatherSeverityCodes = {
    200: 8, //thunderstorm with light rain 	11d
    201: 9, //thunderstorm with rain 	11d
    202: 10, //thunderstorm with heavy rain 	11d
    210: 7, //light thunderstorm 	11d
    211: 8, //thunderstorm 	11d
    212: 9, //heavy thunderstorm 	11d
    221: 10, //ragged thunderstorm 	11d
    230: 7, //thunderstorm with light drizzle 	11d
    231: 8, //thunderstorm with drizzle 	11d
    232: 9, //thunderstorm with heavy drizzle 	11d 
    300: 4, //light intensity drizzle 	09d
    301: 5, //drizzle 	09d
    302: 6, //heavy intensity drizzle 	09d
    310: 6, //light intensity drizzle rain 	09d
    311: 7, //drizzle rain 	09d
    312: 7, //heavy intensity drizzle rain 	09d
    313: 7, //shower rain and drizzle 	09d
    314: 8, //heavy shower rain and drizzle 	09d
    321: 8, //shower drizzle 	09d
    500: 6, //light rain 	10d
    501: 7, //moderate rain 	10d
    502: 8, //heavy intensity rain 	10d
    503: 9, //very heavy rain 	10d
    504: 10, //extreme rain 	10d
    511: 11, //freezing rain 	13d
    520: 7, //light intensity shower rain 	09d
    521: 8, //shower rain 	09d
    522: 9, //heavy intensity shower rain 	09d
    531: 10, //ragged shower rain 	09d 
    600: 8, //light snow 	13d
    601: 9, //snow 	13d
    602: 10, //heavy snow 	13d
    611: 8, //sleet 	13d
    612: 9, //shower sleet 	13d
    615: 10, //light rain and snow 	13d
    616: 11, //rain and snow 	13d
    620: 11, //light shower snow 	13d
    621: 12, //shower snow 	13d
    622: 13, //heavy shower snow 	13d 
    701: 4, //mist 	50d
    711: 4, //smoke 	50d
    721: 4, //haze 	50d
    731: 4, //sand, dust whirls 	50d
    741: 4, //fog 	50d
    751: 4, //sand 	50d
    761: 4, //dust 	50d
    762: 20, //volcanic ash 	50d
    771: 9, //squalls 	50d
    781: 20, //tornado 	50d
    800: 1, //clear sky 	01d 01n
    801: 2, //few clouds 	02d 02n
    802: 2, //scattered clouds 	03d 03n
    803: 3, //broken clouds 	04d 04n
    804: 3, //overcast clouds 	04d 04n
}
