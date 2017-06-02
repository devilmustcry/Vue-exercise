<template lang="html">
  <div class="" @click="headerClick" :style="`background-color: ${color};`">
    {{color}}
    <h1>This is a header</h1>
  </div>
</template>

<script>
export default {
  props: ['color'],
  methods: {
    headerClick () {
      this.$emit('headerClick')
    }
  }
}
</script>

<style lang="css">
</style>
