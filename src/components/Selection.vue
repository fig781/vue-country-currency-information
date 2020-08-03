<template>
  <div id="selection">
    <p id="country-text">United States</p>
    <button>
      <i id="x-icon" class="far fa-times-circle"></i>
    </button>
  </div>
</template>

<script>

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
}

button:hover{
  background-color: lightgray;
}
#x-icon{
  margin-right: 5px;
}


</style>