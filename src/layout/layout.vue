<template>
  <div>
    <!--侧边菜单栏-->
    <leftBar></leftBar>
    <!--标签栏-->
    <navbar></navbar>
    <!--主要内容-->
    <tabContent>
    </tabContent>
  </div>
</template>

<script>
import navbar from './navbar';
import leftBar from './leftBar';
import tabContent from './tabContent';
export default {
  name: 'layout',
  components: {
    navbar,
    tabContent,
    leftBar
  }
};
</script>
