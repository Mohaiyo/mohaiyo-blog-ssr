<template>
  <v-dialog v-model="signInVisible" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <div class="headline mx-auto">你好,请在这输入你的账号进行登录</div>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm12 md12>
              <v-text-field
                v-model="username"
                :rules="[usernameRule.required, usernameRule.email]"
                label="邮箱/用户名"
                placeholder="Placeholder"
                maxlength="50"
                outline
                required
                prepend-inner-icon="place"
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
                placeholder="Placeholder"
                outline
                required
                counter
                prepend-inner-icon="place"
                hint="密码长度最少八位"
                clearable
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn type="info">登 录</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      signInVisible: false,
      username: '',
      password: '',
      showPassword: false,
      usernameRule: {
        required: value => !!value || '请输入你的邮箱或者用户名.',
        email: v => {
          const isEmail = false
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

            } else {
              return '用户名只能由英文、数字、下划线组成'
            }
            // 校验用户名
          }
          v.length >= 8 || '请输入'
        }
      },
      passwordRule: {
        required: value => !!value || '请输入密码.',
        min: v => v.length >= 8 || '密码长度最少八位'
      }
    };
  }
};
</script>
