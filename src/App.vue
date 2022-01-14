<template>
  <div v-if="$wait.is('loading')">
    <b-progress type="is-success" :value="$wait.percent('loading')" show-value></b-progress>
  </div>
  <div id="app" v-else>
    <router-view/>
  </div>
</template>

<script>
export default {
  async created(){
    this.$wait.start('loading');
    await this.$store.dispatch('weather/load_stations');
    setTimeout(() => this.$wait.end('loading'), 1);
  }
}
</script>

<style>
  #app { 
    margin:0; 
    padding:0; 
    box-sizing:border-box; 
    height: 100vh; 
    overflow: hidden;
  }
</style>
