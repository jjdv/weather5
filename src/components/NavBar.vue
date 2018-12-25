<template>
    <v-card color="orange lighten-4" width="200px">
        <v-navigation-drawer floating permanent class="transparent">
            <NavList/>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
import NavList from './NavList.vue'

export default {
    components: {NavList}
}
</script>
