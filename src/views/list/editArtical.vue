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
          <el-button type="primary" @click="onSubmit">立即保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-footer>
  </el-container>
</template>
<script>
import fetch from '../../fetch/api';
import { mapActions } from 'vuex';
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
        id: null,
        title: null,
        type: null,
        content: null,
        date: util.getCurDateWithOutTimeWeek()
      }
    };
  },
  methods: {
    ...mapActions({
      delVisitedTab: 'delVisitedView'
    }),
    onSubmit () {
      fetch('artical/edit', this.formInline).then((data) => {
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
  },
  activated () {
    let loading = this.$loading({
      lock: true,
      text: 'Loading...',
      background: 'rgba(0, 0, 0, 0.6)'
    });
    if (this.$route.query.id) {
      loading.close();
      fetch('artical/list', { id: this.$route.query.id }).then((data) => {
        if (data.status === 'true') {
          let dataSource = data.list[0];
          this.formInline.id = dataSource._id;
          this.formInline.title = dataSource.title;
          this.formInline.type = dataSource.type;
          this.formInline.content = dataSource.content;
        } else {
          this.$message.error(data.message);
        }
      });
    } else {
      setTimeout(() => {
        loading.close();
        this.delVisitedTab(this.$route.name);
        this.$router.push('/articalList');
        this.$message({
          message: '请先选择要编辑的文章',
          center: true,
          type: 'success'
        });
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  margin-top: 30px;
}
</style>
