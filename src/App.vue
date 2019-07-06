<template>
  <div id="app">
    <Splash msg="Get your Gists"/>
    <Login/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Splash from './components/Splash.vue';
import Login from './components/Login.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Login,
    Splash,
  },
};
</script>

<style>
body {
  background-color: #f9f9f9;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2rem auto;
  max-width: 80%;
}
</style>
