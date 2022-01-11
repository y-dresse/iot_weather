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
                title: '',
                mapNavigation: {
                    enabled: true,
                },
                series: [{
                    // Use the gb-all map with no data as a basemap
                    name: 'Basemap',
                    borderColor: '#A0A0A0',
                    nullColor: 'rgba(200, 200, 200, 0.3)',
                    showInLegend: false
                }]
            }
    };
}
};
</script>

<style lang="css">
</style>