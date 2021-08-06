<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <header>
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </header>
    <router-view />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav li{
  display: inline-block;
  margin: 10px;
}
</style>
