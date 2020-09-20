<template>
  <v-app v-scroll="scrollHandle">
    <core-toolbar />

    <core-drawer />

    <core-view />

    <core-footer />

    <back-to-top ref="backToTop" :offset-top="offsetTop" />
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    name: 'App',
    components: {
      BackToTop: () => import('components/core/BackToTop'),
      CoreDrawer: () => import('components/core/Drawer'),
      CoreFooter: () => import('components/core/Footer'),
      CoreToolbar: () => import('components/core/Toolbar'),
      CoreView: () => import('components/core/View')
    },
    mixins: [Meta],
    data () {
      return {
        offsetTop: 0
      }
    },
    methods: {
      scrollHandle(e) {
        this.offsetTop = e.target.body.scrollTop || e.target.documentElement.scrollTop; // safari && chrome
      }
    },
  }
</script>

<style lang="scss" scoped>
.footer-text{
  padding-left: 30px;
  display: inline-block;
}
</style>

