<template>
  <div>
    <div id="search-section">
      <div id="search-container">
        <InputErrorMessage  v-if="errorMessage" 
                            v-bind:errorMessage="errorMessage"/>
        <input type="search"  v-on:keyup.enter="addButtonClick" 
                              v-model="countryInput" 
                              placeholder="ex: Switzerland">
        <div id="search-suggestion-container" >
          <SearchSuggestion v-if="countrySuggestions.length > 0" 
                            v-bind:countrySuggestions="countrySuggestions"
                            v-on:suggestion-clicked="selectionClicked" />
        </div>
      </div>
      
      <div id="button-group">
        <button id="add-button" v-on:click="addButtonClick">Add</button>
        <button id="clear-button" v-on:click="clearButtonClick">Clear</button>
        <button id="submit-button" v-on:click="submitButtonClick">Search</button>
      </div>
    
      <div id="selections-section" v-if="countrySelections.length > 0">
        <transition-group name="country-selection-transition" id="transition-container"> 
          <Selection  v-bind:key="countrySelection" 
                      v-bind:countrySelection="countrySelection" 
                      v-for="countrySelection in countrySelections"
                      v-on:del-selection="deleteSelection(countrySelection)"/>
        </transition-group> 
      </div>

      <div id="loader" v-if="loading == true"></div>
    </div>

    <div id="currency-information-section">
      <transition-group name="currency-information-transition">
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
      countrySuggestions: [],
      loading: false
    }
  },
  components: {
    //each country entered into input gets turned into a selection. Renders based on countrySelections
    Selection,

    //each object returned from the api request is used to render this component. renders based on currencyReturnedData
    CurrencyInformation,

    //shows the search suggestions under the input. renders based on each letter in input
    SearchSuggestion,

    //displays an error message. Rendered based on addButtonClick
    InputErrorMessage
  },
  methods: {

    //runs when one of the countries listed in the search suggestion is clicked.
    selectionClicked(countrySuggestion){

      //check if the country you are trying to add is already added to the selection
      if(this.countrySelections.some(e => e.toUpperCase() === countrySuggestion.toUpperCase())){
        this.errorMessage = "Country already added"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }
      this.countrySelections.push(countrySuggestion)
      this.countryInput = ''
    },

    addButtonClick(){

      //catch if input is empty
      if(this.countryInput == ''){
        this.errorMessage = "Nothing was entered"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }
      //catch if the country is already added to the country selections
      else if(this.countrySelections.some(e => e.toUpperCase() === this.countryInput.toUpperCase())){
        this.errorMessage = "Country already added"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }
      //adds the country to the list if it matchs one of the countries in the json file
      else if(countryJson.some(e => e.Country.toUpperCase() === this.countryInput.toUpperCase())){
        this.countrySelections.push(this.countryInput);
        this.countryInput = '';
      }
      //any other kind of input results in saying the country is not supported
      else{
        this.errorMessage = "Country not supported"
        setTimeout(()=>this.errorMessage='', 2000)
      }
    },

    //runs when the clear button is clicked. clears the selections
    clearButtonClick(){
      this.countrySelections = [];
    },

    //runs when the x button is pressed next to the country selections. removes that value from countrySelections
    deleteSelection(countrySelection){
      this.countrySelections = this.countrySelections.filter(x => x !== countrySelection)
    },

    //runs when the submit button is pressed. This sends the request to the currency info api
    submitButtonClick(){

      //catch if there are no countries added to countrySelections
      if(this.countrySelections.length < 1 ){
        this.errorMessage = "No countries added"
        setTimeout(()=>this.errorMessage='', 2000)
        return
      }

      this.loading = true;
      this.currencyReturnedData = []
      var axiosData='';

      //use the countries in countrrySelections to form the api request
      for(var i=0; this.countrySelections.length > i; i++){
        for(var x=0; countryJson.length > x; x++){
          if(this.countrySelections[i].toUpperCase() == countryJson[x].Country.toUpperCase()){
            axiosData = axiosData + countryJson[x].ShortName + ','
            break;
          }
        } 
      }

      axiosData = axiosData.slice(0,-1)
      
      //functions used to create a render delay for the currency information panels to geta cascading effect
      function delay(t) {
        return new Promise(resolve => { setTimeout(resolve, t); });
      }

      //please dont abuse this api key. I dont really care if this key is exposed, it ain't a big deal
      var fullAxiosRequest = "https://fcsapi.com/api-v2/forex/profile?symbol=" + axiosData + "&access_key=aLlqo3ql7yoRNFNLoNoxqz424s0MvKUp4TqRAYSGnhSxb7NCbd"
      
      //make the api request and populate the currencyreturnedData array. this array is used to render the currencyInformation panels
      const sendRequest = async () => {
        try{
          const res = await axios.get(fullAxiosRequest)
          for(let a=0; res.data.response.length > a; a++){
            this.loading = false;
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
            })
            await delay(250)
          }   
        }
        catch(err) {
          this.errorMessage = "Error in request"
          setTimeout(()=>this.errorMessage='', 2000)
          console.log(err)
        }
      }

      sendRequest()
    }
  },

  watch: {

    //watches when a new letter is entered into the input. re-renders the suggestions on each input change
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/******************
SEARCH SECTION
*******************/
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
  position:absolute;
  width:99%;
}

/*******************************
BUTTON SECTION
********************************/
button{
  margin-top:10px;
  margin-bottom:10px;
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

/*******************************
COUNTRY SELECTIONS SECTION
*******************************/
#selections-section{
  margin: auto;
  padding-top:8px;
  padding-bottom:8px;
  border: 1px solid #112d4e;
  border-radius: 25px;
}

#transition-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin:auto;
  text-align: center;
}

.country-selection-transition-enter-active, .country-selection-transition-leave-active{
  transition: 400ms ease-in-out 50ms;
}

.country-selection-transition-enter{
  opacity: 0;
  transform: translateY(-10px);
}

.country-selection-transition-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

#loader {
  margin: auto;
  margin-top: 30px;
  border: 10px solid #eaecf0;
  border-radius: 50%;
  border-top: 10px solid #87cefa;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/**************************************************
CURRENCY INFORMATION PANELS SECTION
****************************** ********************/
#currency-information-section{
  display: flex;
  margin:auto;
  justify-content: center;
  flex-direction: column;
}

.currency-information-transition-enter-active, .currency-information-transition-leave-active{
  transition: 500ms ease-in-out 50ms;
}

.currency-information-transition-enter{
  opacity: 0;
  transform: translateX(-40px);
}

.currency-information-transition-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/********************
RESIZE MEDIA QUERIES
*********************/ 
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