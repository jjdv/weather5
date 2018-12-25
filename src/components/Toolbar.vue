<template>
    <v-toolbar color="primary" dark fixed app>
        <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="toggleSidebar"/>
        <v-btn icon class="hidden-sm-and-down" to="/setup">
            <v-icon light>settings</v-icon>
        </v-btn>
        <v-toolbar-title class="grow text-xs-center">5-Day Weather Forecast</v-toolbar-title>

        <v-btn v-if="settingsOk" icon @click="refresh">
            <v-icon>refresh</v-icon>
        </v-btn>
        <v-snackbar
            v-model="snackbar"
            :timeout="4000"
            top
            :color="snackbarColor"
        >
            {{ snackbarText }}
            <v-btn dark flat @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-toolbar>
</template>

<script>
import {settingsOk} from '../modules/settings.js'

export default {
    data () {
        return {
            snackbar: false,
            snackbarText: null,
            snackbarColor: null
        }
    },
    computed: {
        settingsOk: settingsOk
    },
    methods: {
        toggleSidebar () {
            this.$store.commit('sidebarOn', !this.$store.state.sidebarOn)
        },
        refresh () {
            const now = new Date()
            if (now.valueOf() - this.$store.state.forecastTimeStamp.valueOf() < 20*60*1000) {
                this.snackbarText = 'Your forecast is up-to-date :)'
                this.snackbarColor = 'success dark'
                this.snackbar = true
            } else {
                this.$store.dispatch('getForecast')
                this.snackbarText = 'Forecast request has been sent :)'
                this.snackbarColor = 'info dark'
                this.snackbar = true
                this.forecastRefreshedMsg()
            }
        },
        forecastRefreshedMsg () {
            if (this.$store.state.forecastState === 'loaded') {
                this.snackbarText = 'Your forecast has been updated :)'
                this.snackbarColor = 'success dark'
                this.snackbar = true
            } else setTimeout(this.forecastRefreshedMsg, 500)
        }
    }
}
</script>
