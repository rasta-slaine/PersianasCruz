<script setup>
// IMPORTO OS COMPONENTS 
import {RouterView } from 'vue-router'
import Navigation from './components/Navigation2.vue';



</script>

<template>
  <div id="app">
    <Navigation/>
    <RouterView />

 </div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    padding: 0px;
    margin: 0px;
    
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }




</style>
