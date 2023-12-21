<script>
import CourseComp from './MainComponents/coursecomp.vue';
import TutoringComp from './MainComponents/TutoringComp.vue';
import CarouselComp from './MainComponents/CarouselComp.vue';
import BlogComp from './MainComponents/BlogComp.vue';
import NewsLetterComp from './MainComponents/NewsLetterComp.vue';

export default {

components: {
    CourseComp,
    TutoringComp,
    CarouselComp,
    BlogComp,
    NewsLetterComp
   
}
}
</script>

<template>
  <CourseComp />
  <TutoringComp />
  <CarouselComp />
  <BlogComp />
  <NewsLetterComp />
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
</style>
