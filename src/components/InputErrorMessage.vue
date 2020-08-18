<!-- Add "scoped" attribute to limit CSS to this component only -->

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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input-error-message-container{
  margin-bottom: 5px;
  background-color: #fda1a9;
  border-radius: 3px;
  z-index: 4;
}

p{
  margin:0px;
  padding-top:5px;
  padding-bottom:5px;
  color: #352424;
}
</style>