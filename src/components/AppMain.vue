<script>
import CourseComp from './MainComponents/CourseComp.vue';
import TutoringComp from './MainComponents/TutoringComp.vue';
import CarouselComp from './MainComponents/CarouselComp.vue';

export default {

components: {
    CourseComp,
    TutoringComp,
    CarouselComp
}
}
</script>

<template>
  <CourseComp />
  <TutoringComp />
  <CarouselComp />
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
</style>
