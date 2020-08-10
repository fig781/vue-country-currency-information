<template>
  <div>
    <div id="search-section">
      <div id="search-container">
        <input type="search"  v-on:keyup.enter="addButtonClick" 
                              v-model="countryInput" 
                              placeholder="ex: Switzerland">
        <div id="search-suggestion-container" >
          <SearchSuggestion v-if="countrySuggestions.length > 0" 
                            v-bind:countrySuggestions="countrySuggestions"
                            v-on:suggestion-clicked="selectionClicked" />
        </div>
        <InputErrorMessage  v-if="errorMessage" 
                            v-bind:errorMessage="errorMessage"/>
      </div>
      
      <div id="button-group">
        <button id="add-button" v-on:click="addButtonClick">Add</button>
        <button id="clear-button" v-on:click="clearButtonClick">Clear</button>
        <button id="submit-button" v-on:click="submitButtonClick">Search</button>
      </div>
    
      <div id="selections-section" v-if="countrySelections.length > 0">
          <Selection  v-bind:key="countrySelection" 
                      v-bind:countrySelection="countrySelection" 
                      v-for="countrySelection in countrySelections"
                      v-on:del-selection="deleteSelection(countrySelection)"/>
      </div>
    </div>

    <div id="currency-information-section">
      <transition-group name="currency-info">
        <CurrencyInformation  v-bind:key="object.id" 
                              v-bind:countryCurrencyData="object" 
                              v-for="object in currencyReturnedData" />
      </transition-group>
      
    </div>
  </div>
</template>



<script>
import Selection from './Selection.vue';
import CurrencyInformation from './CurencyInformation.vue';
import SearchSuggestion from './SearchSuggestion.vue';
import InputErrorMessage from './InputErrorMessage.vue';
import countryJson from '../assets/countryCurrencyData.json';
import axios from 'axios';

export default{
  name: "Search",
  data(){
    return {
      countryInput: '',
      countrySelections: [],
      currencyReturnedData: [],
      errorMessage: '',
      countrySuggestions: []
    }
  },
  components: {
    Selection,
    CurrencyInformation,
    SearchSuggestion,
    InputErrorMessage
  },
  methods: {
    selectionClicked(countrySuggestion){
      if(this.countrySelections.some(e => e.toUpperCase() === countrySuggestion.toUpperCase())){
        this.errorMessage = "Country already added"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }
      this.countrySelections.push(countrySuggestion)
      this.countryInput = ''
      
    },
    addButtonClick(){
      //need to stop empty input, and duplicate input, and make sure the country entered is valid
      if(this.countryInput == ''){
        this.errorMessage = "Nothing was entered"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }
      else if(this.countrySelections.some(e => e.toUpperCase() === this.countryInput.toUpperCase())){
        this.errorMessage = "Country already added"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }
      else if(countryJson.some(e => e.Country.toUpperCase() === this.countryInput.toUpperCase())){
        this.countrySelections.push(this.countryInput);
        this.countryInput = '';
      }
      else{
        this.errorMessage = "Country not supported"
        setTimeout(()=>this.errorMessage='', 2000)
      }
    },
    clearButtonClick(){
      this.countrySelections = [];
    },
    deleteSelection(countrySelection){
      this.countrySelections = this.countrySelections.filter(x => x !== countrySelection)
    },
    submitButtonClick(){
      if(this.countrySelections.length < 1 ){
        this.errorMessage = "No countries added"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }
      this.currencyReturnedData = []
      var axiosData='';

      for(var i=0; this.countrySelections.length > i; i++){
        for(var x=0; countryJson.length > x; x++){
          if(this.countrySelections[i].toUpperCase() == countryJson[x].Country.toUpperCase()){
            axiosData = axiosData + countryJson[x].ShortName + ','
            break;
          }
        } 
      }

      axiosData = axiosData.slice(0,-1)
      
      var fullAxiosRequest = "https://fcsapi.com/api-v2/forex/profile?symbol=" + axiosData + "&access_key=aLlqo3ql7yoRNFNLoNoxqz424s0MvKUp4TqRAYSGnhSxb7NCbd"
      
      axios.get(fullAxiosRequest)
      .then(res => {
        
        for(var a=0; res.data.response.length > a; a++){
          this.currencyReturnedData.push(
            {
              "id": a,
              "icon": res.data.response[a].icon,
              "country": res.data.response[a].country,
              "name": res.data.response[a].name,
              "shortName": res.data.response[a].short_name,
              "subunit": res.data.response[a].subunit,
              "banknotes": res.data.response[a].banknotes,
              "coins": res.data.response[a].coins,
              "symbol": res.data.response[a].symbol,
              "bank": res.data.response[a].bank,
              "website": res.data.response[a].website
            }
          )
        }
      })
      .catch(e => (console.log(e)))
    }
  },
  watch: {
    countryInput: function (lettersInInput){
      if(this.countryInput == ''){
        this.countrySuggestions = []
        return
      }
      this.countrySuggestions = countryJson.filter((object) => {
        return object.Country.substr(0,lettersInInput.length).toUpperCase() == lettersInInput.toUpperCase()
      })
      .map(object => { return object.Country})
    }
  }
  //when the input changes, run function to check the json data and do a filter
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-section{
  text-align: center;
  
}

#search-container{
  position: relative;
  display: inline-block;
}
input{
  min-width: 250px;
  border: 1px solid ;
  background-color: #eaecf0;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #112d4e;
  border-radius: 5px;
  margin-top:10px;
}

#search-suggestion-container{
  border-right: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
}
button{
  margin-top:10px;
  margin-bottom: 10px;
  width:5em;
  padding:10px;
  border: none;
  outline: none;
  border-radius: 25px;
  font-size: 16px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

#add-button{
  background-color:lightskyblue;
  margin-right: 5px;
}
#add-button:hover{
  background-color:rgba(57, 173, 245, 0.753);
}
#clear-button{
  background-color:lightcoral;
  margin-right: 5px;
}
#clear-button:hover{
  background-color:rgb(243, 86, 86);
}
#submit-button{
  background-color: lightgreen;
}
#submit-button:hover{
  background-color:rgb(89, 247, 89);
}

#selections-section{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin:auto;
  padding-top:8px;
  padding-bottom:8px;
  text-align: center;
  border: 1px solid #112d4e;
  border-radius: 25px;
  
}


#currency-information-section{
  display: flex;
  margin:auto;
  justify-content: center;
  flex-direction: column;
}

.currency-info-enter-active, .currency-info-leave-active{
  transition: 500ms ease-in-out 50ms;
}
.currency-info-enter, .currency-info-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #currency-information-section{
    width:90%;
  }
  #selections-section{
    width: 90%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  #currency-information-section{
    width: 90%;
  }
  #selections-section{
    width: 90%;
  }
  
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  #currency-information-section{
    width: 80%
  }
  #selections-section{
    width: 80%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #currency-information-section{
    width:70%;
  }
  #selections-section{
    width: 70%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #currency-information-section{
    width: 50%;
  }
  #selections-section{
    width: 50%;
  }
}

</style>