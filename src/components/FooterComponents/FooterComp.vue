<script>
import { store } from '../../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="bkg p-5">
        <div class="container d-flex justify-content-between">
            <div v-for="i in store.FootNav">
                <h4 class=" fw-bold">{{ i.ulText }}</h4>
                <ul class=" list-unstyled" v-for="j in i.liText">
                    <li>{{ j }}</li>
                </ul>
                <div v-for="x in i.icons" class="icon text-secondary d-inline-block fs-3 pe-3">
                    <i :class="`fa-brands ${x}`"></i>
                </div>
            </div>
        </div>
        <div class="text-secondary text-center py-5 end">© 2020 Maxcoach. All Rights Reserved</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

ul {
    font-size: 12px;
    li {
        transition: 0.4s;
        &:hover {
            cursor: pointer;
            color: $junglegreen;
        }
    }
}

.icon {
    i {
        transition: 0.5s;
        &:hover {
            color: $junglegreen;
        };
    };
}
.bkg {
    background-color: $hintofred;

    .end {
        font-size: 10px;
    }
}
</style>