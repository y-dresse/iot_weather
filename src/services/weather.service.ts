import axios from 'axios';
import Vue from 'vue';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = "http://172.19.128.107:8081/meteo-0.0.1-SNAPSHOT/"

export async function get_stations(){
    try {
        const response = await axios.get(`stations`);
        return response.data;
    } catch (error){
        console.log(error)
    }
}

export async function get_weather_info(id: number){
    try {
        const response = await axios.get(`station/${id}`)
        return response.data;
    } catch (error){
        console.log(error);
    }
}