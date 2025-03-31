<template>
    <div class="buttons-container">
      <button @click="rejouer" class="btn">Rejouer</button>
      <button @click="retourMenu" class="btn btn-secondary">Retour Menu</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ["rejouer", "retour-menu"],
    methods: {
      rejouer() {
        this.$emit("rejouer"); // Émet un événement pour rejouer
      },
      retourMenu() {
        this.$emit("retour-menu"); // Émet un événement pour retourner au menu
      },
    },
  };
  </script>
  
  <style scoped>
  .buttons-container {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;
  }
  
  .btn {
    background-color: #d9d9d9;
    color: #000;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }
  
  .btn:hover {
    background-color: #bfbfbf;
  }
  
  .btn-secondary {
    background-color: #000;
    color: #fff;
  }
  
  .btn-secondary:hover {
    background-color: #333;
  }
  </style>
  