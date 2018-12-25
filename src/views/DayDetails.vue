<template>
    <v-card min-width="300px" color="orange lighten-5" class="px-4 py-2 grow">
        <v-layout column align-center>
            <img
                v-if="dayForecast.icon"
                class="main-image"
                :src="`http://openweathermap.org/img/w/${dayForecast.icon}.png`"
            />
            <div class="day">
                <span class="weekDay">{{forecast.weekDay}}</span>
                <span class="date">{{forecast.date}}</span>
            </div>
            <div class="description">{{dayForecast.description}}</div>
            <DayForecastData :dayForecast="dayForecast" class="day-forecast"/>
            <HourForecast :hourForecast="hourForecast" class="hour-forecast"/>
        </v-layout>
    </v-card>
</template>

<script>
import DayForecastData from '../components/DayForecastData.vue'
import HourForecast from '../components/HourForecast.vue'

export default {
    computed: {
        forecast () {
            const forecast = this.$store.state.forecast
            if (forecast && forecast.length && this.$route.params.dayNo) return forecast[this.$route.params.dayNo-1]
            return {}
        },
        dayForecast () {
            const f = this.forecast.dayForecast
            if (!f) return {}
            return f
        },
        hourForecast () {
            const f = this.forecast.hourForecast
            if (!f) return []
            return f
        }
    },
    components: {DayForecastData, HourForecast},
    created () {
        const dayNo = Number(this.$route.params.dayNo)
        if (!Number.isInteger(dayNo) || dayNo < 0 || dayNo > 5) this.$router.push(`/`)
    }
}
</script>

<style scoped>
img.main-image {width: 30%;}
.day-forecast, .hour-forecast {margin-top: 1em;}
.weekDay {
    font-size: 16px;
    font-weight: bolder;
}
span.date {
    font-size: 12px;
    margin-left: 2em;
}
</style>
