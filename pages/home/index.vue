<template>
  <div id="home">
    <articles>
      <banner />
    </articles>

    <!-- <about /> -->

    <subscribe />

    <social />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/Home/About'),
      Articles: () => import('@/components/Home/Articles'),
      Banner: () => import('@/components/Home/Banner'),
      Social: () => import('@/components/Home/Social'),
      Subscribe: () => import('@/components/Home/Subscribe')
    }
  }
</script>
