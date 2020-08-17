<template>
  <div  id="search-suggestion">
    <div id="search-suggestion-individual" v-bind:key="countrySuggestion" 
         v-for="countrySuggestion in countrySuggestions"
         v-on:click="$emit('suggestion-clicked',countrySuggestion)">
      <p>{{ countrySuggestion }}</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: "SearchSuggestion",
    props: {
      countrySuggestions: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-suggestion-individual{
  text-align: start;
  border-bottom: 1px solid lightgrey;
  background-color: #f9f7f7;
}

#search-suggestion-individual:hover{
  background-color:rgb(223, 223, 223);
  cursor:pointer;
}

p{
  margin:0px;
  padding-left:5px;
  padding-top:5px;
  padding-bottom:5px;
}
</style>