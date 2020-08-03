<template>
  <div>
    <div id="search-section">
      
      <input type="search">
      <div id="button-group">
        <button id="add-button" v-on:click="addButtonClick">Add</button>
        <button id="clear-button" v-on:click="clearButtonClick">Clear</button>
        <button id="submit-button" v-on:click="submitButtonClick">Search</button>
      </div>
    
      <div id="selections-section">
        <Selection/>
        <Selection/>
        <Selection/>
        <Selection/>
        <Selection/>
        <Selection/>
        <Selection/>
        <Selection/>

      </div>
    </div>

    <div id="currency-information-section">
      <ul>
        <li><CurrencyInformation/></li>
        <li><CurrencyInformation/></li>
        <li><CurrencyInformation/></li>
        <li><CurrencyInformation/></li>
        <li><CurrencyInformation/></li>
        <li><CurrencyInformation/></li>
        <li><CurrencyInformation/></li>
      </ul>
    </div>
  </div>
</template>



<script>
import Selection from './Selection.vue'
import CurrencyInformation from './CurencyInformation.vue';

export default{
  data(){
    return {

    }
  },
  components: {
    Selection,
    CurrencyInformation
  },
  methods: {
    addButtonClick: function (){

    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-section{
  text-align: center;
  
}

button{
  
}
#selections-section{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width:75%;
  margin:auto;
  text-align: center;
}

#currency-information-section{
  display: flex;
  justify-content: center;
  margin: auto;
}

ul{
  list-style-type: none;
}
li{
  margin-top: 10px;
  
}


</style>