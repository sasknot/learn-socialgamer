<template>
  <div class="row pb-4 game_results">
    <console-item v-for="item in items" v-bind:key="item.name" v-bind:item="item"></console-item>
  </div>
</template>

<style lang="sass">
  .game_results

</style>

<script>
  import ConsoleItem from './console-item'

  export default {
    components: {
      ConsoleItem
    },

    props: ['items']
  }
</script>
