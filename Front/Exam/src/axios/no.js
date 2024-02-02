import  Axios from ' Axios';
import Vue from 'vue';
import { axios } from 'vue/types/umd';

Vue.use(axios);

const url = 'http://localhost:3306/api/vehiculos'; // Reemplaza con la URL de tu API REST

const getData = async(brand, model, year, serie) => {
    const params = {
        brand,
        model,
        year,
        serie
    }
 try {
 const response = await  Axios.post(url, {params});
 return response.data;
 } catch (error) {
 throw error;
 }
}

const saveData = async(brand, model, year, serie) => {
    const params = {
        brand,
        model,
        year,
        serie
    }
 try {
 const response = await  Axios.post(url, params);
 return response.data;
 } catch (error) {
 throw error;
 }
}

export default {
    getData,
    saveData
}
