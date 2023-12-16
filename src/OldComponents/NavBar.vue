<template>

    
<div id="nav-bar">
    <div id="nav-menu">
   <router-link to="/" id="homepage-link">
    <img src="../assets/images/logo.svg" alt="logo" class="logo">
  </router-link>
        <ul class="menu">
            <li>
                Home
            </li>
            <li>
                Sobre nós
            </li>
            <li>
                Persianas
            </li>
            <li>
                Contato
            </li>
        </ul>
    </div>
</div>   

</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 90px;
  width: 100%;
}

#nav-menu{
    display: flex;
    justify-content: space-around;
    height: 87%;
}

#homepage-link{

}
.logo{
    height: 102px;
    width: auto;
    display: flex;
}

.menu {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 20px;
}  

.menu li {
    padding:0px 17px 0px 0px;
    cursor: pointer;
}

</style>