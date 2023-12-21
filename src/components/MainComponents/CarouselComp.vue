<script>
import { store } from '../../store';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    data() {
        return {
            store

        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
}

</script>

<template>
<div class="bkg ">
        <div class="container">
            <div class="text-center">
                <p class=" text-uppercase">great words about maxcoach</p>
                <h3>Our <span>top learners'</span> verbatim</h3>
            </div>
            <Carousel class="my-5" :items-to-show="3" :wrap-around="true">
                <Slide v-for="slide in store.carouselcard" :key="slide">

                    <div class=" text-start mx-3 bg-white p-5 rounded-3">
                        <h4>{{ slide.title }}</h4>
                        <p class="slide-content">{{ slide.content }}</p>
                        <div class="d-flex mt-2  align-items-center">
                            <div class=" overflow-hidden img-cont">
                                <img :src="`../../public/images/testimonial-avata-${slide.pic}.jpg`" alt="">
                            </div>
                            <p class="mb-0 ms-3 nomeproff">{{ slide.name }} <br> <span>{{ slide.job }}</span></p>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                    <Navigation />
                </template>
            </Carousel>
            <div>
            </div>
            <div class=" text-center pb-5">
                <p>Start today for getting <span>Online Certification</span></p>
                <h3>You can be your own guidig start with our help!</h3>
                <button class="cta mb-4">Get started now</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

span {
    color: $junglegreen;
}

.cta {
    border: 0;
    background-color: $junglegreen;
    color: $white;
    padding: 10px 30px;
    border-radius: 8px;
}

.bkg {
    padding-top: 50px;
    background-color: $hintofred;
}

.img-cont {
    width: 60px;
    height: 60px;
    border-radius: 50%;

    img {
        height: 100%;

    }
}

h4 {
    font-size: 16px;
    font-weight: bold;
}

.slide-content {
    font-size: 12px;
    color: $shadylady;
}

.nomeproff {
    font-size: 14px;
}

.carousel__slide--next {
    opacity: 0.5;
}

.carousel__slide--prev {
    opacity: 0.5;
}
</style>