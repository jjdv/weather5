<template>
    <v-card class="main-panel elevation-1">
        <v-toolbar :height="inputOn ? '80px' : undefined" color="secondary" dark>
            <v-toolbar-title class="grow text-xs-center">
                <span v-if="!inputOn">{{cityName}}</span>
                 <CityInput v-else :cityData.sync="cityData"/>
            </v-toolbar-title>
            <v-btn v-if="inputOn" icon @click="save">
                <v-icon>check</v-icon>
            </v-btn>
            <v-btn icon @click="inputOn = !inputOn">
                <v-icon
                    :key="`icon-${inputOn}`"
                    v-text="inputOn ? 'close' : 'edit'"
                ></v-icon>
            </v-btn>
        </v-toolbar>
        <v-layout>
                <NavBar class="hidden-sm-and-down"/>
                <router-view/>
        </v-layout>
    </v-card>
</template>

<script>
import CityInput from '../components/CityInput.vue'
import NavBar from '../components/NavBar.vue'
import {cityNameRgx} from '../modules/data.js'
import {settingsOk} from '../modules/settings.js'

export default {
    data () {
        return {
            inputOn: false,
            cityData: {}
        }
    },
    computed: {
        settingsOk: settingsOk,
        cityName () {
            return this.$store.state.cityName
        }
    },
    methods: {
        save () {
            this.$store.commit('cityId', this.cityData.id)
            this.$store.commit('cityName', this.cityData.name.replace(cityNameRgx, ''))
            this.$store.dispatch('getForecast')
            this.inputOn = false
        }
    },
    components: {CityInput, NavBar},
    created () {
        if (!this.settingsOk) this.$router.push(`/setup`)
        if (this.$route.params.city != this.$store.state.cityName) this.$router.push(`/`)
        this.cityData = {
            name: this.$store.state.cityName,
            id: this.$store.state.cityId
        }
    }
}
</script>
