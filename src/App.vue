<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <section class="content-wrapper">
        <h1 class="page-title">Bienvenue sur notre BlindTest musical</h1>
        <p class="page-description">
          Plonge dans l’univers de la musique&nbsp;! Choisis ton style préféré et lance-toi dans un quiz sonore palpitant. Qui saura reconnaître le plus de morceaux&nbsp;?
        </p>

        <ul class="music-categories" role="list">
          <li class="category" role="listitem">
            <button class="category-button" aria-label="Sélectionner la catégorie Rock">Rock</button>
          </li>
          <li class="category" role="listitem">
            <button class="category-button" aria-label="Sélectionner la catégorie Pop">Pop</button>
          </li>
          <li class="category" role="listitem">
            <button class="category-button" aria-label="Sélectionner la catégorie Jazz">Jazz</button>
          </li>
          <li class="category" role="listitem">
            <button class="start-button" aria-label="Démarrer le BlindTest">C'est parti&nbsp;!</button>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
:root,
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  overflow-x: hidden;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  background: linear-gradient(135deg, #e0f2fe, #c7d2fe);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e3a8a;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
  width: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
}

.page-title {
  font-size: 2.7rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px #c7d2fe;
}

.page-description {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  color: #334155;
}

.music-categories {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.category-button,
.start-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-button {
  background-color: #1e3a8a;
  color: #ffffff;
}

.category-button:hover {
  background-color: #3b5bdb;
  transform: scale(1.05);
}

.start-button {
  background-color: #16a34a;
  color: #ffffff;
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
}

.start-button:hover {
  background-color: #22c55e;
  transform: scale(1.05);
}
</style>