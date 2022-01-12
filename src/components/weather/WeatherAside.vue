<template>
    <section v-if="current">
        <weather-header :weather="current"/>
        <!-- <weather-current />
        <weather-last-data /> -->
    </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from "vuex";

import WeatherHeader from '@/components/weather/WeatherHeader.vue';
import WeatherCurrent from '@/components/weather/WeatherCurrent.vue';
import WeatherLastData from '@/components/weather/WeatherLastData.vue';

@Component({
    computed: {
        ...mapGetters({
            current: 'weather/current_station',
        })
    },
    components: {
        WeatherHeader,
        WeatherCurrent,
        WeatherLastData
    }
})
export default class WeatherAside extends Vue {
    public current! : any;
}
</script>


<style>

</style>