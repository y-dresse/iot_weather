<template>
    <section>
        <weather-header />
        <weather-current />
        <weather-last-data />
    </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WeatherHeader from '@/components/weather/WeatherHeader.vue';
import WeatherCurrent from '@/components/weather/WeatherCurrent.vue';
import WeatherLastData from '@/components/weather/WeatherLastData.vue';
@Component({
    components: {
        WeatherHeader,
        WeatherCurrent,
        WeatherLastData
    }
})
export default class WeatherAside extends Vue {}
</script>


<style>

</style>