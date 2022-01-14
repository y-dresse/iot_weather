<template>
    <div>
        <h1 class="title">Dernières données météos</h1>
        <div class="columns history-scroll" style="overflow-x: scroll; scrollbar-width: thin">
            <div class="column is-2 has-text-centered mx-1 box"  v-for="(weather, index) in current.meteos" :key="index">
                <p>{{convertCurrentTime(weather.currentTime)}}</p>
                <p class="is-size-4"><i  :class="getWeatherIcon()"></i></p>
                <p>{{weather.temperature}}<i class="wi wi-celsius"></i></p>
                <p><i class="is-size-7 wi wi-fw wi-humidity"></i>{{weather.humidity}} %</p>
                <p>{{weather.windSpeed}} km/h <i :class="getWindDirection()"></i></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import moment from 'moment';

@Component({
    computed: {
        ...mapGetters({
            current: 'weather/current_station',
            weather: 'weather/current_weather'
        })
    },
    methods: {
        convertCurrentTime(time){
            return moment(time).format("DD/MM HH:mm:ss");
        }
    },
})
export default class WeatherHistory extends Vue {
    public current! : any;
    public weather!: any;

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
}
</script>

<style>

</style>