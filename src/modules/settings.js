
export const settingsStore = {
        get cityId () {return localStorage.getItem('cityId')},
        get cityName () {return localStorage.getItem('cityName')},
        get units () {return localStorage.getItem('units')},

        set cityId (val) {localStorage.setItem('cityId', val)},
        set cityName (val) {localStorage.setItem('cityName', val)},
        set units (val) {localStorage.setItem('units', val)}
}

export function settingsOk () {
        const state = this.$store.state
        if (state.cityId && state.cityName && state.units) {
                if (this.$store.state.forecastState === null) this.$store.dispatch('getForecast')
                return true
        } else return false
}