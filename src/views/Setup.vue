<template>
    <v-card class="main-panel elevation-1" color="orange lighten-5">
        <v-toolbar color="secondary" class="elevation-0" dark >
            <v-toolbar-title class="grow text-xs-center">Settings</v-toolbar-title>
            <v-btn icon @click="$router.back()">
                <v-icon>arrow_back</v-icon>
            </v-btn>
        </v-toolbar>
        <div class="pa-4 text-xs-center">
            <CityInput :cityData.sync="cityData"/>
            <v-radio-group v-model="units" row>
                <v-radio label="Metric" value="metric"></v-radio>
                <v-radio label="Imperial" value="imperial"></v-radio>
            </v-radio-group>
            <v-btn @click="save" :disabled="!changed" color="success">
                Save
            </v-btn>
        </div>
    </v-card>
</template>

<script>
import CityInput from '../components/CityInput.vue'
import {cityNameRgx} from '../modules/data.js'

export default {
    data () {
        return {
            cityData: {},
            units: 'metric'
        }
    },
    computed: {
        changed () {
            return this.$store.state.cityName != this.cityData.name || this.$store.state.units != this.units
        }
    },
    methods: {
        save () {
            const cityName = this.cityData.name.replace(cityNameRgx, '')

            this.$store.commit('cityId', this.cityData.id)
            this.$store.commit('cityName', cityName)
            this.$store.commit('units', this.units)
            this.$store.dispatch('getForecast')
            this.$router.push(`/forecast/${cityName}/overview`)
        }
    },
    components: {CityInput},
    created () {
        this.cityData = {
            name: this.$store.state.cityName,
            id: this.$store.state.cityId
        }
    }
}
</script>
