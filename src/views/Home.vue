<template>
  <section class="columns">
    <div class="column is-8">
      <World />
    </div>
    <div class="column is-4 has-background-primary">
      <WeatherAside />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import World from '@/components/charts/World.vue';
import WeatherAside from '@/components/weather/WeatherAside.vue';
@Component({
  components: {
    World,
    WeatherAside
  },
})
export default class Home extends Vue {}
</script>
