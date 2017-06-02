<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    text () {
      return 'Hi'
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
