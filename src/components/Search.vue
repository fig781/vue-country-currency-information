<template>
  <div>
    <div id="search-section">
      
      <input type="search" v-model="countryInput" placeholder="ex: Switzerland">
      <div id="button-group">
        <button id="add-button" v-on:click="addButtonClick">Add</button>
        <button id="clear-button" v-on:click="clearButtonClick">Clear</button>
        <button id="submit-button" v-on:click="submitButtonClick">Search</button>
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
      </ul>
    </div>
  </div>
</template>



<script>
import Selection from './Selection.vue'
import CurrencyInformation from './CurencyInformation.vue';
import axios from 'axios'

export default{
  name: "Search",

  data(){
    return {
      countryInput: '',
      countrySelections: [],

    }
  },
  components: {
    Selection,
    CurrencyInformation
  },
  methods: {
    addButtonClick(){
      //need to stop empty input, and duplicate input, and make sure the country entered is valid
      this.countrySelections.push(this.countryInput);
      this.countryInput = '';
    },
    clearButtonClick(){
      this.countrySelections = [];
    },
    deleteSelection(selection){
      this.countrySelections = this.countrySelections.filter(x => x !== selection)
    },
    submitButtonClick(){
      axios.get("https://fcsapi.com/api-v2/forex/profile?symbol=USD&access_key=aLlqo3ql7yoRNFNLoNoxqz424s0MvKUp4TqRAYSGnhSxb7NCbd")
      .then(res => (console.log(res)))
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
  margin:auto;
  justify-content: center;
}

ul{
  list-style-type: none;
}
li{
  margin-top: 15px;
}


</style>