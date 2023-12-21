<script>
export default {
    name: 'CardComp',
    props: ['card'],
    data() {
        return {

        };
    },
};
</script>

<template>
    <div class="d-flex info  align-items-center">
        <!-- immagine -->
        <div class="">
            <div class="img-container overflow-hidden">
                <img :src="`images/${card.img}.jpg`" alt="">
            </div>
        </div>
        <!-- testo -->
        <div class="d-flex flex-column gap-3 ms-3">
            <p class="price">{{ card.price }}</p>
            <p class="col-10 fw-bold">{{ card.info }}</p>
            <div class="d-flex gap-3 about">
                <span><i class="fa-regular fa-file"></i> {{ card.lessons }} Lessons</span>
                <span><i class="fa-solid fa-user"></i> {{ card.students }} Students</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../../styles/variables' as *;

.img-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;

    img {
        height: 150px;
    }
}

p {
    margin-bottom: 0;
}

.about {
    font-size: 12px;
    color: $shadylady;
}

.price {
    font-size: 20px;
    color: $junglegreen;
    font-weight: bold;
}
</style>