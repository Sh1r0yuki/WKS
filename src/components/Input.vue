<template>
    <div class="input-container">
      <input v-model="reponse" type="text" placeholder="Votre réponse..." />
      <button @click="envoyerReponse">Valider</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Input",
    data() {
      return {
        reponse: "",
      };
    },
    methods: {
      envoyerReponse() {
        if (this.reponse.trim() !== "") {
          this.$emit("reponse-saisie", this.reponse);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
  }
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  