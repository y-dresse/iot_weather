<template>
  <div v-if="$wait.is('loading')">
    <b-progress type="is-success" :value="$wait.percent('loading')" show-value></b-progress>
  </div>
  <div v-else>
    <router-view/>
  </div>
</template>

<script>
export default {
  async created(){
    this.$wait.start('loading');
    await this.$store.dispatch('weather/load_stations');
    this.load_stations();
    setTimeout(() => this.$wait.end('loading'), 1);
  },
  methods: {
    async load_stations(){
      try {
        const response = await this.axios.get('/api/stations');
        console.log(response)
      } catch(error){
        console.log(error);
      }
    }
  },
}
</script>
<style lang="scss">
</style>
