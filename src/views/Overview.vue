<template>
    <v-card min-width="350px" color="orange lighten-5" class="px-3 py-2 grow">
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
    border-collapse: collapse;
    font-size: 14px;
    &.main {width: 100%;}
    tr.row + tr.row {border-top: 1px solid #ccc}
    td {
        text-align: center;
        td span {
            margin-left: 0.8em;
            &:first-child {margin-left: 1.5em;}
        }
        &.icon {
            width: 7em;
            img {max-width: 5em;}
        }
    }
    table {
        margin: 0.5em 0;
        td {
            &:first-child {text-align: left;}
            p {
                margin: 0;
                &.weekDay {
                    font-size: 15px;
                    font-weight: bolder;
                }
                &.date {font-size: 12px;}
            }
            span.tempMax {
                font-weight: bold;
                color: red;
            }
            span.wind-direction {display: inline-block;}
        }
    }
}
</style>
