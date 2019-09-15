<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/static/img/caicai.jpg" alt="Vuetify.js" class="mb-5 avatar" />
      </div>
      <v-card>
        <v-card-text>
          <p>Welcome to the Wayne's world.</p>
          <p>这个世界上有比小菜宝更傻的人了，哈哈哈</p>
          <p>宝宝，你爱我吗?</p>
          <p>😁😁 😍你</p>
          <p>你咋那么跩呢</p>
          <p>你咋那么嚣张呢</p>
          <p>你咋那么臭屁呢</p>
          <p>你咋那么爱臭美呢</p>
          <p>你咋那么爱我呢</p>
          <div class="text-xs-right">
            <em><small>&mdash; Wayne</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat router to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<style lang="scss" scoped>
.avatar{
  max-width: 300px;
  max-height: 300px;
  height: auto;
  width: auto;
  div{
    width: 100%;
  }
  /* border-radius: 25px; */
}
</style>

