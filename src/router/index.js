import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import PersianaRolo from '../views/PersianaRolo.vue'
import PersianaRoloBlackout from '../views/PersianaRoloBlackout.vue'
import PersianaDouploVision from '../views/PersianaDoubloVision.vue'
import PersianaRoloMotorizada from '../views/PersianaRoloMotorizada.vue'


// 
const router = createRouter({

 history:createWebHistory(import.meta.env.BASE_URL),

 routes:[
    {
        path:'/',
        nome:'HomePage',
        component:HomePage
    },
    {
        path:'/persianarolo',
        nome:'PersianaRolo',
        component:PersianaRolo
    },
    {
        path:'/persianaroloblackout',
        nome:'PersianaRoloBlackOut',
        component:PersianaRoloBlackout
    },
    {
        path:'/persianarolodoublovision',
        nome:'PersianaDoubloVision',
        component:PersianaDouploVision
    },
    {
        path:'/persianarolomotorizada',
        nome:'PersianaRoloMotorizada',
        component:PersianaRoloMotorizada
    }
 ]

})

// 
export default router

    