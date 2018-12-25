<template>
  <div/>
</template>

<script>
import {settingsOk} from '../modules/settings.js'

export default {
  computed: {
    settingsOk: settingsOk
  },
  created () {
    if (this.settingsOk) {
      const cityName = this.$store.state.cityName
      this.$router.push(`/forecast/${cityName}/overview`)
    } else this.$router.push(`/setup`)
  }
}
</script>
