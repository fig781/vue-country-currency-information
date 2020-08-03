<!--All components get routed into here-->

<template>
  <div id="app">
    <div id="title">
      <h1>Currency Information</h1>
      <h4>Search for a currency to see its information</h4>
    </div>
    <Search/>
    
    
  </div>
</template>


<script>
// Import all components in here
//import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'

export default {
  components:{
    Search
    
  }
}
</script>

<style>
 /* Global styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
#title{
  text-align: center;
}

</style>
