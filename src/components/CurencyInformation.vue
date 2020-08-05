<template>
  <div id="currency-information">
    <div id="flag-section">
      <img src="../assets/Flag_of_Switzerland.svg" alt="Country Flag">
    </div>
    <div id="information-section">
      <h1 id="country-name">Switzerland</h1>
      <h3>Swiss Franc: CHF</h3>
      <p><b>Subunit:</b> Rappen</p>
      <p><b>Banknotes:</b> 10 francs, 20 francs, 50 francs, 200 francs, 1000 francs, 100 francs</p>
      <p><b>Coins:</b> 5 francs, 10 centimes, 2 francs, 1/2 francs, 20 centimes, 1 francs, 5 centimes</p>
      <p><b>National Bank:</b> Swiss National Bank</p>
      <div id="website">
        <p><b>Official Website:</b></p>
        <a href="snb.ch">snb.ch</a>
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
