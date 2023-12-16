<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10" height="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#000"></path>
    </svg>
    <Transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item,i) in items" :key="i" class="menu-itemA">
            <!----<a :href="item.link">{{item.title }}</a> -->
            <router-link :to="item.link" id="products-link">{{item.title }}</router-link>
        </div>
     </div>
    </Transition>
    
  </div>
</template>
<script>
export default {
  name:'dropdown',
  props:['title','items'],
  data(){
    return{
      isOpen:false
    }
  }
}
</script>
<style scoped>

 .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
.menu-item a {
    color: #000;
    text-decoration: none;
}

 .menu-item .sub-menu{
  position: absolute;
    background-color: #fff; 
    /* top: calc(100% + 18px); */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    width: max-content;
    border-radius: 0px 0px 16px 16px;
    padding: 1% 3% 1% 3%;
}

.sub-menu .menu-item{

}
.sub-menu .menu-item a{

}
.menu-itemA{
  margin-bottom: 10%;
}

.sub-menu .menu-item.active,
.sub-menu .menu-item:hover {
    background-color: #444;
    border-bottom-color:#ff5858 ;
}

.fade-enter-active,
.fade-leave-active{
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.menu-item a:hover {
    color:  #F9CD79;
  }

  @media only screen and (max-width: 991px){

    .menu-item {
    
      margin: 0px 0px 15px 0px;
      color: #000;
      background-color: #F9CD79;
      width: 292px;
      height: 58px;
      border-radius: 7px;
      text-align: center;
      padding: 17px 0px 0px 0px;
    }

    .menu-item a:hover {
      color: #fff;
    }

    .menu-item .sub-menu {
      margin: 11% 0%;
      background-color: #F9CD79;
      width: 60%;
    }

    .menu-item svg{
      margin-top: 6px;
    }

  

  }


  @media only screen and (min-width: 769px){
    .menu-item {
    color: #000;
    background-color: #FFF;
    height: 100%;
    width: 125px;
  }

  .menu-item a:hover {
      color:#F9CD79;
    }

    .menu-item .sub-menu {
       margin: 3% 0% 0% 0%;
       background-color: #FFF;
       /*width: 40%;*/
  }
}
</style>