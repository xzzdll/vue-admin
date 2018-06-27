<template>
  <div class='waterMack'>
    <div class='waterMackContent'>
      <img v-bind:src=[imgUrl]>
      <p>John &nbsp; 2018/6/27</p>
    </div>
    <div class='waterMackContent'>
      <img v-bind:src=[imgUrl]>
      <p>John &nbsp; 2018/6/27</p>
    </div>
    <div class='waterMackContent'>
      <img v-bind:src=[imgUrl]>
      <p>John &nbsp; 2018/6/27</p>
    </div>
    <div class='waterMackContent'>
      <img v-bind:src=[imgUrl]>
      <p>John &nbsp; 2018/6/27</p>
    </div>
    <div class='waterMackContent'>
      <img v-bind:src=[imgUrl]>
      <p>John &nbsp; 2018/6/27</p>
    </div>
    <div class='waterMackContent'>
      <img v-bind:src=[imgUrl]>
      <p>John &nbsp; 2018/6/27</p>
    </div>
    <div class='waterMackContent'>
      <img v-bind:src=[imgUrl]>
      <p>John &nbsp; 2018/6/27</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: 'https://connect.zto.com/oauth2/static/zto-express.c3f90932.png'
    };
  }
};
</script>

<style lang="scss" scoped>
.waterMack {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  height: 250px;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  opacity: 0.4;
  z-index: 99999;
}

.waterMackContent {
  float: left;
  padding-top: 90px;
  width: 300px;
  height: 180px;
  transform: rotate(-30deg);
  margin: 50px 47.666666666666664px;
}

img {
  width: 120px;
  float: left;
}

p {
  margin: 0px;
  margin-left: 3%;
  font-style: italic;
  font-family: sans-serif;
  color: #bbbbbb;
}
</style>
