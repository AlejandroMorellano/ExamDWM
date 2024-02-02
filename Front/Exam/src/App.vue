<script setup>
import Formulario from './components/Formulario.vue'
</script>

<template>
  <div id="app">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button variant="Formulario.vue">Formulario</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'inico',
            active: true
          }
        ]
      }
    }
  }
</script>
