<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  audioUrl: String,
  resetTrigger: Number
})

const audioRef = ref(null)
const isAudioLoading = ref(false)

const reloadAudio = () => {
  if (audioRef.value && props.audioUrl) {
    isAudioLoading.value = true
    audioRef.value.src = props.audioUrl
    audioRef.value.load()

    audioRef.value.oncanplaythrough = () => {
      isAudioLoading.value = false
      audioRef.value.play().catch(error => {
        console.error("Audio autoplay failed:", error)
      })
    }
  }
}

watch(() => props.resetTrigger, reloadAudio)
onMounted(reloadAudio)
</script>


<template>
  <div>
    <audio ref="audioRef" preload="auto"></audio>
  </div>
</template>

<style>
.audio-container {
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background: red;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 20px;
}
body {
  font-family: 'Poppins', sans-serif;
  background: #121212;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
}

button {
  background: linear-gradient(135deg, #ff8c00, #ff3b3b);
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s, opacity 0.3s;
}

button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* Quiz Container */
.quiz-container {
  max-width: 600px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  font-size: 18px;
  font-weight: 300;
}
</style>