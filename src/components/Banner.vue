<template>
    <div class="banner bannerMob bannerMob2" style="">
      <!-- Conteúdo do banner -->
      <div  class="boxButton">
          <button>Solicitar orçamento</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'Banner',
    /* ee
    data() {
      return {
        image: 'PersianasCruz/src/assets/images/banner.svg', // Substitua pelo caminho da sua imagem
      };
    },*/
  };
  </script>
  
  <style scoped>
  .banner {
    width: 100%;
    height: 560px; /* Ajuste a altura do banner conforme necessário */
    background-size: cover;
    background-position: center;
    background-image: url('../assets/images/banner.svg') 
  }
  .boxButton{
    display: flex;
    justify-content: flex-end;
    height: 100%;
    padding: 395px 425px 0px 0px;
  }

  .boxButton button{
    border: none;
    height: 40px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    border-radius: 19px;
    width: 200px;
    background-color: #F9CD79;
    cursor: pointer;
  }

  /* MENOR QUE 991PX */
  @media only screen and (max-width: 991px){

  .banner{
    width: 100%;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/src/assets/images/bannerMobile.svg');
  } 

  .boxButton{
    padding: 124% 18% 6% 0%;
  }
 
  }

  @media only screen and (min-width: 300px) and (max-width: 319px){
    .boxButton{
      padding: 100% 18% 2% 0%;
  }
  }
/*
  @media only screen and (max-width: 320px){
    .boxButton{
    padding: 100% 18% 6% 0%;
  }
  }*/

  @media only screen and (min-width: 320px) and (max-width: 360px){
    .boxButton{
      padding: 100% 20% 6% 0%;
  }
  }
  @media only screen and (min-width: 361px) and (max-width: 375px){
    .boxButton{
      padding: 100% 22% 6% 0%;
  }

  .banner{
    width: 100%;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/src/assets/images/bannerMobile.svg');
  } 

  }

  @media only screen and (min-width: 376px) and (max-width: 425px){
    .boxButton{
    padding: 100% 28% 6% 0%;
  }
}

@media only screen and (min-width: 426px) and (max-width: 483px){
  .boxButton{
    padding: 100% 27% 8% 0%;
  }
}
  @media only screen and (min-width: 484px) and (max-width: 577px){
  .boxButton{
    padding: 100% 30% 8% 0%;
  }
}
  

@media only screen and (min-width: 578px) and (max-width: 641px){
  .boxButton{
    padding: 100% 33% 8% 0%;
  }
}
 
@media only screen and (min-width: 642px) and (max-width: 700px){
  .boxButton{
    padding: 100% 35% 8% 0%;
  }
}

@media only screen and (min-width: 701px) and (max-width: 768px){
  .boxButton{
    padding: 100% 36% 9% 0%;
  }
}
  
  </style>
  