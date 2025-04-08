<template>
  <main class="main-content">
    <section>
      <h2>Bienvenue sur notre site de blind test&nbsp;!</h2>
      <p>Testez vos connaissances musicales dans une ambiance ludique et conviviale.</p>
      <div class="button-group">
        <button @click="goToParoles">Blind Test Paroles</button>
        <button @click="goToBlind">Blind Test Musical</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToParoles() {
      this.$router.push('/Paroles');
    },
    goToBlind() {
      this.$router.push('/Blind');
    }
  }
};
</script>

<style scoped>
.main-content {
  background-color: #121212;
  color: #e6e6e6;
  padding: 2rem;
  min-height: 80vh;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #1db954;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #17a34a;
}
</style>