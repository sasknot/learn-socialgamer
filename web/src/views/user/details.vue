<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="d-flex align-items-top">
          <img class="mr-4" v-bind:alt="user.name" v-bind:title="user.name" v-bind:src="user.avatar.url">
          <div>
            <h2 class="display-4">
              {{ user.name }}
              <button class="btn btn-sm btn-info" v-on:click="addFriend">Add as friend</button>
            </h2>
            <p class="lead">{{ user.description }}</p>
            <p>Birthday: {{ user.birthday }}</p>
            <p>Location: {{ user.location }}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="container mb-5">
      <div>
        <h3 class="my-5">Friends</h3>

        <div class="row">
          <div class="col-lg-1 col-md-2 col-sm-3 col-4" v-for="item in user.friends">
            <img class="rounded-circle w-100 mb-3" v-bind:alt="item.name" v-bind:title="item.name" v-bind:src="item.avatar.url">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <h3 class="my-5">Games</h3>

          <div class="row">
            <div class="col-lg-2 col-sm-3 col-4" v-for="item in user.games">
              <img class="rounded-circle w-100 mb-3" v-bind:alt="item.name" v-bind:title="item.name" v-bind:src="item.cover.url">
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <h3 class="my-5">Consoles</h3>

          <div class="row">
            <div class="col-lg-2 col-sm-3 col-4" v-for="item in user.consoles">
              <img class="rounded-circle w-100 mb-3" v-bind:alt="item.name" v-bind:title="item.name" v-bind:src="item.cover.url">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

</style>

<script>
  export default {
    data () {
      return {
        user: {
          avatar: { url: 'http://via.placeholder.com/150x200' },
          name: 'John Doe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eveniet, deserunt. Recusandae animi vero harum ex quaerat deserunt autem, tenetur laboriosam consequuntur corporis nobis, aspernatur illo quam labore nihil cum.',
          location: 'California, USA',
          birthday: '2000-10-10',

          friends: [
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'User 1'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'User 2'
            },
            {
              avatar: { url: 'http://via.placeholder.com/64' },
              name: 'User 3'
            }
          ],

          games: [
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Game 1'
            },
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Game 2'
            },
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Game 3'
            },
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Game 4'
            },
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Game 5'
            }
          ],

          consoles: [
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Console 1'
            },
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Console 2'
            },
            {
              cover: { url: 'http://via.placeholder.com/64' },
              name: 'The Console 3'
            }
          ]
        }
      }
    },

    methods: {
      addFriend () {
        console.log('add as friend')
      }
    }
  }
</script>
