<template>
    <v-card min-width="300px" color="orange lighten-5" class="px-4 py-2 grow">
        <table class="main">
            <tr v-for="day in forecast" :key="day.date" class="row">
                <td class="data">
                    <table>
                        <tr>
                            <td class="day">
                                <p class="weekDay">{{day.weekDay}}</p>
                                <p class="date">{{day.date}}</p>
                            </td>
                            <td class="temp">
                                <span class="tempMax">{{day.tempMax}}</span>
                                <span>{{day.tempMin}}</span>
                            </td>
                            <td class="wind">
                                <span
                                    :style="`transform: rotate(${day.windDirection}deg);`"
                                    class="wind-direction"
                                >↓</span>
                                <span>{{day.windSpeed}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">{{day.description}}</td>
                        </tr>
                    </table>
                </td>
                <td class="icon"><img :src="`http://openweathermap.org/img/w/${day.icon}.png`"/></td>
            </tr>
        </table>
    </v-card>
</template>

<script>
export default {
    computed: {
        forecast () {
            return this.$store.getters.forecastOverview
        }
    }
}
</script>

<style lang="less" scoped>
table {
    table-layout: auto;
    border-collapse: collapse;
    font-size: 14px;
    &.main {width: 100%;}
    tr.row + tr.row {border-top: 1px solid #ccc}
    td {
        text-align: center;
        &.data {width: 22em;}
        &.icon img {
            height: 70px;
            margin: 1em;
        }
    }
    table {
        td {
            padding: 0 1em;
            &:first-child {text-align: left;}
            &.day {width: 8em;}
            &.temp {width: 6em;}
            &.wind {width: 7em;}
            p {
                margin: 0;
                &.weekDay {
                    font-size: 16px;
                    font-weight: bolder;
                }
                &.date {font-size: 12px;}
            }
            span.tempMax {
                font-weight: bold;
                color: red;
            }
            span.wind-direction {display: inline-block;}
            span + span {margin-left: 1em;}
        }
    }
}
</style>
