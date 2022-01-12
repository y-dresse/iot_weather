<template>
    <div class="block has-background-info">
        <h1 class="subtitle">Donnée courante</h1>
        <div class="columns">
            <div class="column">
                {{current}}
                <h1 class="title">{{current.meteos[0].temperature}}</h1>
            </div>
            <div class="column">
                {{current.pressure}}
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
export default class WeatherCurrent extends Vue {
    public current! : any;
}
</script>