<script setup>
import {RouterView } from 'vue-router'
import NavBar from './components/components/NavBar.vue';
</script>

<template>
  <v-app>
    <NavBar/>
     <v-main>
      <RouterView />
     </v-main>
  </v-app>
</template>

