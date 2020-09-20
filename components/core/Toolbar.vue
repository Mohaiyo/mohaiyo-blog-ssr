<template>
  <v-toolbar app light>
    <v-icon class="hidden-md-and-up" @click="TOGGLE_DRAWER">menu</v-icon>
    <v-container mx-auto py-0>
      <v-layout align-center>
        <logo />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
          @click="menuHandle($event, link)"
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
        <div class="hidden-sm-and-down">
          <v-btn flat @click="signinHandle">登 录</v-btn>
          <v-btn color="info" @click="signupHandle">注 册</v-btn>
        </div>
      </v-layout>
      <sign-in ref="signInRef" />
      <sign-up ref="signUpRef" />
    </v-container>
  </v-toolbar>
</template>

<script>
import Logo from "./Logo";
import SignIn from '../User/SignIn'
import SignUp from '../User/SignUp'
// Utilities
import { mapGetters, mapMutations } from "vuex";
import { TOGGLE_DRAWER, TOGGLE_SIGNIN, TOGGLE_SIGNUP } from 'store/mutation-type'

export default {
  name: "Toolbar",
  components: {
    Logo,
    SignIn,
    SignUp
  },
  computed: {
    ...mapGetters('menu', ["links"])
  },
  methods: {
    ...mapMutations('user', {
      TOGGLE_DRAWER,
      TOGGLE_SIGNIN,
      TOGGLE_SIGNUP
    }),
    menuHandle(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href);
    },
    signinHandle() {
      this.TOGGLE_SIGNIN()
    },
    signupHandle() {
      this.TOGGLE_SIGNUP()
    }
  }
};
</script>
