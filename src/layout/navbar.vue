<template>
  <div style="margin:auto 0;position:fixed;width:100%;min-width:800px;top:0px;background-color: #048cff;height:32px;color:#fff;">
    <span class="header-left">{{curDate}}  登陆人：John</span>
  </div>
</template>

<script>
import { util } from '@/utils/util';
export default {
  data () {
    return {
      curDate: ''
    };
  },
  methods: {
    handleSelect (key, keyPath) { }
  },
  created () {
    this.curDate = util.getCurDateTimeWeek();
    setInterval(function () {
      this.curDate = util.getCurDateTimeWeek();
    }.bind(this), 1000);
  }
};
</script>

<style lang="scss" scoped>
.header-left {
  height: 100%;
  line-height: 32px;
  margin-left: 15px;
}
</style>
