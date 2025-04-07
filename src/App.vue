<template>
  <div class="layout">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script setup>
  import Header from './components/header.vue'
  import Main from './components/main.vue'
  import Footer from './components/footer.vue'
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
}

.header {
  width: 100%;
  background: #1e3a8a;
  color: white;
  padding: 1rem;
  text-align: center;
}

.main {
  flex: 1;
  width: 100%;
  background: #e0f2fe;
  padding: 2rem;
  text-align: center;
}

.footer {
  width: 100%;
  background: #3b82f6;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>