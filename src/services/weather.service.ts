import axios from 'axios';
import Vue from 'vue';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const BASE_URL = "http://172.19.128.107:8081/meteo-0.0.1-SNAPSHOT"
export async function get_stations(){
    try {
        const response = await axios.get(`http://localhost:8000/meteo-0.0.1-SNAPSHOT/api/stations`);
        console.log(response);
        return response;
    } catch (error){
        console.log(error)
    }
}