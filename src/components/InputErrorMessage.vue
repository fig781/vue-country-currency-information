<template>
  <div id="input-error-message-container">
    <p>{{ errorMessage }}</p>
  </div>
  
</template>

<script>
  export default{
    name: "InputErrorMessage",
    props: {
      errorMessage: String
    }
  }
  //v-on:click="$emit('del-selection',countrySelection)"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#input-error-message-container{
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #fda1a9;
  border-radius: 3px;
  z-index: 4;
}
p{
  margin:0px;
  padding-top:5px;
  padding-bottom: 5px;
  color: #6e4a4d;
}


</style>