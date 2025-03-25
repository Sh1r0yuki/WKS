<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">MonSite</h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #1e40af; /* Bleu plus foncé */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.75rem;
  font-weight: 700;
  color: #e0f2fe; /* Bleu ciel très pâle */
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #bfdbfe; /* Bleu clair doux */
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffffff; /* Blanc pur au survol */
}
</style>