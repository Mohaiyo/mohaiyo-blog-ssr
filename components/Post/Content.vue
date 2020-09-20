<template>
  <v-flex grow pa-2 sm8>
    <div>
      <author />
      <div class="mt-3">
        markdown正文
      </div>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'PostContent',
  components: {
    Author: () => import('./Author')
  }
}
</script>
