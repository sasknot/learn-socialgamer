<template>
  <div class="col-md-4 mt-4">
    <div class="card">
      <img v-bind:src="item.cover.url" v-bind:alt="item.name" v-bind:title="item.name">

      <div class="card-body">
        <p class="card-text">
          {{ item.description | short }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <router-link to="/game/1" class="btn btn-sm btn-outline-secondary">View</router-link>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to collection</button>
          </div>

          <small class="text-muted game_item--rating">
            <svg-icon name="star"></svg-icon>
            <span>{{ item.rating }}</span>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .game_item--rating
    line-height: 31px

    span
      vertical-align: middle

    .icon
      height: 15px
      width: 15px
</style>

<script>
  export default {
    // props: ['item']

    data () {
      return {
        item: {
          cover: {
            url: 'http://via.placeholder.com/300x225'
          },
          name: 'The Game',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat earum doloribus adipisci asperiores, ea non totam dignissimos vitae laudantium harum rem voluptatem corrupti inventore veritatis. Deserunt in omnis esse, doloribus?',
          rating: Math.floor(Math.random() * 5) + 1
        }
      }
    },

    filters: {
      short (value, length = 100) {
        return value.length > length ? value.substr(0, length) + '...' : value
      }
    }
  }
</script>
