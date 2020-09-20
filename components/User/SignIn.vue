<template>
  <v-dialog v-model="siginVisible" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <div class="headline mx-auto">登录</div>
        <v-spacer></v-spacer>
        <v-btn icon @click="TOGGLE_SIGNIN">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="signInForm">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="username"
                  :rules="[usernameRule.required, usernameRule.email]"
                  label="邮箱/用户名"
                  placeholder="请输入邮箱或者用户名"
                  maxlength="30"
                  outline
                  required
                  counter
                  prepend-inner-icon="email"
                  clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="password"
                  :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                  :rules="[passwordRule.required, passwordRule.min]"
                  :type="showPassword ? 'text' : 'password'"
                  label="密码"
                  placeholder="请输入密码"
                  outline
                  required
                  counter
                  maxlength="35"
                  prepend-inner-icon="privacy_tip"
                  hint="密码长度最少八位"
                  clearable
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-btn block color="info" :loading="isSigning" @click="signIn">登 录</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-divider />
        <v-container grid-list-md>
          <v-layout wrap align-center justify-center>
              <v-flex xs12 sm12 md6 class="mx-auto" style="text-align: center;">忘记密码？<a><span class="body-1" style="color: #03A9F4" @click="resetPassword">重置密码</span></a></v-flex>
              <v-flex xs12 sm12 md6 class="mx-auto" style="text-align: center;">没有账号？<a><span class="body-1" style="color: #03A9F4" @click="signUp">注册</span></a></v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { TOGGLE_SIGNIN, TOGGLE_SIGNUP } from 'store/mutation-type'
export default {
  name: "SignIn",
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      usernameRule: {
        required: value => !!value || '请输入你的邮箱或者用户名.',
        email: v => {
          if (v.indexOf('@') > -1) {
            // 校验邮箱
            const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            if (emailReg.test(v)) {
              return true
            } else {
              return '请输入正确的邮箱格式'
            }
          } else {
            const userReg = /^\w+$/
            if (userReg.test(v)) {
              if (v.length <=10) {
                return '用户名不能长度不能少于10'
              }
              return true
            } else {
              return '用户名只能由英文、数字、下划线组成'
            }
            // 校验用户名
          }
        }
      },
      passwordRule: {
        required: value => !!value || '请输入密码.',
        min: v => v.length >= 8 || '密码长度最少八位'
      },
      isSigning: false
    };
  },
  computed: {
    ...mapState('user', ["siginVisible"])
  },
  methods: {
    ...mapMutations('user', {
      TOGGLE_SIGNIN,
      TOGGLE_SIGNUP
    }),
    signIn() {
      if (this.$refs.signInForm.validate()) {
        this.isSigning = true
        setTimeout(() => {
          this.isSigning = false
        }, 1000);
      }
    },
    resetPassword(e) {
      e.stopPropagation()
      console.log('重置密码')
    },
    signUp(e) {
      e.stopPropagation()
      this.TOGGLE_SIGNIN()
      this.TOGGLE_SIGNUP()
    }
  },
};
</script>
