<template>
    <nav class="level mx-3 mt-3">
        <div class="level-left">
            <h1 class="title">{{weather.name}}</h1>
        </div>
        <div class="level-right">
            <b-tooltip label="Fermer le menu" position="is-left">
                <b-button type="is-danger" rounded icon-right="close" @click="closeMenu"/>
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