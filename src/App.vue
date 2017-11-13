<template>
  <div id="app">
      <heb></heb>
      <hotmovie></hotmovie>
       <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
  import heb from './components/header.vue'
  export default {
  data () {
    return {
    }
  },
  components: { heb }
}
</script>
