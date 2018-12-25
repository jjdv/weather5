<template>
    <table>
        <tr>
            <td class="name">Temperature</td>
            <td class="value1">
                <span class="tempMax">{{dayForecast.tempMax}}</span>
                <span>{{dayForecast.tempMin}}</span>
            </td>
            <td class="name">Pressure</td>
            <td class="value2">{{dayForecast.pressure}}</td>
        </tr>
        <tr>
            <td class="name">Wind</td>
            <td class="value1">
                <span
                    :style="`transform: rotate(${dayForecast.windDirection}deg);`"
                    class="wind-direction"
                >↓</span>
                <span>{{dayForecast.windSpeed}}</span>
            </td>
            <td class="name2">Humidity</td>
            <td class="value">{{dayForecast.humidity}}</td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        dayForecast: Object
    }
}
</script>

<style scoped>
.name {width: 8em;}
.value1 {width: 7em;}
.value2 {width: 6em;}
span.tempMax {
    font-weight: bold;
    color: red;
}
span.wind-direction {display: inline-block;}
span + span {margin-left: 1em;}
</style>
