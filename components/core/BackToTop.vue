<template>
  <v-btn
    v-show="showup"
    color="primary"
    fab
    small
    bottom
    right
    fixed
    @click="scrollUp"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "BackToTop",
  props: {
    offsetTop: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    showup() {
      if (this.offsetTop > 300) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    scrollUp() {
      this.$vuetify.goTo(0, {
        duration: 450,
        offset: 0,
        easing: "easeInOutCubic"
      });
    }
  }
};
</script>
