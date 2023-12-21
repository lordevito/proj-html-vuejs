<script>
import { store } from '../../store';

export default {
    props: ['tutor'],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <img :src="`images/${tutor.img}.png`" alt="">
        <h3>{{ tutor.title }}</h3>
        <p>{{ tutor.content }}</p>
        <span>{{ tutor.cta }} <i class="fa-solid fa-arrow-right"></i></span>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

h3 {
    font-size: 20px;
    margin-top: 10px;
}

p {
    color: $shadylady;
    font-size: 14px;
}

span {
    font-weight: bold;
    font-size: 12px;
    color: rgb(88, 86, 86);
}
</style>

