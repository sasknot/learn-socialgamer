<template>
  <div>
    <section class="jumbotron home_intro">
      <div class="container">
        <h2>Come join us</h2>
        <p class="lead text-muted">
          Be connected with people who shares the same interests as yours, show your gaming experience with everyone and be part of a network that grows constantly!
        </p>
        <p>
          <router-link to="/sign-up" class="btn btn-lg btn-primary m-2">Sign up</router-link>
          <router-link to="/intro" class="btn btn-lg btn-secondary m-2">Tel me more...</router-link>
        </p>
      </div>
    </section>

    <div class="album py-5">
      <div class="container">
        <game-results v-bind:items="games"></game-results>
        <div class="text-right">
          <router-link to="/game/list" class="btn btn-lg btn-primary">See more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .home_intro
    text-align: center

    h2
      font-size: 3rem
</style>

<script>
  import GameResults from '../components/game/game-results'

  export default {
    components: {
      GameResults
    },

    data () {
      return {
        games: [...Array(9).keys()]
      }
    }
  }
</script>
