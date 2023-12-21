<script>

</script>

<template>
    <div class="py-5">
        <div class="container col-6 text-center">
            <h3>Subscribe <span>Newletters</span></h3>
            <p>Enter your email address to register to our newsletter subscription
                delivered on a regular basis!</p>
            <div class="input-group  mb-3">
                <input type="text" class="form-control inptbkg fw-light" placeholder="Enter your Email">
                <button class="btn bottone border-0 btn-outline-secondary" type="button"
                    id="button-addon2">Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables' as *;


h3{
    font-size: 26px; 
}

p{
    font-size: 22px;
    padding: 15px 0 20px 0; 
}

span {
    color: $junglegreen;
}

.bottone {
    padding: 15px;
    font-size: 14px;
    background-color: $junglegreen;
    color: white;

    &:hover {
        background-color: $junglegreen;
    }
}

.inptbkg {
    background-color: $hintofred;
    border: 0;
    font-size: 14px;

    &:focus {
        border: 1px solid $junglegreen;
    }

}
</style>