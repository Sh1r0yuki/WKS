<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2fe, #c7d2fe);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e3a8a;
}

.main-content {
  flex: 1;
}
</style>
