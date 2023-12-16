<template>
    <main>
        <div>
            <h2>Persiana Rolo</h2>
            <p>A persiana rolô, também chamada de cortina rolô pelos especialistas, oferece centenas de possibilidades para decorar os mais diversos tipos de ambiente. Com manuseio simples e fácil instalação, a persiana rolô é eficiente no controle de luz, permitindo maior economia de energia e melhora na climatização dos espaços.</p>
        </div>
    </main>
    <section>
         <div class="sectionphotos">
            <div class="photos">
                <div class="grid up">
                        <img  src="../assets/imagesnew/rolo1.png" alt="PersianaRolo">
                        <img  src="../assets/imagesnew/rolo2.png" alt="PersianaRolo">
                </div>
                <div class="grid">
                     <img  src="../assets/images/rolo3.svg" alt="PersianaRolo">
                     <img  src="../assets/imagesnew/rolo4.png" alt="PersianaRolo">
                </div>
                <div class="grid">
                    <img  src="../assets/imagesnew/rolo5.png" alt="PersianaRolo">
                    <img  src="../assets/imagesnew/rolo6.png" alt="PersianaRolo">
                </div>
                <div class="grid">
                        <img  src="../assets/imagesnew/rolo7.png" alt="PersianaRolo">
                        <img  src="../assets/imagesnew/rolo8.png" alt="PersianaRolo">
                </div>
            </div>
            <div class="bigphotos">
                <img  src="../assets/imagesnew/rolo9.png" alt="PersianaRolo">
            </div>
            <button class="btnCall">CLIQUE AQUI E SOLICITE O ORÇAMENTO</button>
         </div>
        
    </section>
    <FooterBar/>
</template>

<script scoped>
import FooterBar from '../components/FooterBar.vue';
import Navigation2 from '../components/Navigation2.vue';

export default{
    name:'PersianaRolo',
    components:{
        Navigation2,FooterBar
    }
}
</script>

<style scoped>
main{

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    height: 420px;
}

main div {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

}

main div h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 5%;
}

main div p {
    font-size: 25px;
    font-weight: 500;
    padding: 0% 12% 5% 12%;
    line-height: 30.48px;
}


section{

}

.sectionphotos{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sectionphotos .photos{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.photos .grid {
    display: flex;
    justify-content: center;
}
.grid img {
    padding: 0% 4% 4% 0%;
    width: 100%;
    height: auto;
    border-radius: 15%;

}

.up {
   margin-top: -5%;
}
.bigphotos{
    display: flex;
    /* align-items: center; */
    justify-content: center;
}

.bigphotos img {
    width: 100%;
    height: auto;
    border-radius: 15%;

}

button {
    margin: 5% 0%;
    background-color: #000;
    color: #F9CD79;
    font-size: 20px;
    font-weight: 800;
    width: 591px;
    height: 106px;
    cursor: pointer;
    border: none;
    border-radius: 4%;
}

@media only screen and (max-width: 991px){
    .sectionphotos .photos{

    }

    .photos .grid {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .grid img{
        width: 80%;
    }

    .bigphotos img {
        width: 80%;
    }

    main{

    }

    main div {
        font-size: 15px;
        line-height: inherit;
    }

    main div h2{
        font-size: 21px;
    }

    main div p {
        font-size: 15px;
        line-height: inherit;
        text-align: center;
    }

    button {
        width: 80%;
        font-size: 13px;
        height: 65px;
    /* border-radius: 20%;*/

    }
}
</style>