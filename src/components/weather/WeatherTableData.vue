<template>
    <table class="table is-narrow is-fullwidth" style="background: none; border: none;">
        <tbody>
            <tr>
                <td>Humidité</td>
                <th>{{weather.humidity}}</th>
            </tr>
            <tr>
                <td>Pression</td>
                <th>{{weather.pressure}}</th>
            </tr>
            <tr>
                <td>Couverture nuageuse</td>
                <th>{{weather.cloudCoverage}}</th>
            </tr>
            <tr>
                <td>Altitude des nuages</td>
                <th>{{weather.cloudAltitude}}</th>
            </tr>
            <tr>
                <td>Précipitation</td>
                <th>{{weather.precipitation}}</th>
            </tr>
            <tr>
                <td>Direction du vent</td>
                <th>{{weather.windDirection}}</th>
            </tr>
            <tr>
                <td>Vitesse du vent</td>
                <th>{{weather.windSpeed}}</th>
            </tr>
            <tr>
                <td>Degré du vent</td>
                <th>{{weather.windDegree}}</th>
            </tr>
            <tr>
                <td>Indice UV</td>
                <th>{{weather.uv}}</th>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
    computed: {
        ...mapGetters({
            weather: 'weather/current_weather'
        })
    }
})
export default class WeatherTableData extends Vue {
    public weather!: any;
}
</script>
<style>

</style>