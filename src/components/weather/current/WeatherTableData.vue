<template>
    <table class="table is-narrow is-fullwidth" style="background: none; border: none;">
        <tbody>
            <tr>
                <td>
                    <i class="wi wi-humidity"></i>
                    Humidité</td>
                <th>{{weather.humidity}} %</th>
            </tr>
            <tr>
                <td>
                    <img src="https://img.icons8.com/metro/16/000000/atmospheric-pressure.png"/>
                    Pression</td>
                <th>{{weather.pressure}} Pa</th>
            </tr>
            <tr>
                <td>
                    <i class="wi wi-cloud"></i>
                    Couverture nuageuse</td>
                <th>{{weather.cloudCoverage}}</th>
            </tr>
            <tr>
                <td><i class="wi wi-smog"></i>Altitude des nuages</td>
                <th>{{weather.cloudAltitude}} m</th>
            </tr>
            <tr>
                <td>
                    <b-icon size="is-small" icon="sun-wireless" pack="mdi"></b-icon>
                    Indice UV</td>
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