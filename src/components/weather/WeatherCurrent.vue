<template>
    <div class="block has-background-info">
        <h1 class="subtitle">Donnée courante</h1>
        <div class="columns">
            <div class="column has-text-centered">
                <h1 class="title">{{weather.temperature}}°C</h1>
                <h1 class="subtitle">Vent: {{weather.windSpeed}}km/h</h1>
            </div>
            <div class="column">
                <WeatherTableData />
            </div>
        </div>    
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import WeatherTableData from '@/components/weather/WeatherTableData.vue';
@Component({
    components: {
        WeatherTableData
    },
    computed: {
        ...mapGetters({
            current: 'weather/current_station',
            weather: 'weather/current_weather'
        })
    }
})
export default class WeatherCurrent extends Vue {
    public current! : any;
    public weather!: any;
}
</script>