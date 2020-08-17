<template>
  <transition name="transition">
    <div id="selection">
      <p id="country-text" >{{ countrySelection }}</p>
      <button v-on:click="$emit('del-selection',countrySelection)">X</button>
    </div>
  </transition>
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

.transition-enter-active, .transition-leave-active{
  transition: 400ms ease-in-out 50ms;
}

.transition-enter{
  opacity: 0;
  transform: translateY(-10px);
}

.transition-leave-to {
  opacity: 0;
  transform: translateY(10px);
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