<template>
  <div class="selection">
    sdkfjgl;sdk
  <button>
    <BIconXCircle variant="light"></BIconXCircle>
  </button>
  </div>
</template>

<script>
import { BIconXCircle } from 'bootstrap-vue'

export default{
  //props will get passed here from search to add to the name
  components: {
    BIconXCircle
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selection{
  display:inline-block;
  padding:6px;
  background-color:slategray;
  color:white;
  border-radius: 25px;
}
button{
  box-shadow: none;
  border: none;
  text-shadow: none;
  background-color: transparent;
  outline: none;
}
#x-button{
  
}

</style>