<template>
  <svg v-bind:class="'icon icon-' + name">
    <use v-bind:xlink:href="'#icon-' + name" />
  </svg>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>
