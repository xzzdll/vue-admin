<template>
  <div style="margin:auto 0;position:fixed;width:calc(100% - 210px);min-width:800px;left:210px;top:0px;background-color: #048cff;height:50px">
    <span>{{curDate}}</span>
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
