<template>
  <div class="container">
    <section class="page_title">
      <h2>Consoles</h2>
    </section>

    <section class="console_list">
      <div class="console_list--results my-5">
        <console-results v-bind:items="items"></console-results>
      </div>
    </section>
  </div>
</template>

<script>
  import ConsoleResults from '../../components/console/console-results'

  export default {
    components: {
      ConsoleResults
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
