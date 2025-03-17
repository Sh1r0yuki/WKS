<template>
  <div>
    <h1>🎵 Blindtest Quiz</h1>
    
    <!-- Timer -->
    <Timer :duration="10" @time-up="handleTimeUp" />

    <!-- Lecteur audio avec lecture automatique -->
    <AudioPlayer src="extrait.mp3" @audio-ended="handleAudioEnd" />

    <!-- Réponse de l'utilisateur -->
    <input v-model="userAnswer" :disabled="timeUp" placeholder="Votre réponse..." />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Timer from './components/Timer.vue';
import AudioPlayer from './components/Autoplay.vue';

const userAnswer = ref('');
const timeUp = ref(false);

const handleTimeUp = () => {
  timeUp.value = true;
  alert("⏳ Temps écoulé ! Vous ne pouvez plus répondre.");
};

const handleAudioEnd = () => {
  alert("🎶 L'extrait audio est terminé !");
};
</script>
