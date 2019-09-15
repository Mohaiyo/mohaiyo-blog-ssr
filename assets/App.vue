<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <core-view />

    <core-footer />

    <core-cta />
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    name: 'App',
    components: {
      CoreCta: () => import('components/core/Cta'),
      CoreDrawer: () => import('components/core/Drawer'),
      CoreFooter: () => import('components/core/Footer'),
      CoreToolbar: () => import('components/core/Toolbar'),
      CoreView: () => import('components/core/View')
    },
    mixins: [Meta],
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.footer-text{
  padding-left: 30px;
  display: inline-block;
}
</style>

