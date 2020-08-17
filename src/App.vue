<!--All components get routed into here-->

<template>
  <div id="app">
    <div id="title">
      <h1>Currency Information by Country</h1>
      <p id="info">Press the Add button to add a country to the search queue or select a country from the search suggestion.  </p>
      <p>You can search for multiple countries at once.</p>
      <p>Press the Search button to see those countries currency information.</p>
    </div>
    <Search/>
    <div id="footer">
      Made by Aden Eilers, 2020,
      <a href="https://github.com/fig781">Github</a>
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: "App",
  components:{
    Search
  }
}
</script>

<style>
 /* Global styles here */
html, body{
  margin:0;
  padding:0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  min-height: 100%;
  padding: 0 0 75px;
  position: relative;
  background-color: #f9f7f7;
}

#title{
  text-align: center;
  padding-top: 30px;
}

#title h1{
  margin-top:0px;
  margin-bottom: 11px;
  color: #93b4ec;
  font-size: 45px;
}

#title p {
  margin:5px;
}

#footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #dbe2ef;
}
</style>
