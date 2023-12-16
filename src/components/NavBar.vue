<template>
    <nav>
        <div class="menu-item"><a href="#">Home</a></div>
        <div class="menu-item"><a href="#">About</a></div>
        <DropDown title="Services" :items="Services"/>
        <div class="menu-item"><a href="#">Contact</a></div>
    </nav>
</template>
<script>
import DropDown from './DropDown.vue'

export default {
    name:'navbar',
    components:{
        DropDown
    },
    data(){
        return{
            Services:[
                {
                    title:'Web',
                    link:'#'
                },
                {
                    title:'Design',
                    link:'#'
                },
                {
                    title:'Videos',
                    link:'#'
                }
            ]
        }
    }
};
</script>
<style scoped>

nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: #222;
    padding: 15px;
}

nav .menu-item {
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
    background-color: #444;
    border-bottom-color:#ff5858 ;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}

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


</style>