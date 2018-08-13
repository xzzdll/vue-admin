<template>
  <div id="app" style="min-width:800px" :style="{height:pageHeight}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
  data () {
    return {
      pageHeight: 'auto'
    };
  },
  created () {
    let _this = this;
    _this.pageHeight = document.documentElement.clientHeight + 'px';
    window.addEventListener('resize', function () {
      _this.pageHeight = document.documentElement.clientHeight + 'px';
    }, false);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height:500px;
  margin: auto;
  background-color: #ececec;
}
</style>
