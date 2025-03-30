<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  audioUrl: String,
  resetTrigger: Number
})

const audioRef = ref(null)
const isAudioLoading = ref(false)
const userInteracted = ref(false)

const reloadAudio = () => {
  if (audioRef.value && props.audioUrl) {
    isAudioLoading.value = true
    audioRef.value.src = props.audioUrl
    audioRef.value.load()
    
    audioRef.value.oncanplaythrough = () => {
      isAudioLoading.value = false
      if (userInteracted.value) {
        audioRef.value.play().catch(error => console.error("Erreur lecture audio :", error))
      }
    }
  }
}

// Assure le lancement de l'audio quand la question
watch(() => props.resetTrigger, reloadAudio)

// Fonction pour activer audio quand nécessaire
const enableAudio = () => {
  userInteracted.value = true
  reloadAudio()
}

onMounted(reloadAudio)
</script>

<template>
  <div>
    <audio ref="audioRef" preload="auto"></audio>
    <button v-if="!userInteracted" @click="enableAudio">🔊 Activer l'audio</button>
  </div>
</template>
