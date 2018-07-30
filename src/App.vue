<template>
  <div id="app" style="min-width:800px">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP'
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  margin: auto;
}
</style>
