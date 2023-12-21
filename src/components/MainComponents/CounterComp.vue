<script>
import { store } from '../../store';

export default ({

data() {
    return {
        store
    };
},
});
</script>

<template>
    <div class="container d-flex justify-content-center  ">
        <div class="col-3 giorgio justify-content-center d-flex flex-column text-center px-5" v-for="i in store.counter">
            <h3>{{ i.title }}</h3>
            <div class="numero">{{ i.num }}</div>
            <p class=" text-secondary text-uppercase">{{ i.subtitle }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.giorgio {
    border: 2px solid $tortora;
    height: 400px;

}

.numero {
    color: $turquoise;
    font-weight: bold;
    font-size: 50px;
    margin: 20px 0;

}
</style>
