<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h2 class="display-4">{{ console.name }}</h2>
        <p class="lead">{{ console.description }}</p>
      </div>
    </div>

    <div class="container">
      <div class="my-5">
        <h3 class="my-5">Users who have this console</h3>

        <div class="row">
          <div class="col-lg-1 col-md-2 col-sm-3 col-4" v-for="item in console.users">
            <img class="rounded-circle w-100 mb-3" v-bind:alt="item.name" v-bind:title="item.name" v-bind:src="item.avatar.url">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

</style>

<script>
  const _RATING_MAX_ = 5

  export default {
    data () {
      return {
        console: {
          name: 'The Console',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corporis debitis, facilis minus aliquam praesentium laboriosam, ipsum commodi eligendi nobis iste eius, quasi expedita, odio soluta! Illo, quis id minima!',

          users: [
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'John Doe'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'Monty Python'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'Luther Blissett'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'Monty Cantsin'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'Geoffrey Cohen'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'Karen Eliot'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'Poor Konrad'
            }
          ]
        }
      }
    }
  }
</script>
