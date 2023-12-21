<script>
import { store } from '../../store';
import CardComp from './CardComp.vue';

export default {
    data() {
        return {
            store,

        };
    },
    components: {
        CardComp,
    },
};
</script>

<template>   
        <div class="container ">
            <p class=" text-uppercase text-center">stimulated to learn?</p>
            <h3 class="text-center">Featured Online Courses</h3>
            <div class=" mt-5 d-flex flex-wrap justify-content-center gap-5 pt-4">
                <CardComp class="col-5" v-for="(i, index) in store.cards" :key="index" :card="i" />
            </div>
            <div class=" m-auto text-center mt-5">
                <button class=" p-3 px-5 text-white">View all courses <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
</template>

<style lang="scss" scoped> 
@use '../../styles/variables' as *;

.container{
    background-color: $hintofred;
    padding: 50px 0;
}

button {
    font-size: 12px;
    background-color: $junglegreen;
    border: 0;
    border-radius: 8px;
}
p {
    color: $shadylady;
}
</style>

