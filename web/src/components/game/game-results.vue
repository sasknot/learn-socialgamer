<template>
  <div class="row pb-4 game_results">
    <game-item v-for="item in items" v-bind:key="item.name" v-bind:item="item"></game-item>
  </div>
</template>

<style lang="sass">
  .game_results

</style>

<script>
  import GameItem from './game-item'

  export default {
    components: {
      GameItem
    },

    props: ['items']
  }
</script>
