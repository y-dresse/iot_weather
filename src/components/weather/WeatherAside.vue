<template>
    <section v-if="current" class="weather-aside">
        <weather-header :weather="current" />
        <hr />
        <div class="mx-2 mb-5">
            <b-message type="is-info">
                Dernières données météos {{convertFromNow(current.meteos[0].currentTime)}}. 
                ({{convertTime(current.meteos[0].currentTime)}})
            </b-message>
        </div>

        <weather-current :weather="current" />
        <hr />
        <weather-history :weather="current" />
    </section>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from "vuex";

import WeatherHeader from '@/components/weather/WeatherHeader.vue';
import WeatherCurrent from '@/components/weather/current/WeatherCurrent.vue';
import WeatherHistory from '@/components/weather/history/WeatherHistory.vue';

import moment from 'moment';
@Component({
    computed: {
        ...mapGetters({
            current: 'weather/current_station',
        })
    },
    components: {
        WeatherHeader,
        WeatherCurrent,
        WeatherHistory
    },
    methods: {
        convertFromNow(time){
            return moment(time).locale("fr").fromNow();
        },
        convertTime(time){
            return moment(time).locale("fr").format("LLL");
        }
    }
})
export default class WeatherAside extends Vue {
    public current! : any;
}
</script>


<style>
    .weather-aside {
        -webkit-box-shadow: -10px 8px 6px -4px rgba(0,0,0); 
        box-shadow: -10px 8px 6px -4px rgba(0,0,0);
        height: 100vh;
        margin-top: 0;
        padding: 3px 20px;
    }
</style>