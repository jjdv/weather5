<template>
  <v-app>
    <Sidebar/>
    <Toolbar/>
    <Content/>
    <Footer/>
  </v-app>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Toolbar from './Toolbar.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'


export default {
  name: 'App',
  components: {Sidebar, Toolbar, Content, Footer}
}
</script>

<style>
.main-panel {min-width: 350px;}

.city-input {width: calc(100% - 100px);}
</style>
