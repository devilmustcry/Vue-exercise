<template>
  <div class="hello">
    <header-view :color="color" @headerClick="changeColor()"></header-view>
    <h1>{{msg}}</h1>
    <input v-model="color">
    <hr>
    <counter-button :number="number" @increment="increment()"></counter-button>
    {{number}}
  </div>
</template>

<script>
import HeaderView from './Header'
import CounterButton from './CounterButton'
export default {
  name: 'hello',
  data () {
    return {
      color: '#FFF',
      msg: 'Welcome to Your Vue.js App',
      number: 0
    }
  },
  methods: {
    changeColor () {
      this.color = '#FFF'
    },
    increment () {
      this.number++
    }
  },
  components: {
    HeaderView,
    CounterButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
