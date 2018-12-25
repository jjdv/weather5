<template>
    <v-autocomplete
        :loading="loading"
        :items="items"
        item-text="name"
        :search-input.sync="search"
        no-filter
        return-object
        v-model="selected"
        :placeholder="selected.name"
        flat
        hide-no-data
        label="City"
        hint="start typing city name"
        autofocus
    >
    </v-autocomplete>
</template>

<script>
import {xhRequest} from '../modules/helpers.js'
import siteConfig from '../../server/site/site.config.js'

export default {
    data () {
        return {
            loading: false,
            items: [],
            search: null,
            selected: {},
        }
    },
    props: {
        cityData: Object
    },
    watch: {
        search (val) {
            val && val !== this.selected && this.cityList(val)
        },
        selected (val) { this.$emit('update:cityData', val) }
    },
    methods: {
        cityList (v) {
            this.loading = true
            const url = `${location.protocol}//${location.hostname}:${siteConfig.port}/api/cities?startStr=${v}`

            xhRequest(url, 'GET')
            .then(data => {
                this.items = data
                this.loading = false
            })
            .catch(errorMsg => {
                this.loading = false
                alert(errorMsg)
            })
        }
    },
    created: function () {
        this.search = this.cityData.name
    }
}
</script>
