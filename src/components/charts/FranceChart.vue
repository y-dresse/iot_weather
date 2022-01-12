<template>
<div>
    <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
</div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Component, Vue } from 'vue-property-decorator';
import proj4 from 'proj4';
const worldMap = require('@highcharts/map-collection/countries/fr/fr-all-all.geo.json');

@Component({
    created(){
        window.proj4 = proj4;
    },
    computed: {
        ...mapGetters({
            stations: 'weather/stations',
        }),
    },
    methods: {

    },
})
export default class FranceChart extends Vue {
    open_data(event: any){
            console.log(event);
    }
    public stations! : any;
    public chartOptions : any = {
        chart: {
            map: worldMap,
        },
        title: {
            text: ''
        },
        mapNavigation: {
            enabled: true,
        },
        tooltip: {
            enable: false
        },
        series: [{
            name: 'France',
            borderColor: '#A0A0A0',
            nullColor: 'rgba(200, 200, 200, 0.3)',
            showInLegend: false
        }
        ,{
            name: 'Separators',
            type: 'mapline',
            nullColor: '#707070',
            showInLegend: false,
            enableMouseTracking: false
        },{
            type: 'mappoint',
            name: 'Villes',
            color: 'red',
            showInLegend: false,
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            point: {
                events: {
                    click: (event: any) => {
                        this.$store.dispatch('weather/load_weather_info', event.point.idStation)
                    }
                }
            },
            data: [{
                "idStation": 1,
                "name": "Paris",
                "lat" : 48.856614,
                "lon" : 2.3522219,
            },
            {
                "idStation": 2,
                "name": "Strasbourg",
                "lat" : 48.5734053,
                "lon" : 7.7521113,
            },
            {
                "idStation": 3,
                "name": "Reims",
                "lat" : 49.258329,
                "lon" : 4.031696,
            }]
        }]
    }
}
// import worldMap from '@highcharts/map-collection/countries/fr/fr-all-all.geo.json'
// export default {
//     data() {
//         return {
//             chartOptions: {
//                 chart: {
//                     backgroundColor: {
//                         linearGradient: [0, 0, 500, 500],
//                         stops: [
//                             [0, 'rgb(255, 255, 255)'],
//                             [1, 'rgb(200, 200, 255)']
//                         ]
//                     },
//                     map: worldMap,
//                 },
//                 title: {
//                     text: ''
//                 },
//                 mapNavigation: {
//                     enabled: true,
//                 },
//                 tooltip: {
//                     enalble: false
//                 },
//                 series: [{
//                     name: 'France',
//                     borderColor: '#A0A0A0',
//                     nullColor: 'rgba(200, 200, 200, 0.3)',
//                     showInLegend: false
//                 }
//                 ,{
//                     name: 'Separators',
//                     type: 'mapline',
//                     nullColor: '#707070',
//                     showInLegend: false,
//                     enableMouseTracking: false
//                 },
//                 {
//                     showInLegend: false,
//                     name: 'Stations',
//                     type:'mappoint',
//                     color: 'red',
//                     point: {
//                         events: {
//                             click: (e) => {
//                                 this.open_data(e)
//                             }
//                         }
//                     },
//                     keys: ['code_hasc', 'value'],
//                     joinBy: 'code_hasc',
//                     data: [{
//                         x: 4200,
//                         y: -7350,
//                         name: 'Paris'
//                     }]
//                 }]
//             }
//     };
//     },
//     methods: {
//         open_data(e){
//             console.log(worldMap);
//             console.log(e)
//         }
//     }
// };
</script>

<style lang="css">
    .hc {
        margin-top: 5vh;
        height: 90vh;
    }
</style>