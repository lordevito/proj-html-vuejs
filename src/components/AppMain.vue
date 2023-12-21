<script>
import CourseComp from './MainComponents/CourseComp.vue';
import TutoringComp from './MainComponents/TutoringComp.vue';

export default {

components: {
    CourseComp,
    TutoringComp
}
}
</script>

<template>
  <CourseComp />
  <TutoringComp />
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
</style>
