<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
      <nav>
        <div class="branding">
          <img src="../assets/images/logo.svg" alt="Logo" />
        </div>
        <ul :class="{ 'mobile-nav': mobileNav }">
          <li v-for="(item, index) in navItems" :key="index">
            <router-link :to="item.route" class="link" @click="toggleMobileNav">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <div class="icon" @click="toggleMobileNav">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrollPosition: false,
        mobileNav: false,
        navItems: [
          { label: 'Home', route: '/' },
          { label: 'Sobre nós', route: '/about' },
          { label: 'Persianas', route: '/services' },
          { label: 'Contato', route: '/contact' },
        ],
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
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
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
;
  }
  
  .icon {
    display: none;
  }
  
  .mobile-nav {
    display: none;
  }
  
  @media (max-width: 768px) {
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
      margin: 10px 15px;
      color: #000;
    }
    .mobile-nav {
      display: block;
      margin-top: 7%;
    }
  }
  </style>
  