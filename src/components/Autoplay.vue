<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  category: String
})

const audioRef = ref(null)
const isMuted = ref(false)
const audioSrc = ref('')

// Récupérer l'URL de l'audio
const fetchAudioUrl = async () => {
  try {
    const { data } = await axios.get('https://quizz-musical-backend.airdev.be/api/categories/2')
    const questionWithAudio = data.questions?.find(q => q.content?.sound_url)
    audioSrc.value = questionWithAudio?.content.sound_url || ''
  } catch (error) {
    console.error("Erreur récupération audio :", error)
  }
}

const isPlaying = computed(() => audioRef.value && !audioRef.value.paused)

const startAudio = () => {
  audioRef.value?.play().catch(err => console.error("Erreur lecture :", err))
}

const toggleMute = () => {
  isMuted.value = !isMuted.value
  if (audioRef.value) {
    audioRef.value.muted = isMuted.value
  }
}

onMounted(fetchAudioUrl)
</script>

<template>
  <div class="flex flex-col items-center">
    <audio ref="audioRef" :src="audioSrc" />
  </div>
</template>
