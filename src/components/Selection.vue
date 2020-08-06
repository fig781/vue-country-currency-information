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
  background-color:aliceblue;
  border: 1px solid grey;
  border-radius: 25px;
}
#country-text{
  display: inline-block;
  margin: 0px;
  padding: 5px;
}
button{
  border:none;
  margin:0px;
  padding:0px;
  text-decoration: none;
  background: none;
  outline:none;
  margin-right: 5px;
}

button:hover{
  background-color: lightgray;
}



</style>