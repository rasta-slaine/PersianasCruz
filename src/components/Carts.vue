<template>
<div class="section2">
    <div class="carts1">
        <div class="carts2">
            <div class="cart-list">
                    <div id="cart1" class="cart cartup">
                        <img src="../assets/images/cart1.svg" alt="">
                        <div class="cart-text">
                            <h3>Persiana Rolo</h3>
                            <p>Eficiente no controle de luz, permitindo maior economia de energia e melhora na climatização dos espaços.</p>
                        </div>
                        <button>Solicitar orçamento</button>
                    </div>
                    <div class="cart cartup">
                        <img src="../assets/images/cart2.svg" alt="">
                        <div class="cart-text">
                            <h3>Persiana Rolo Blackout</h3>
                            <p>Resistência e capacidade de bloquear totalmente a passagem de luz no tecido, é antialérgico, de fácil limpeza e não perde a cor.</p>
                        </div>
                        <button>Solicitar orçamento</button>
                    </div>
             </div>
             <div class="cart-list">
                    <div class="cart">
                        <img src="../assets/images/cart3.svg" alt="">
                        <div class="cart-text">
                            <h3>Rolô Double Vision</h3>
                            <p>A cortina que já é bonita, acionando a corrente você controla a entrada de luz e visibilidade. Base inferior em aluminio. </p>
                        </div>
                        <button>Solicitar orçamento</button>
                    </div>
                    <div class="cart">
                        <img src="../assets/images/cart4.svg" alt="">
                        <div class="cart-text">
                            <h3>Persiana Romana</h3>
                            <p>Feita de tecido, a cortina romana é cobiçada por conta do seu charme e funcionalidade.</p>
                        </div>
                        <button>Solicitar orçamento</button>
                    </div>
            </div>
        </div>
        <div class="carts2">
                  <div class="cartBig cartBigMob">
                        <img src="../assets/images/cart5.svg" alt="">
                     <div class="cartbox"> 
                        <div class="cart-text">
                            <h3>Persiana Rolo Motorizada</h3>
                            <p>Melhor da tecnologia para acionamento automático das  cortinas e persianas, com abertura  e fechamento sem cordões, através de controle remoto, celular ou comando de voz.</p>
                        </div>
                            <button>Solicitar orçamento</button>
                    </div>  
                   </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name:'Carts'
}
</script>

<style scoped>
.section2{

}

.carts1{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carts2{

}

.carts2 .cart-list{
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
}

.carts2 .cartBig{
    display: flex;
    align-items: flex-start;
    padding-bottom: 50px;
}

.cart-list{
    
}

.cart-list .cart{

}


.cartup{
    margin-top: -85px;
}
.cart{
    width: 495px;
    height: 538px;
    margin-left: 50px;
   
}


.cart img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.cart-text{
    background-color: black;
    width: auto;
    height: 140px;
    text-align: center;
    margin-top: -4px;
    padding: 10px 0px;
    
}

.cart-text h3 {
    font-size: 25px;
    font-weight: 700;
    line-height: 30.48px;
    color: #ffff;
    margin-bottom: 15px;
}

.cart-text p {
    color: #ffff;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.29px;
    padding: 0px 55px;

}
.cart button {
    width: 495px;
    height: 50px; 
    background: #F9CD79;
    border: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.38px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
}


.cartBig img {
    width: 640px;
    height: 371px;
    margin-top: -4px;
}

.cartBigMob{
    
}

.cartbox{
    width: 412px;
    margin-right: -63px;
}

.cartbox .cart-text{
    height: 312px;
    width: 400px;
    border-top-right-radius: 20px;

}

.cartbox .cart-text h3 {
    padding: 40px 50px 0px 50px;
}

.cartbox .cart-text p {

}

.cartbox button{
    height: 59px;
    width: 400px;
    border-radius: 0px 0px 11px 0px;
    background: #F9CD79;
    border: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.38px;
    cursor: pointer;
}


@media only screen and (max-width: 991px){

    .carts2 .cart-list{
        flex-direction: column;
        justify-content: center;
        margin-bottom: 0px;
        align-items: center;
    }
 

    #cart1{
        margin-top: -4%;
    }
    .cartup{
        margin-top: 0px;
    }
    .cart{
        width: 70%;
        margin: 0px 0px 15px 0px;
        height: auto;
    }
    .cart img {
        width: 100%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }

    .cart-text{
        height: 75px;
    }
    .cart-text h3 {
        padding: 0px;
        font-size: 17px;    
        margin-bottom: 0px;
    }
    .cart-text p {
        font-size: 9px;
        padding: 0px;
        line-height: normal;
    }

    .cart button{
        width: 100%;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        font-size: 15px;
    }

    .carts2 .cartBig{
        flex-direction: column;
        align-items: center;
        width: 100%;
        justify-content: center;
    }

    .cartBig img {
        width: 70%;
        height: auto;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }

    .cartbox{
        margin: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 88%;
    }

    .cartbox .cart-text{
        background-color: black;
        width: 80%;
        height: auto;
        text-align: center;
        margin-top: -4px;
        padding: 10px 0px;
        border-top-right-radius: 0px;
    }

    .cartbox button{
    width: 80%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    font-size: 15px;
    height: 50px;
    background: #F9CD79;
    border: none;
    font-weight: 600;
    line-height: 24.38px;
    cursor: pointer;
    }

    .cartbox .cart-text h3{
        padding: 0px;
    }

    .cartbox .cart-text p {

    }
}


</style>