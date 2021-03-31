<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h2 class="display-4">{{ game.name }}</h2>
        <p class="lead">{{ game.description }}</p>
      </div>
    </div>

    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6">
          <h3 class="my-5">Ratings by users</h3>

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="count,index in ratings">
              <span class="display-4">{{ index + 1 }}</span>

              <div class="progress w-100 mx-2">
                <div class="progress-bar" v-bind:style="'width:' + ((count * 100) / game.ratings.length) + '%'"></div>
              </div>

              <span class="badge badge-primary badge-pill">{{ count }}</span>
            </li>
          </ul>
        </div>

        <div class="col-md-6">
          <h3 class="my-5">Users who have this game</h3>

          <div class="row">
            <div class="col-lg-2 col-sm-3 col-4" v-for="item in game.users">
              <img class="rounded-circle w-100 mb-3" v-bind:alt="item.name" v-bind:title="item.name" v-bind:src="item.avatar.url">
            </div>
          </div>
        </div>
      </div>


      <div class="my-5">
        <h3 class="my-5">Comments</h3>

        <div class="media" v-for="item in game.comments">
          <img class="mr-3" v-bind:alt="item.user.name" v-bind:title="item.user.name" v-bind:src="item.user.avatar.url">
          <div class="media-body">
            <h5 class="mt-0">{{ item.title }}</h5>
            {{ item.content }}
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
        game: {
          name: 'The Game',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corporis debitis, facilis minus aliquam praesentium laboriosam, ipsum commodi eligendi nobis iste eius, quasi expedita, odio soluta! Illo, quis id minima!',

          ratings: [
            { number: 1 },
            { number: 1 },
            { number: 2 },
            { number: 2 },
            { number: 2 },
            { number: 3 },
            { number: 5 },
            { number: 5 },
            { number: 5 },
            { number: 5 },
            { number: 5 }
          ],

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
          ],

          comments: [
            {
              user: {
                avatar: { url: 'http://via.placeholder.com/64' },
                name: 'John Doe'
              },
              title: 'Lorem ipsum dolor',
              content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
            }
          ]
        }
      }
    },

    computed: {
      ratings () {
        const output = [...Array(_RATING_MAX_)].map(v => 0)

        for (const rating of this.game.ratings) {
          output[rating.number - 1] += 1
        }

        return output
      }
    }
  }
</script>
