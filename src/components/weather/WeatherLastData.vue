<template>
    <div class="block has-background-grey">
        <h1 class="subtitle">Dernières données météos</h1>
        <div class="columns">
            <div class="column is-2 has-text-centered" v-for="(weather, index) in current.meteos" :key="index">
                <h3>{{convertCurrentTime(weather.currentTime)}}</h3>
                <h2>{{weather.temperature}}°C</h2>
                <h3>{{weather.humidity}} %</h3>
                <h3>{{weather.pressure}} bar</h3>
                <h3>{{weather.precipitation}} mm</h3>
                <h3>{{weather.windSpeed}} km/h</h3>
                <h3>{{weather.windDirection}}</h3>
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
export default class WeatherLastData extends Vue {
    public current! : any;
    public weather!: any;
}
</script>