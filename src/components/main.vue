<template>
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow p-8 bg-gray-100 text-gray-800">
        <h1 class="text-4xl font-bold mb-4">Bienvenue sur notre site !</h1>
        <p class="text-lg">
          Ceci est le contenu principal de la page. Vous pouvez y ajouter vos sections, vos composants et vos données dynamiques.
        </p>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from './header.vue'
  import Footer from './footer.vue'
  </script>