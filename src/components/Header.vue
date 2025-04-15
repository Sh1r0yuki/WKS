<template>
  <header class="header">
    <nav class="nav">
      <h1 class="title">BlindTest</h1>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  background-color: #1e3a8a;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: bold;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #a5b4fc;
}

h1 {
  text-align: center;
}
</style>
