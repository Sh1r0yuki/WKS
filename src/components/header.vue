<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">MonSite</h1>
      <nav class="nav">
        <a href="#" class="nav-link">Accueil</a>
        <a href="#" class="nav-link">À propos</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-size: 1.5rem;
  font-weight: 600;
  color: #4f46e5; /* Indigo-600 */
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #374151; /* Gray-700 */
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4f46e5; /* Indigo-600 */
}
</style>