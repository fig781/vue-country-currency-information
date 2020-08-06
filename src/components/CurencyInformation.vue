<template>
  <div id="currency-information">
    <div id="flag-section">
      <img v-bind:src="icon" alt="Country Flag">
    </div>
    <div id="information-section">
      <h1 id="country-name">{{ country }}</h1>
      <h3>{{ name }}: {{ shortName }}</h3>
      <p><b>Subunit:</b> {{ subunit }}</p>
      <p><b>Banknotes:</b> {{ subunit }}</p>
      <p><b>Coins:</b> {{ coins }}</p>
      <p><b>National Bank:</b> {{ bank }}</p>
      <div id="website">
        <p><b>Official Website:</b></p>
        <a v-bind:href="website" >{{ website }}</a>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: "CurrencyInformation",
    props:{
      icon: String,
      country: String,
      name: String,
      shortName: String,
      subunit: String,
      banknotes: String,
      coins: String,
      bank: String,
      website: String
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#currency-information{
  display: flex;
  background-color:aliceblue;
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 15px;
  max-width: 70%;
}

img{
  
  width: 130px;
  height: 130px;
  border-radius: 15px 0px 0px 15px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  
}

h1,h3,p{
  margin-top: 0px;
  margin-bottom:0px;
  padding-top:2px;
  padding-left: 8px;
  padding-right: 10px;
}
a{
  padding-top: 2px;
}
#website{
  display:flex;
  padding-bottom:2px;
}
</style>
