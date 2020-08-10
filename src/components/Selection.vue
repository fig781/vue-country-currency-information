<template>
  <div id="selection">
    <p id="country-text" >{{ countrySelection }}</p>
    <button v-on:click="$emit('del-selection',countrySelection)">X</button>
  </div>
  
</template>

<script>
  export default{
    name: "Selection",
    props: {
      countrySelection: {
        type: String,
        required: true
      }
    }
  }
  //v-on:click="$emit('del-selection',countrySelection)"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#selection{
  margin: 5px;
  background-color:#dbe2ef;
  border-radius: 25px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
}
#country-text{
  display: inline-block;
  margin: 0px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 3px;
}
button{
  border: none;
  margin:0px;
  padding:5px;
  text-decoration: none;
  background: none;
  outline:none;
  margin-right: 5px;
  border-radius: 100px;
  cursor: pointer;
}

button:hover{
  opacity: 0.7;
}



</style>