<template lang="html">
  <el-form ref="form" status-icon :model="form" :rules="formRules" class="form-container" label-width="80px">
    <el-form-item prop="identifier">
      <el-input v-model="form.identifier" auto-complete="off">
        <template slot="prepend"><i class="iconfont icon-zhanghu"></i></template>
      </el-input>
    </el-form-item>
    <el-form-item prop="credential">
      <el-input type="password" v-model="form.credential" auto-complete="off">
        <template slot="prepend"><i class="iconfont icon-mima"></i></template>
      </el-input>
    </el-form-item>
    <el-form-item prop="verifycredential">
      <el-input type="password" v-model="form.verifycredential" auto-complete="off">
        <template slot="prepend"><i class="iconfont icon-mima"></i></template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">注册</el-button>
    </el-form-item>
    <router-link to="login">登录</router-link>
  </el-form>
</template>

<script>
import { validEmail } from '@/utils/validate'
import { mapActions } from 'vuex'
export default {
  data() {
    let validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必须：不能为空'))
      } else if (!validEmail(value)) {
        callback(new Error('请输入正确的email地址'))
      } else {
        callback()
      }
    }
    let validateCredential = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必须：不能为空'))
      } else if (value !== this.form.credential) {
        callback(new Error('重输密码错误'))
      } else {
        callback()
      }
    }
    return {
      form: {
        identity_type: 'email',
        identifier: '',
        credential: '',
        verifycredential: ''
      },
      formRules: {
        identifier: [
          { required: true, message: '必须：不能为空', trigger: 'blur' },
          { validator: validateEmail, message: '请输入正确的email地址', trigger: 'blur' }
        ],
        credential: [
          { required: true, message: '必须：不能为空', trigger: 'blur' },
          { max: 12, message: '最多不能超过12个字', trigger: 'blur' }
        ],
        verifycredential: [
          { required: true, message: '必须：不能为空', trigger: 'blur' },
          { validator: validateCredential, message: '重输密码不一致', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          delete this.form.checkcredential
          this.register(this.form)
        }
      })
    }
  }

}
</script>

<style lang="css">
.form-container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px;
    margin: 120px auto;
}
.el-form-item__content{
  margin-left: 0px!important;
}
.el-button{
  width: 100%;
}
</style>
