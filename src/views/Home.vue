<template>
  <section>
    <World />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import World from '@/components/charts/World.vue';
@Component({
  components: {
    World
  },
})
export default class Home extends Vue {}
</script>
