<template>
<footer>
    <div class="text">
       <p>2023 - Todos os Direitos Reservados - Persianas Cruz</p> 
    </div>
</footer>
</template>

<script>
export default {
    name: 'FooterBar',
}
</script>

<style scoped>
footer{
background-color:#F9CD79;
}

.text {
    font-size: 24px;
    font-weight: 700;
    line-height: 30.48px;
    text-align: center;
    color: #fff;
    padding: 30px 0px;
    height: 83px;
}


@media only screen and (max-width: 991px){
    footer {
        width: 100%;
        height: auto;
    }

    .text {
        background-color: #F9CD79;
        /* height: 0px; */
        font-size: 10px;
        padding: 5% 0px;
    }
    .text p {

    }
}
</style>