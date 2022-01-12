<template>
  <section class="columns">
    <div class="column is-8">
      <FranceChart />
    </div>
    <div class="column is-4 box">
      <WeatherAside />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FranceChart from '@/components/charts/FranceChart.vue';
import WeatherAside from '@/components/weather/WeatherAside.vue';
@Component({
  components: {
    FranceChart,
    WeatherAside
  },
})
export default class Home extends Vue {}
</script>
