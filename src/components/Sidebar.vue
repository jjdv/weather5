<template>
    <v-navigation-drawer
        v-model="sidebarOn"
        mobile-break-point="960"
        disable-resize-watcher
        dark app
    >
        <nav-list setupOn/>
    </v-navigation-drawer>
</template>

<script>
import NavList from './NavList.vue'

export default {
    computed: {
        sidebarOn: {
            get: function () {
                return this.$store.state.sidebarOn
            },
            set: function (newValue) {
                this.$store.commit('sidebarOn', newValue)
            }
        }
    },
    components: {
        NavList: NavList
    }
}
</script>
