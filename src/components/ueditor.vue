<template>
  <div>
    <script id="ueid" type="text/plain" style="width:1000px;height:240px;"></script>
  </div>
</template>
<script>
export default {
  name: 'UE',
  data () {
    return {
      editor: null
    };
  },
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object
    }

  },
  mounted () {
    const _this = this;
    this.editor = UM.getEditor('ueid', this.config); // 初始化UE
    this.editor.addListener('ready', function () {
      _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
    });
  },
  methods: {
    getUEContent () { // 获取内容方法
      return this.editor.getContent();
    }
  },
  destroyed () {
    this.editor.destroy();
  }
};
</script>
