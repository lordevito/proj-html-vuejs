<script>
import CourseComp from './MainComponents/coursecomp.vue';
import TutoringComp from './MainComponents/TutoringComp.vue';
import CarouselComp from './MainComponents/CarouselComp.vue';
import BlogComp from './MainComponents/BlogComp.vue';


export default {

components: {
    CourseComp,
    TutoringComp,
    CarouselComp,
    BlogComp
   
}
}
</script>

<template>
  <CourseComp />
  <TutoringComp />
  <CarouselComp />
  <BlogComp />
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
</style>
