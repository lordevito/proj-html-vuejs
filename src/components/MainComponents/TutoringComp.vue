<script>
import { store } from '../../store';
import TutoringCardComp from './TutoringCardComp.vue';
export default {
    data() {
        return {
            store
        }
    },

    components: {
        TutoringCardComp

    }
}
</script>

<template>
    <div class="bkg mt-5">
        <div class=" wrapper-round">
            <div class="container">
                <div class=" d-flex justify-content-around gap-3">
                    <TutoringCardComp class="col-3 " v-for=" (item, index) in store.cloud" :key="index" :tutor="item" />
                </div>
                <div class="d-flex info  align-conten-center align-items-center mt-5">
                    <!-- immagine -->
                    <div class="p-5">
                        <div class="overflow-hidden rounded-1 position-relative ">
                            <img src="../../../public/images/home-2-popup-video-poster.jpg" alt="">
                            <img class="player-logo " src="../../../public/images/icon-youtube-play.png" alt="">
                        </div>
                    </div>
                    <!-- testo -->
                    <div class="d-flex flex-column col-4 gap-3 ms-3">
                        <p class="text-uppercase text-secondary">get started <span
                                class=" text-uppercase fw-bold text-black">effortlessly</span></p>
                        <h2 class=" fw-bold">Enjoy Our <br> <span>Companionship</span></h2>
                        <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek
                            for
                            some
                            hidden hints of early-bird rewards as well.</p>
                        <span class="cta col-8">Download the free guidebook <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.bkg{
    background-color: $hintofred;
}
.wrapper-round {
    background-color: $white;
    border-bottom-right-radius: 550px;
}


.player-logo {
    width: 60px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
}


img {
    height: 300px;
    margin: 0 auto;
    align-self: center;
    width: 100%;
    transition: 4s ease;

    &:hover:not(.player-logo) {
        transform: scale(1.2);
    }
}



h2 {
    span {
        color: $junglegreen;
        font-weight: normal;
    }
}

p {
    color: $shadylady;
}

.cta {
    color: $junglegreen;
    font-weight: bold;
    border-bottom: 1px solid $shadylady;
}
</style>

