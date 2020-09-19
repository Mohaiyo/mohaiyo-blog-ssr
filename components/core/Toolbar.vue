<template>
  <v-toolbar app light>
    <v-icon class="hidden-md-and-up" @click="toggleDrawer">mdi-menu</v-icon>
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
        <div>
          <v-btn flat @click="signinHandle">Sign in</v-btn>
          <v-btn color="info" @click="signupHandle">Sign up</v-btn>
        </div>
      </v-layout>
      <sign-in ref="signInRef" />
    </v-container>
  </v-toolbar>
</template>

<script>
import Logo from "./Logo";
import SignIn from '../User/SignIn'
// Utilities
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Toolbar",
  components: {
    Logo,
    SignIn
  },
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    menuHandle(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href);
    },
    signinHandle() {
      this.$refs.signInRef.signInVisible = true
    },
    signupHandle() {
      console.log('sign up')
    }
  }
};
</script>
