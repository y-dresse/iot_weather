<template>
    <div class="block has-background-grey">
        <h1 class="subtitle">Dernières données météos</h1>
        <div class="columns">
            <div class="column" v-for="(weather, index) in current.meteos" :key="index">
                {{weather.temperature}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
    computed: {
        ...mapGetters({
            current: 'weather/current_station',
            weather: 'weather/current_weather'
        })
    }
})
export default class WeatherLastData extends Vue {
    public current! : any;
    public weather!: any;
}
</script>