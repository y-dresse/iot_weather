<template>
    <div>
        <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
</template>

<script>
import worldMap from '@highcharts/map-collection/countries/fr/fr-all.geo.json'

export default {
    data() {
        return {
            chartOptions: {
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
                    enalble: false
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
                },
                {
                    showInLegend: false,
                    name: 'Stations',
                    type:'mappoint',
                    color: 'red',
                    point: {
                        events: {
                            click: (e) => {
                                this.open_data(e)
                            }
                        }
                    },
                    data: [{
                        x: 4200,
                        y: -7350,
                        name: 'Paris'
                    }]
                }]
            }
    };
    },
    methods: {
        open_data(e){
            console.log(e)
        }
    }
};
</script>

<style lang="css">
    .hc {
        margin-top: 5vh;
        height: 90vh;
    }
</style>