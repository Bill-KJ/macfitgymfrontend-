import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/components/LandingPage.vue'
import Login from '@/components/components/Login.vue'
import SignUp from '@/components/components/SignUp.vue'
import HomePage from '@/components/components/HomePage.vue'
import GymLocations from '@/components/components/GymLocations.vue'
import Bundles from '@/components/components/Bundles.vue'
import Admin from '@/components/components/Admin.vue'
import Profile from '@/components/components/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    name:'Landingpage',
    component: LandingPage,
   },
   {
    path:'/Login',
    name:'Login',
    component: Login,
   },
   {
    path:'/Signup',
    name:'Signup',
    component: SignUp,
   },
   {
    path:'/Homepage',
    name:'Homepage',
    component: HomePage,
   },
   {
    path:'/Gymlocation',
    name:'Gymlocation',
    component: GymLocations,
   },
   {
    path:'/Bundles',
    name:'Bundles',
    component: Bundles,
   },
   {
    path:'/Admin',
    name:'Admin',
    component: Admin,
   },
   {
    path:'/Profile',
    name:'Profle',
    component: Profile,
   },
  ],
})

export default router
