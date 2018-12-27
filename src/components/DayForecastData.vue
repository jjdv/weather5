<template>
    <table>
        <tr>
            <td class="name">Temperature</td>
            <td class="value">
                <span class="tempMax">{{dayForecast.tempMax}}</span>
                <span>{{dayForecast.tempMin}}</span>
            </td>
            <td class="name"><span>Pressure</span></td>
            <td class="value">{{dayForecast.pressure}}</td>
        </tr>
        <tr>
            <td class="name">Wind</td>
            <td class="value">
                <span
                    :style="`transform: rotate(${dayForecast.windDirection}deg);`"
                    class="wind-direction"
                >↓</span>
                <span>{{dayForecast.windSpeed}}</span>
            </td>
            <td class="name"><span>Humidity</span></td>
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
table {
    width: 100%;
    border-collapse: collapse;
}
tr + tr {margin-top: 0.5em;}
.name {text-align: left;}
td + td.name span {margin-left: 1.5em;}
.value {text-align: right;}
span.tempMax {
    font-weight: bold;
    color: red;
}
span.wind-direction {display: inline-block;}
span + span {margin-left: 1em;}
</style>
