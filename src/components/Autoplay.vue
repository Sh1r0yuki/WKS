<script setup>
import { ref, onMounted, onUnmounted, defineEmits, defineProps } from 'vue';

const props = defineProps({
  src: { type: String, required: true } // URL de l'extrait audio
});

const emit = defineEmits(['audio-ended']);

const audio = ref(null);
const isPlaying = ref(false);

const playAudio = () => {
  if (audio.value) {
    audio.value.play();
    isPlaying.value = true;
  }
};

const pauseAudio = () => {
  if (audio.value) {
    audio.value.pause();
    isPlaying.value = false;
  }
};

const onAudioEnded = () => {
  isPlaying.value = false;
  emit('audio-ended'); // Émettre l'événement quand l'audio est terminé
};

onMounted(() => {
  playAudio(); // Lecture automatique au montage
});

onUnmounted(() => {
  pauseAudio(); // Nettoyer à la destruction
});
</script>

<template>
  <div class="audio-player">
    <audio ref="audio" :src="src" @ended="onAudioEnded"></audio>
    
    <div class="controls">
      <button @click="playAudio" v-if="!isPlaying" class="btn play">
        ▶️ Écouter
      </button>
      <button @click="pauseAudio" v-if="isPlaying" class="btn pause">
        ⏸️ Pause
      </button>
    </div>
  </div>
</template>

<style scoped>
.audio-player {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.controls {
  display: flex;
  gap: 10px;
}

.btn {
  background-color: #4A4A4A; 
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  background-color: #ff4757; 
  transform: scale(1.05);
}

.play {
  background-color: #2ecc71; 
}

.play:hover {
  background-color: #27ae60;
}

.pause {
  background-color: #e74c3c; /* Rouge pour pause */
}

.pause:hover {
  background-color: #c0392b;
}
</style>
