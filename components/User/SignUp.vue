<template>
  <v-dialog v-model="signUpVisible" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <div class="headline mx-auto">注册</div>
        <v-spacer></v-spacer>
        <v-btn icon @click="TOGGLE_SIGNUP">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="SignUpForm">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="username"
                  :rules="[usernameRule.required, usernameRule.account]"
                  label="用户名"
                  placeholder="请输入用户名"
                  maxlength="30"
                  outline
                  required
                  counter
                  prepend-inner-icon="account_circle"
                  clearable
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="email"
                  :rules="[emailRule.required, emailRule.email]"
                  label="邮箱"
                  placeholder="请输入邮箱"
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
                <v-btn block color="info" :loading="isSignUping" @click="SignUp">注 册</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-divider />
        <v-container grid-list-md>
          <v-layout wrap align-center justify-center>
              <v-flex xs12 sm12 md12 class="mx-auto" style="text-align: center;">已经注册？<a><span class="body-1" style="color: #03A9F4" @click="signIn">登录</span></a></v-flex>
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
  name: "SignUp",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      showPassword: false,
      usernameRule: {
        required: value => !!value || '请输入你的用户名.',
        account: v => {
          const userReg = /^\w+$/
          if (userReg.test(v)) {
            if (v.length <=10) {
              return '用户名不能长度不能少于10'
            }
            return true
          } else {
            return '用户名只能由英文、数字、下划线组成'
          }
        }
      },
      emailRule: {
        required: value => !!value || '请输入你的邮箱.',
        email: v => {
          const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
          if (emailReg.test(v)) {
            return true
          } else {
            return '请输入正确的邮箱格式'
          }
        }
      },
      passwordRule: {
        required: value => !!value || '请输入密码.',
        min: v => v.length >= 8 || '密码长度最少八位'
      },
      isSignUping: false
    };
  },
  computed: {
    ...mapState('user', ["signUpVisible"])
  },
  methods: {
    ...mapMutations('user', {
      TOGGLE_SIGNIN,
      TOGGLE_SIGNUP
    }),
    SignUp() {
      if (this.$refs.SignUpForm.validate()) {
        this.isSignUping = true
        setTimeout(() => {
          this.isSignUping = false
        }, 1000);
      }
    },
    signIn(e) {
      e.stopPropagation()
      this.TOGGLE_SIGNUP()
      this.TOGGLE_SIGNIN()
    }
  },
};
</script>
