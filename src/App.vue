<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

.top {
  height: 50px;
  line-height: 50px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

.router-link-exact-active {
  color: #42b983;
}
</style>
