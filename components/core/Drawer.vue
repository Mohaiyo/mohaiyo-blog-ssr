<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <div>
      <v-btn flat @click="signinHandle">Sign in</v-btn>
      <v-btn color="info" @click="signupHandle">Sign up</v-btn>
    </div>
    <v-list>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
      >
        <v-list-tile-title v-text="link.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  import { SET_DRAWER, TOGGLE_SIGNIN, TOGGLE_SIGNUP } from 'store/mutation-type'
  import SignIn from '../User/SignIn'
  export default {
    name: 'CoreDrawer',
    components: {
      SignIn
    },
    computed: {
      ...mapGetters('menu', ['links']),
      drawer: {
        get () {
          return this.$store.state.user.drawer
        },
        set (val) {
          this.SET_DRAWER(val)
        }
      }
    },

    methods: {
      ...mapMutations('user', [SET_DRAWER, TOGGLE_SIGNIN, TOGGLE_SIGNUP]),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.SET_DRAWER(false)
          return
        }
        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.SET_DRAWER(false)
      },
      signinHandle() {
        this.TOGGLE_SIGNIN()
      },
      signupHandle() {
        this.TOGGLE_SIGNUP()
      }
    }
  }
</script>
