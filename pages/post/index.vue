<template>
  <v-container
    id="post-content"
  >
    <v-layout row>
      <post-content />
      <post-aside />
    </v-layout>

    <v-layout row>
      <post-comment />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ArticalDetail',
  components: {
    PostContent: () => import('@/components/Post/Content'),
    PostAside: () => import('@/components/Post/Aside'),
    PostComment: () => import('@/components/Post/Comment'),
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>
