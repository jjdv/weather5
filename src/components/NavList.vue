<template>
    <v-list>
        <v-list-tile :to="`/forecast/${cityName}/overview`">
            <v-list-tile-action>
                <v-icon>view_agenda</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Overview</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile
            v-for="(day, index) in days"
            :key="day"
            :to="`/forecast/${cityName}/days/${index+1}`"
        >
            <v-list-tile-action>
                <v-icon>today</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{day}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="setupOn"></v-divider>
        <v-list-tile v-if="setupOn" to="/setup">
            <v-list-tile-action>
                <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
import {weekDay, nextDay} from '../modules/helpers.js'

export default {
    props: {
        setupOn: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        today () {
            return this.$store.state.today
        },
        cityName () {
            return this.$store.state.cityName
        },
        days () {
            if (!this.today) return []

            const days = [weekDay(this.today)]
            for (let i=1; i<5; i++) days[i] = weekDay(nextDay(this.today, i))
            return days
        }
    }
}
</script>
