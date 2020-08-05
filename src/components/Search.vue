<template>
  <div>
    <div id="search-section">
      
      <input type="search" v-model="countryInput" placeholder="ex: Switzerland">
      <div id="button-group">
        <button id="add-button" v-on:click="addButtonClick">Add</button>
        <button id="clear-button" v-on:click="clearButtonClick">Clear</button>
        <button id="submit-button">Search</button>
      </div>
    
      <div id="selections-section">
        <Selection  v-bind:key="countrySelection" 
                    v-bind:countrySelection="countrySelection" 
                    v-for="countrySelection in countrySelections"
                    v-on:del-selection="deleteSelection"/>
        

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
  name: "Search",

  data(){
    return {
      countryInput: '',
      countrySelections: []
    }
  },
  components: {
    Selection,
    CurrencyInformation
  },
  methods: {
    addButtonClick(){
      this.countrySelections.push(this.countryInput);
      this.countryInput = '';
    },
    clearButtonClick(){
      this.countrySelections = [];
    },
    deleteSelection(selection){
      this.countrySelections = this.countrySelections.filter(x => x !== selection)
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