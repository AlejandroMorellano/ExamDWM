<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
</template>

<script>
import getData from "../axios/no"
  export default {
    data() {
      return {
        items: [
          {
            text: 'inicio',
            to: {name: 'App.vue'}
          },
          {
            text: 'Formulario',
            to: {name: 'formulario.vue'}
          },
          {
            text: 'Carro',
            active: true
          }
        ],
        perPage: 3,
        currentPage: 1,
        items: [
          {brand, model, serie, year}
        ]
      }
    },
    mounted(){
      getData.getData();
    },
    methods:{
      getData(brand, model, year,serie){
        let params = {}

        if(brand){
          params["brand"] = brand
        }
        if(model){
          params["model"] = model
        }
        if(year){
          params["year"] = year
        }
        if(serie){
          params["serie"] = serie
        }
      }
    },
    computed: {
      rows(){
        return this.items.length
      }
    }
  }
</script>

<style>

</style>