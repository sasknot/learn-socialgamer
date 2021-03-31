<template>
  <div class="container-sm">
    <template v-if="success">
      <section class="page_title">
        <h2>Sign up successful!</h2>
        <p>
          Now you are part of something great, be an explorer and enjoy our network.
          <br>Add games or consoles to your collection, be friends with people, share your opinions... be one of us!
        </p>
      </section>

      <section class="sign_up_initial_steps" v-if="success">
        <p>
          <router-link to="/game/list" class="btn btn-lg btn-primary">See all games</router-link>
          <router-link to="/console/list" class="btn btn-lg btn-primary">See all consoles</router-link>
        </p>

        <game-recently-released></game-recently-released>
      </section>
    </template>

    <template v-else>
      <section class="page_title">
        <h2>Sign Up</h2>
        <p>
          You are one step closer of being part of an incredible network of gamers!
          <br>Fill the info below and be ready to share your gaming experience.
        </p>
      </section>

      <section class="sign_up_form pb-5">
        <form v-on:submit.prevent="submit">
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control form-control-lg" v-model="model.email">
          </div>

          <div class="form-row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" class="form-control form-control-lg" v-model="model.name">
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label for="birthday">Birthday</label>
                <input id="birthday" type="text" class="form-control form-control-lg" v-model="model.birthday">
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" class="form-control form-control-lg" v-model="model.password">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="password_confirm">Confirm password</label>
                <input id="password_confirm" type="password" class="form-control form-control-lg" v-model="model.password_confirm">
              </div>
            </div>
          </div>

          <div class="text-right">
            <button type="submit" class="btn btn-lg btn-primary">Send</button>
          </div>
        </form>
      </section>
    </template>
  </div>
</template>

<script>
  import GameRecentlyReleased from '../components/game/recently-released'

  export default {
    components: {
      GameRecentlyReleased
    },

    data () {
      return {
        model: {
          name: '',
          email: '',
          birthday: '',
          password: '',
          password_confirm: ''
        },

        success: false
      }
    },

    methods: {
      submit () {
        console.log(this.model)

        this.success = true
      }
    }
  }
</script>
