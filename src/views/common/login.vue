<template>
  <div>
    <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="50px" class="demo-ruleForm">
      <el-form-item align="center">
        <h1>DarkNight后台管理系统</h1>
      </el-form-item>
      <el-form-item label="账号" prop="user" align="center">
        <el-input v-model.number="ruleForm2.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item align=center>
        <el-button type="primary" @click="submitForm()">登陆</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import fetch from '../../fetch/api';
export default {
  data () {
    return {
      ruleForm2: {
        pass: '',
        user: ''
      }
    };
  },
  methods: {
    submitForm () {
      fetch('login', { userName: this.ruleForm2.user, passWord: this.ruleForm2.pass }).then((data) => {
        if (data.status === 'true') {
          this.$store.commit('CHANGE_LOGIN_STATE', 1);
          if (this.$route.query.Rurl) {
            this.$router.push(this.$route.query.Rurl);
          } else {
            this.$router.push('/');
          }
          this.$message({
            message: data.message,
            type: 'success'
          });
        } else {
          this.$message.error(data.message);
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
.demo-ruleForm {
  padding: 30px;
  padding-right: 40px;
  background-color: white;
  position: absolute;
  left: calc(50% - 210.9px);
  top: calc(50% - 220px);
}
</style>
