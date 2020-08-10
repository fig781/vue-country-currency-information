<template>
  <div id="currency-information">
    <div id="flag-section">
      <img v-bind:src="countryCurrencyData.icon" alt="Country Flag">
    </div>
    <div id="information-section">
      <h1 id="country-name">{{ countryCurrencyData.country }}</h1>
      <p id="divider"></p>
      <h3>{{ countryCurrencyData.name }}: {{ countryCurrencyData.shortName }}</h3>
      <p><b>Subunit:</b> {{ countryCurrencyData.subunit }}</p>
      <p><b>Banknotes:</b> {{ countryCurrencyData.banknotes }}</p>
      <p><b>Coins:</b> {{ countryCurrencyData.coins }}</p>
      <p><b>Symbol:</b> {{ countryCurrencyData.symbol }}</p>
      <p><b>National Bank:</b> {{ countryCurrencyData.bank }}</p>
      <div id="website">
        <p id="official-website"><b>Official Website:</b></p>
        <a v-bind:href=" 'https://www.' + countryCurrencyData.website" target="_blank" >{{ countryCurrencyData.website }}</a>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: "CurrencyInformation",
    props:{
      countryCurrencyData: Object
    } 
  }
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#currency-information{
  display: flex;
  background-color:#eaecf0;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
}

img{
  border-right:2px solid black;
  width: 130px;
  height: 130px;
  border-radius: 15px 0px 0px 15px;
  object-fit: cover;
}



h1,h3,p{
  margin-top: 0px;
  margin-bottom:0px;
  padding-top:4px;
  padding-left: 8px;
  padding-right: 10px;
}

#divider{
  margin-top:3px;
  width: 17rem;
  border-top: 2px solid black;
}
h3{
  margin-top: 5px;
}
a{
  text-decoration: none;
  padding-top:4px;
}
#website{
  display:flex;
  padding-bottom:8px;
}
#official-website{
  padding-right: 0px;
}

@media only screen and (max-width: 455px) {
  #flag-section{
    display:none;
  }
}
</style>
