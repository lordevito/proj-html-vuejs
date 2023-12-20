<script>
import { store } from '../../store';
export default {

    data() {
        return {
            store
        };
    },
};
</script>

<template>
 <div class="container mb">
            <div class="d-flex info align-content-center align-items-center justify-content-between">
                <!-- testo -->
                <div class="d-flex col-6 flex-column gap-3">
                    <h1 class=" fw-bold">Distant learning for further expansion</h1>
                    <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy
                        the process.</p>
                    <button class="col-4 py-3 bottone text-white"><i class="fa-solid fa-download fa-shake"></i> Download
                        free
                        guide</button>
                    <p class="cta">Have a question? <span class=" text-decoration-underline">Get Free Sample <i
                                class="fa-solid fa-arrow-right "></i> </span></p>
                </div>
                <!-- immagine -->
                <div class="p-5">
                    <div class="img-container overflow-hidden">
                        <img src="../../../public/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
                    </div>
                </div>
            </div>
            <!-- brands -->
            <div class="d-flex justify-content-around m-auto pb-5 mb-5">
                <div class="company" v-for="i in store.brands">
                    <img :src="`/images/client-logo-${i}.png`" alt="">
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>

@use '../../styles/variables' as *;

.cta {
    margin-top: 10px;
    font-size: 14px;
}

p {
    color: $shadylady;
    font-size: 20px;
}

button {
    width: 250px;
    background-color: $junglegreen;
    border: 0;
    border-radius: 6px;
    font-weight: bold;
    font-size: 12px;
}

span {
    color: $junglegreen;
}

.info {
    height: 600px;
}

.bottone:hover {
    background-color: rgb(65, 21, 80);
}

.img-container {

    height: 400px;
    border-radius: 50%;

    img {
        object-fit: fill;
        object-position: center;
        height: 400px;
    }
}

.company:hover {
    filter: contrast(2), ;
    mix-blend-mode: multiply;
}
</style>