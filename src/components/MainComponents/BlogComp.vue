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
    <div class="bkg p-5">
        <div class="container d-flex justify-content-between align-items-center">
            <div class=" ms-4">
                <p class=" col-6 text-secondary text-uppercase"> enjoyable insights</p>
                <h3>Most Viewed <span>Best Blogs</span></h3>
                <ul class=" list-unstyled col-11 py-3">
                    <li><i class="fa-solid fa-arrow-right"></i><span> Become a Better Blogger: Content Planning</span>
                    </li>
                    <li><i class="fa-solid fa-arrow-right"></i><span> Promoting Your Online Business in Pinterest</span>
                    </li>
                    <li><i class="fa-solid fa-arrow-right"></i><span> Gamification and Game-Based Learning</span></li>
                    <li><i class="fa-solid fa-arrow-right"></i><span> Designing an Online Course from Experts'
                            Perspective</span></li>
                    <li><i class="fa-solid fa-arrow-right"></i><span> Why Online Courses Are the Future of
                            Education</span></li>
                </ul>
            </div>
            <div class="card border-0 col-3 bg-white" v-for="i in store.blog">
                <div class=" overflow-hidden">
                    <img :src="`../../public/images/artist-blog-${i.img}.jpg`" class="card-img-top" :alt="`${i.img}`">
                </div>
                <div class="card-body  ">
                    <h5 class="card-sub text-uppercase text-secondary fw-light">{{ i.titlesm }}</h5>
                    <h4 class="card-title">{{ i.title }}</h4>
                    <div class="icone d-flex text-secondary gap-2 align-items-center">
                        <p class="card-text mb-0"><i class="fa-regular fa-calendar"></i> {{ i.date }}</p>
                        <p class="card-text"><i class="fa-solid fa-eye"></i> {{ i.views }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;

.bkg {
    background-color: $hintofred;

}

h3 {

    font-weight: bold;

    span {
        color: $junglegreen;
        font-weight: bold;
    }
}

img {
    transition: 3s ease;

    &:hover {
        transform: scale(1.3);
    }
}

h5 {
    font-size: 16px;
}

h4 {
    font-size: 15px;
    font-weight: bold;
}

.icone {
    font-size: 12px;
}

ul {



    li {
        padding: 8px 0;
        font-size: 14px;
        font-weight: bold;
        transition: 0.4s ease;

        &:hover {
            color: $junglegreen;
            cursor: pointer;
        };

        i {
            transition: 0.2s ease;

            &:hover {
                color: $junglegreen;
            }
        };
    };
};
</style>