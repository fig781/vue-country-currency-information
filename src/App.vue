<!--All components get routed into here-->

<template>
  <div id="app">
    <b-container>
      <b-row id="headers">
        <b-col > 
          <h1>Forex Currency Information</h1>
          <h3>Search for a country to get started</h3>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row >
        <b-col>
          <search></search>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// Import all components in here
//import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search'


export default {
  name: 'App',
  components: {
    'search': Search
    
  }
}
</script>

<style>
 /* Global styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#headers{
  text-align: center;
}
</style>
