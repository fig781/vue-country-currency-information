<template>
  <div class="search">
    <b-container>
      <b-row class="row-1">
        <b-col></b-col>
        <b-col>
          <b-form @add="onAdd" @submit="onSubmit" @clear="onClear">
            
            <b-input
              id="search-box"
              type="search"
              required
              placeholder="ex: Brazil"
            ></b-input>
            
            <b-button type="add" variant="primary">Add</b-button>
            <b-button type="submit" variant="success">Submit</b-button>
            <b-button type="reset" variant="danger">Clear</b-button>

          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-row class="row-2">
        <b-col></b-col>
        <b-col-7>
          <selections></selections>
          <selections></selections>
          
        </b-col-7>
        <b-col></b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>

import Selections from './Selections'
// props here for the country entered to get passed to the selections component when click Add
// on press of Add will also make a new instance of the selections component, will add the country to an array to get passed to the axios get request
export default {
  components:{
    'selections': Selections
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-1{
  text-align: center;
}
.row-2{

}

</style>