<template>
  <div class="album py-5">
    <h3 class="pb-2">Rencently released games</h3>

    <game-results v-bind:items="items"></game-results>

    <div class="text-right">
      <router-link to="/game/list" class="btn btn-lg btn-primary">See more</router-link>
    </div>
  </div>
</template>

<script>
  import GameResults from './game-results'

  export default {
    components: {
      GameResults
    },

    data () {
      return {
        items: [...Array(6).keys()]
      }
    }
  }
</script>
