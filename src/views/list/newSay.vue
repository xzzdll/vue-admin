<template>
  <el-container>
    <el-main style="height:390px">
      <quill-editor v-model="formInline.content" ref="myQuillEditor" :options="editorOption" style="height:270px">
      </quill-editor>
    </el-main>
    <el-footer>
      <el-form>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即发表</el-button>
        </el-form-item>
      </el-form>
    </el-footer>
  </el-container>
</template>
<script>
import fetch from '../../fetch/api';
import { util } from '../../utils/util';
export default {
  data () {
    return {
      editorOption: {},
      formInline: {
        content: null
      }
    };
  },
  methods: {
    onSubmit () {
      fetch('say/create',
        { content: this.formInline.content,
          date: util.getCurDateWithOutTimeWeek() }).then((data) => {
        if (data.status === 'true') {
          this.$message({
            message: data.message,
            type: 'success'
          });
          this.formInline = {
            title: null,
            type: null,
            tag: null,
            content: null
          };
          this.$router.push('/sayList');
        } else {
          this.$message.error(data.message);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  margin-top: 30px;
}
</style>
