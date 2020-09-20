<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="require('@/assets/articles/blurcamera.jpg')"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light">
            旅游的艺术
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
           一抹阳光，寻美之旅
          </div>
          <v-btn
            color="primary"
            depressed
            round
            @click="toPostDetail"
          >
            查看
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {

    }
  },
  methods: {
    toPostDetail() {
      // console.log($router)
      this.$router.push({ path: `post/travel-artical`})
    }
  }
}
</script>
