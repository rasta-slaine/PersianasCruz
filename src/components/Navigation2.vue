<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">

  <nav>
        <div class="branding">
          <img src="../assets/images/logo.svg" alt="Logo" />
        </div>
        <ul :class="{ 'mobile-nav': mobileNav }">
              <li><div class="menu-item"> <router-link to="/" id="products-link" class="link">Home</router-link></div></li>
              <li><div class="menu-item"><router-link to="/" id="products-link" class="link">Sobre nós</router-link></div></li>
              <DropDown title="Persianas" :items="Services"/>
              <li><div class="menu-item" ><router-link to="/" id="products-link" class="link">Contato</router-link></div></li>
          <!----
          <li v-for="(item, index) in navItems" :key="index">
            <router-link :to="item.route" class="link" @click="toggleMobileNav">
              {{ item.label }}
            </router-link>
          </li> 

        -->
        </ul>
        <div class="icon" @click="toggleMobileNav">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import DropDown from './DropDown2.vue';
  import { RouterLink } from 'vue-router';

  
  export default {
    data() {
        return {
            scrollPosition: false,
            mobileNav: false,
            Services:[
                {
                    title:'Persiana Rolo',
                    link:'/persianarolo'
                },
                {
                    title:'Persiana Rolo Blackout',
                    link:'/persianaroloblackout'
                },
                {
                    title:'Persiana Doublo Vision',
                    link:'/persianarolodoublovision'
                },
                {
                  title:'Persiana Rolo Motorizada',
                  link:'/persianaroloMotorizada'
                }
            ]
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        handleScroll() {
            this.scrollPosition = window.scrollY > 0;
        },
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    components: { DropDown, RouterLink }
};
  </script>
  
  <style scoped>


  header {
    background-color: #fff;
    color: white;
    padding: 15px;
    /*position: fixed;*/
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: background-color 0.3s;
  }
  
  .scrolled-nav {
    background-color: #fff;
  }
  
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .branding img {
    width: 80px;
  }
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 20px;
  }
  
  ul li {
    margin: 0 15px;
  }
  
  .link {
    color: #000;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .link:hover {
    color:  #F9CD79;
  }
  
  .icon {
    display: none;
  }
  
  .mobile-nav {
    display: none;
  }
  
  /* djdkd */
  nav .menu-item .sub-menu{
  position: absolute;
  background-color: #222;
  top:calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
  padding: 0% 25% 20% 25%;
}

  @media (max-width: 768px)  {
    header{
      
    }
    .icon {
      display: block;
      color: #000;
    }
    ul {
      display: none;
      flex-direction: column;
      align-items: flex-end;
      background-color: #fff;
      width: 100%;
      position: absolute;
      top: 60px;
      right: 0;
    }
    ul li {
     
    }
    .mobile-nav {
      margin-top: 7%;
      display: flex;
      margin-top: 7%;
      align-items: center;
      background-color: #000;
    }
    .link:hover {
      color: #fff;
    }

    .menu-item {
      display: flex;
      justify-content: center;
    }

    .menu-item  a {
      margin: 0px 0px 15px 0px;
      color: #000;
      background-color: #F9CD79;
      width: 292px;
      height: 58px;
      border-radius: 7px;
      text-align: center;
      padding: 17px 0px 0px 0px;
    }

    nav {
      flex-direction: row-reverse;
    }
    .branding{
      width: 50%;
    }

    .branding img {

    }

  }
    @media only screen and (min-width: 769px)  and (max-width:900px){
      ul {

      }

      ul li{

      }

      .menu-item{

      }
      .menu-item  a {

      }
      .branding{
      width:0%;
    }
    }
  
  </style>
  