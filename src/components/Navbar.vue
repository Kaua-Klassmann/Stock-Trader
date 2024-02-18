<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['founds'])
</script>

<template>
  <nav class="navbar navbar-expand text-bg-dark">
    <RouterLink to="/StockTrader" class="nav-link ms-4 ms-md-5">Stock Trader</RouterLink>
    <RouterLink to="/Stock" class="nav-link ms-4">Stock</RouterLink>
    <p class="ms-auto me-3 my-4 me-md-5">Founds: ${{ props.founds }}</p>
  </nav>
</template>

<style scoped>
nav {
  height: 6vh;
}
</style>
