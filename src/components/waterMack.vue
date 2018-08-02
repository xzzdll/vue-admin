<template>
  <div class='waterMack'>
    <div class='waterMackContent' v-for="index in items" :key="index">
      <p>John &nbsp; {{curDate}}</p>
    </div>
  </div>
</template>

<script>
import { util } from '@/utils/util';
export default {
  data () {
    return {
      curDate: '',
      items: 20
    };
  },
  created () {
    this.curDate = util.getCurDateWithOutTimeWeek();
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
}

.waterMackContent {
  float: left;
  padding-top: 90px;
  width: 250px;
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
