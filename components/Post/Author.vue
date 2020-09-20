<template>
  <v-layout row>
    <div>
      <v-avatar size="36">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>
    <v-flex ml-2 grow>
      <div class="font-weight-bold">
        花丁
      </div>
      <div>
        <span class="d-inline-block grey--text">2019年01月20日</span>
        <span class="d-inline-block grey--text ml-2">阅读 219</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Author",
  data() {
    return {};
  }
};
</script>
