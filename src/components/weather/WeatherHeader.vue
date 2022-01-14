<template>
    <nav class="level mx-3 pt-4">
        <div class="level-left">
            <div class="level-item">
                <h1 class="title">{{weather.nom}}</h1>    
            </div>
            <div class="level-item mt-3">
                <b-button tag="a"
                    type="is-ghost"
                    class="is-size-7"
                    :href="`https://www.openstreetmap.org/?mlat=${weather.latitude}&mlon=${weather.longitude}`"
                    icon-left="map-marker"
                    target="_blank">
                    Afficher {{weather.nom}} sur openstreetmap
                </b-button>
            </div>


        </div>
        <div class="level-right">
            <b-tooltip label="Fermer le menu" position="is-left">
                <b-button type="is-primary" rounded icon-right="close" @click="closeMenu"/>
        </b-tooltip>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WeatherHeader extends Vue {
    @Prop({ type: Object, default: undefined, required: true }) readonly weather! : any; 
    
    closeMenu(){
        this.$store.dispatch('weather/remove_current');
    }
}
</script>


<style>
</style>