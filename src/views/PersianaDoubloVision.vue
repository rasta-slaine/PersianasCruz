<template>
    <main>
        <div>
            <h2>Persiana Doublo Vision</h2>
            <p>Cortina Rolô Double Vision, agora no tecido WING, muito mais apelo decorativo, tecido com detalhes drapeados que valorizam ainda mais a cortina que já é bonita, acionando a corrente você controla a entrada de luz e visibilidade. Base inferior em aluminio.</p>
        </div>
    </main>
    <section>
         <div class="sectionphotos">
            <div class="photos">
                <div class="grid up">
                        <img  src="../assets/imagesnew/doublo1.png" alt="Persianadoublo">
                        <img  src="../assets/imagesnew/doublo2.png" alt="Persianadoublo">
                </div>
                <div class="grid">
                     <img  src="../assets/imagesnew/doublo3.png" alt="Persianadoublo">
                     <img  src="../assets/imagesnew/doublo4.png" alt="Persianadoublo">
                </div>
                <div class="grid">
                    <img  src="../assets/images/doublo5.svg" alt="Persianadoublo">
                    <img  src="../assets/imagesnew/doublo6.png" alt="Persianadoublo">
                </div>
                <div class="grid">
                        <img  src="../assets/images/doublo7.svg" alt="Persianadoublo">
                        <img  src="../assets/images/doublo8.svg" alt="Persianadoublo">
                </div>
            </div>
            <div class="bigphotos">
                <img  src="../assets/images/doublo9.svg" alt="Persianadoublo">
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
    name:'PersianaDouBloVision',
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