<template>
<div class="section1">
    <div class="blocks">
        <div class="block">
            <img src="../assets/images/lampada.svg">
            <p>Controle <br> da <span>Luminosidade</span></p>
        </div>
        <div class="block">
            <img src="../assets/images/protecaosolar.svg">
            <p><span>Proteção <br></span>Térmica e Solar </p>
        </div>
        <div class="block">
            <img src="../assets/images/cortina.svg">
            <p><span>Estética <br> </span>e  Decoração</p>
        </div>
        <div class="block">
            <img src="../assets/images/olho.svg">
            <p>Nível de <br> <span> Privacidade</span></p>
        </div>
    </div>
    <div class="text">
        <h2>Conheça os nossos produtos:</h2>
        <p>Nossas persianas são projetadas com atenção aos detalhes e com foco no seu conforto e estilo de vida. Imagine poder ajustar facilmente a luminosidade de qualquer ambiente, criar privacidade total e desfrutar de um isolamento térmico eficiente.   Nossas persianas são feitas sob medida para atender às suas necessidades e complementar perfeitamente a decoração da sua casa.</p>
    </div>
</div>
    <carts/>
</template>

<script>
import Carts from '../components/Carts.vue'

export default {
  name:'Products',
  components:{Carts}
}
</script>


<style scoped>
.section1{
    background-color: black;
    height: 691px;
}

.blocks{
    display: flex;
    justify-content: space-between;
    padding: 0px 150px;
}


.block{
    /*display: flex;
    flex-direction: column;*/
    height: 236px;
    width: 226px;
    text-align: center;
    border-top: 20px solid  #F9CD79;
    background-color: #ffff;
    border-radius: 24px;
    margin-top: -35px;  
}

.block img {
    width: 113px;
    height: auto;
}

.block p {
    font-size: 20px;
    font-weight: 500;
    line-height: 24.38px;
}

.block p span {
    font-weight: 700;
}

.text{
    color: #ffff;
    display: flex;
    flex-direction: column;
    padding: 60px 150px;
    align-items: center;
}

.text h2 {
    margin-bottom: 40px;
    font-size: 50px;
    font-weight: 700;
}

.text p {
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    padding: 0px 66px;
    text-align: justify;
}
@media only screen and (min-width: 300px) and (max-width: 319px){
  .blocks{
    padding:16% 0% !important;
  }
  .block{
    margin-bottom: 70px !important;
  }
  }
/*
   @media only screen and (min-width: 320px) and (max-width: 360px){
    .block{
        margin-bottom: 70px;
    }
    }*/

    @media only screen and (min-width: 376px) and (max-width: 425px){
        .blocks{
            padding:16% 0% !important;
            }
        .block{
            margin-bottom: 70px !important;
        }
}

@media only screen and (min-width: 426px) and (max-width: 768px){
        .blocks{
                padding:16% 0% !important;
            }
        .block{
                margin-bottom: 70px !important;
        }

}

  /* MENOR QUE 991PX */
  @media only screen and (max-width: 991px){
    .section1{
        height: 100%;
    }  

    .blocks{
        flex-direction: column;
        justify-content: center;
        padding: 0px;
        align-items: center;
    }

    .block{
        margin-bottom: 30px;
    }

    .text{
        padding: 30px 0px 10% 0px;
    }
    .text h2{
        font-size: 20px;
        margin-bottom: 10px;
    }
    .text p {
        padding: 0px 12px;
        font-size: 8px;
        line-height: 9.6px;
        text-align: center;
    }

  
    
  }

</style>