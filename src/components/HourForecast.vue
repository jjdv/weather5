<template>
    <table class="hour-forecast">
        <tr v-for="row in hourForecast" :key="row.hour">
            <td class="hour">{{row.time}}</td>
            <td class="icon">
                <img :src="`http://openweathermap.org/img/w/${row.icon}.png`"/>
            </td>
            <td class="temp">{{row.temp}}</td>
            <td class="wind">
                <span
                    :style="`transform: rotate(${row.windDirection}deg);`"
                    class="wind-direction"
                >↓</span>
                <span>{{row.windSpeed}}</span>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        hourForecast: Array
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
.hour {
    width: 3em;
    text-align: left;
}
.icon, .temp, .wind {text-align: center;}
.icon {width: 5em;}
td.icon img {width: 3em;}
.temp {width: 7em;}
.wind {width: 6em;}
.wind span.wind-direction {display: inline-block;}
span + span {margin-left: 1em;}
tr + tr {border-top: 1px solid #ccc}
</style>
