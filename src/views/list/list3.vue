<template>
  <section>
    <UE :defaultMsg='uetest' :config=config ref="ue"></UE>
  </section>
</template>

<script>
import UE from '@/components/ueditor.vue'; // 引入组件
export default {
  components: { UE },
  data () {
    return {
      uetest: '试一下！！！！',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      }
    };
  }
};
</script>
