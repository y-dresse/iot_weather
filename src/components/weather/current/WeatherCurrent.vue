<template>
    <div class="block">
        <div class="columns is-flex weather-current">
            <div class="column has-text-centered is-vcentered">
                <h1 class="title mb-2">
                    {{weather.temperature}}
                    <i class="wi wi-celsius"></i>
                </h1>
                <h1 class="is-size-3">
                    <i :class="getWeatherIcon()"></i>
                </h1>

                <h1 class="subtitle mt-2">
                    <i :class="getWindIcon()"></i> 
                    -
                    {{weather.windSpeed}}km/h
                    -
                    <i :class="getWindDirection()"></i>
                </h1>
            </div>
            <div class="column is-narrow">
                <WeatherTableData />
            </div>
        </div>    
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import WeatherTableData from '@/components/weather/current/WeatherTableData.vue';
import moment from 'moment';
@Component({
    components: {
        WeatherTableData
    },
    computed: {
        ...mapGetters({
            weather: 'weather/current_weather'
        })
    },
})
export default class WeatherCurrent extends Vue {
    public current! : any;
    public weather!: any;

    getWindIcon(){
        const speed = this.weather.windSpeed;
        let icon = "wi wi-wind-beaufort-"
        const max_speed = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 107, 1000]
        for(let i = 0; i < max_speed.length; i++) 
            if(speed < max_speed[i]){
                return icon + '' + i.toString();
            }
    }

    getWindDirection(){
        const direction = this.weather.windDirection;
        return "wi wi-wind wi-from-" + direction.toLowerCase()
    }

    getWeatherIcon(){
        const hour = moment(this.weather.currentTime).hour();
        let icon = "wi wi-"
        const rain =  this.weather.precipitation  ? "rain" : null
        const day = hour > 18 && hour < 7 ? "night" : "day";

        if(rain)
            return icon + day + "-" + rain
        else{
            return day === "night" ? icon + day + -"clear" : icon + day + "-sunny"
        }
        return icon;
    }
}
</script>

<style>
    .weather-current {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
</style>