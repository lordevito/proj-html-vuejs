
<script>
import { store } from '../../store';
export default {
    data() {
        return {
            store,
        }
    }

}
</script>

<template>
    <div class="container d-flex align-items-center align-content-center m-auto justify-content-between gap-3 py-3">
            <div class="logo-cntn">
                <img src="../../assets/images/dark-logo.png" alt="">
            </div>       
            <div class="">
                <ul class="d-flex gap-4 list-unstyled m-0  uldprdwn">
                    <li v-for="i in store.NavItems">
                        <a class="text-decoration-none hover-underline-animation " href="#"><i class="fa-solid fa-chevron-down"></i></a>
                    </li>
                    <i class="fa-regular fa-circle-user fa-shake text-black align-self-center"></i>
                </ul>
            </div>
            <div>
              <div class="input-group ">
                    <input type="text" class="form-control searchbar" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn button" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass me-2"></i></button>
                </div>
            </div>
        </div>
        <div class="side-bar position-absolute d-flex flex-column p-2 pe-3 text-center gap-2">
            <a href="#"><i class="fa-solid fa-ruler position-relative"></i></a>
            <a href="#"><i class="fa-solid fa-life-ring position-relative"></i></a>
            <a href="#"><i class="fa-solid fa-book position-relative"></i></a>
            <a href="#"><i class="fa-solid fa-cart-shopping position-relative"></i></a>
        </div>
</template>

<style lang="scss" scoped>

@use '../../styles/variables' as *;

//Logo MaxCoach
.logo-cntn {
    img {
        width: 200px;
    }

}
//Icone Font-Awesome
a {
    color: $junglegreen;
    i {
        font-size: 10px;
    }
}
//Button
.button {
    background-color: $junglegreen;
    border: 1px solid $mountainmeadow;
}
//Icona searchbar
.fa-magnifying-glass {
    color: $junglegreen;
}
//sidebar
.side-bar {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    -webkit-box-shadow: -3px 0px 13px 5px rgba(0, 0, 0, 0.35);
    box-shadow: -3px 0px 13px 5px rgba(0, 0, 0, 0.35);
    top: 200px;
    right: 0;

    a i {
        font-size: 16px;
    }
}
//Lista Navbar
.uldprdwn {
    height: 100%;
}
</style>
