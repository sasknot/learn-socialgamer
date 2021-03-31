<template>
  <div class="container">
    <section class="page_title">
      <h2>Games</h2>
    </section>

    <section class="game_list">
      <form class="game_list--filters" v-on:submit.prevent="filter">
        <div class="row">
          <div class="col">
            <label for="name">Filter by name</label>
            <input id="name" type="text" class="form-control" v-model="filters.name">
          </div>
          <div class="col">
            <label for="sort">Sort by</label>
            <select id="sort" class="form-control" v-model="filters.sort">
              <option value=""></option>
              <option value="name">Name</option>
              <option value="release_date">Release date</option>
            </select>
          </div>
        </div>
      </form>

      <div class="game_list--results my-5">
        <game-results v-bind:items="items"></game-results>
      </div>
    </section>
  </div>
</template>

<script>
  import GameResults from '../../components/game/game-results'

  export default {
    components: {
      GameResults
    },

    data () {
      return {
        filters: {
          name: '',
          sort: ''
        },

        items: [...Array(6).keys()]
      }
    },

    methods: {
      filter () {
        console.log(this.filters)
      }
    }
  }
</script>
