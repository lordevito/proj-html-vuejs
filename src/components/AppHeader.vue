<script>
import HeaderNavbar from './HeaderComponents/HeaderNavbar.vue';
import JumboComp from './HeaderComponents/Jumbocomp.vue';

export default {

components: {
  HeaderNavbar,
  JumboComp
}
}
</script>

<template>
  <HeaderNavbar />
  <JumboComp />
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
</style>
