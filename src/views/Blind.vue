<template>
  <div class="blind-container">
    <h1>Bienvenue dans le Blind Test !</h1>
    <p>Choisissez un mode :</p>

    <div class="button-group">
      <RouterLink to="/paroles" class="mode-button">🎤 Mode Paroles</RouterLink>
      <RouterLink to="/chansons" class="mode-button">🎵 Mode Chansons</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.blind-container {
  text-align: center;
  padding: 3rem 1rem;
  color: #1e3a8a;
  font-family: 'Segoe UI', sans-serif;
}

.button-group {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.mode-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 12px;
  background-color: #1e3a8a;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.mode-button:hover {
  background-color: #374fcf;
  transform: scale(1.05);
}
</style>
