<template>
    <div class="block has-background-grey">
        <h1 class="subtitle">Dernières données météos</h1>
        <div class="columns" v-for="(weather, index) in current.meteos" :key="index">
            <div class="column">
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
            current: 'weather/current_station'
        })
    }
})
export default class WeatherLastData extends Vue {
    public current! : any;
}
</script>