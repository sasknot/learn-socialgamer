<template>
  <div>
    <section class="intro_cover">
      <div class="holder d-flex w-100 h-100 p-3 mx-auto align-items-center">
        <div>
          <h2 class="my-3">Are you ready for this?</h2>
          <p class="lead my-3">
            This is a networks for gamers all around the world. You will see something different, something that will change your mind about games. We are all together in this, prepare yourself for the next level of what games really are.
          </p>
          <p class="lead my-5">
            Scroll down for more
            <svg-icon name="scroll"></svg-icon>
          </p>
        </div>
      </div>
    </section>

    <div id="features" class="container">
      <section class="intro_feature">
        <div class="row">
          <div class="col-md-7">
            <h2>Show your gaming experience. <span class="text-muted">You deserve it.</span></h2>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </p>
          </div>

          <div class="col-md-5">
            <img src="http://via.placeholder.com/500x500" alt="500x500">
          </div>
        </div>
      </section>

      <hr class="my-5">

      <section class="intro_feature">
        <div class="row">
          <div class="col-md-7 order-md-2">
            <h2>Add games or consoles to your collection. <span class="text-muted">So much content.</span></h2>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img src="http://via.placeholder.com/500x500" alt="500x500">
          </div>
        </div>
      </section>

      <hr class="my-5">

      <section class="intro_feature">
        <div class="row">
          <div class="col-md-7">
            <h2>Share your opinions. <span class="text-muted">Be friends with people.</span></h2>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
            </p>
          </div>
          <div class="col-md-5">
            <img src="http://via.placeholder.com/500x500" alt="500x500">
          </div>
        </div>
      </section>

      <hr class="my-5">

      <section class="intro_sign_up">
        <p>What are you waiting for?</p>
        <router-link to="/sign-up" class="btn btn-lg btn-primary">Sign up right now</router-link>
      </section>
    </div>
  </div>
</template>

<style lang="sass">
  .intro_cover
    background-color: #333
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5)
    color: #fff
    display: flex
    height: 100vh
    text-align: center
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5)

    .holder
      max-width: 700px

    .icon
      display: block
      height: 50px
      margin: 10px auto 0
      width: 50px

  section.intro_feature
    margin: 50px 0

    h2
      font-weight: 300
      line-height: 1
      letter-spacing: -.05rem

    img
      max-width: 100%


  section.intro_sign_up
    margin: 100px 0
    text-align: center

    p
      font-size: 2rem

  @media (min-width: 40em)
    section.intro_feature
      h2
        font-size: 3rem

  @media (min-width: 62em)
    section.intro_feature
      h2
        margin-top: 8rem
</style>

<script>
  export default {

  }
</script>
