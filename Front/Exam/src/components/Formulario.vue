<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Brand:"
        label-for="input-1"
        description="Dato alfanumerico (no lleva signos)"
      >
        <b-form-input
          id="brandInput"
          v-model="form.brand"
          type="text"
          placeholder="Colocar Brand:"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Model:" label-for="modelInput">
        <b-form-input
          id="modelInput"
          v-model="form.model"
          type="text"
          placeholder="Colocar model"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Year:" label-for="yearInput">
        <b-form-input
          id="yearInput"
          v-model="form.year"
          type="number"
          maxLength="4"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Serie:" label-for="serieInput">
        <b-form-input
          id="serieInput"
          v-model="form.serie"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import saveData from "../axios/no"
export default {
  data() {
    return {
      items: [
        {
          text: "inicio",
          to: { name: "App.vue" },
        },
        {
          text: "Formulario",
          active: true,
        },
      ],
    };
    
  },
  form: {
          brand: "",
          model: "",
          year: "",
          serie: "",
  },
  mounted(){
    this.saveData();
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if(this.year > 2024){
        alert("El año no puede ser mayor a 2024")
      }
      saveData.saveData(form);
    },
    onReset(event) {
      event.preventDefault();
      this.form.brand = "";
      this.form.model = "";
      this.form.year = "";
      this.form.serie = "";
    },
  },
};
</script>

<style>
</style>

