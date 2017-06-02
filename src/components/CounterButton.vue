<template>
  <div class="">
    <button v-on:click="increment()">Increment</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$emit('increment')
    }
  }
}
</script>

<style>

</style>
