<template>
  <el-container>
    <el-header>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="文章标题">
          <el-input v-model="formInline.title" placeholder="请输入文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select v-model="formInline.type" placeholder="请选择文章类型">
            <el-option label="ES6" value="ES6"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Vue" value="Vue"></el-option>
            <el-option label="Node" value="Node"></el-option>
            <el-option label="Css" value="Css"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main style="height:390px">
      <quill-editor v-model="formInline.content" ref="myQuillEditor" :options="editorOption" style="height:270px">
      </quill-editor>
    </el-main>
    <el-footer>
      <el-form>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-footer>
  </el-container>
</template>
<script>
import fetch from '../../fetch/api';
import { util } from '../../utils/util';
import hljs from 'highlight.js';
export default {
  data () {
    return {
      editorOption: {
        modules: {
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        },
        theme: 'snow'
      },
      formInline: {
        title: null,
        type: null,
        content: null,
        date: util.getCurDateWithOutTimeWeek()
      }
    };
  },
  methods: {
    onSubmit () {
      fetch('artical/create', this.formInline).then((data) => {
        if (data.status === 'true') {
          this.$message({
            message: data.message,
            type: 'success'
          });
          this.formInline = {
            title: null,
            type: null,
            content: null,
            date: util.getCurDateWithOutTimeWeek()
          };
          this.$router.push('/articalList');
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
