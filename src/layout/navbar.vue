<template>
  <div style="margin:auto 0;position:fixed;width:100%;min-width:800px;top:0px;background-color: #048cff;height:32px;color:#fff;">
    <span class="header-left">{{curDate}} 登陆人：John</span>
    <span class="header-right">
      <a @click=logOut style="cursor:pointer">
        <i class="el-icon-setting" style="font-size: 14px;"></i>
        退出
      </a>
    </span>
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
    handleSelect (key, keyPath) { },
    logOut () {
      this.$store.commit('CHANGE_LOGIN_STATE', 0);
      var keys = document.cookie.match(/[^ =;]+(?=\\=)/g);
      if (keys) {
        for (var i = keys.length; i--;) {
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
        }
      }
      let loading = this.$loading({
        lock: true,
        text: 'Loading...',
        background: 'rgba(0, 0, 0, 0.6)'
      });
      setTimeout(() => {
        loading.close();
        this.$router.push('/login');
      }, 1000);
    }
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
  float: left;
  height: 100%;
  line-height: 32px;
  margin-left: 15px;
  font-size: 13px;
}
.header-right {
  float: right;
  height: 100%;
  line-height: 32px;
  margin-right: 20px;
  font-size: 13px;
}
</style>
