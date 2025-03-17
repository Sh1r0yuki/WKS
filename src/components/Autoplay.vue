<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({
  category: String, // Catégorie pour récupérer le quiz (si nécessaire)
})

const audioRef = ref(null)
const isMuted = ref(false)
const isPlaying = ref(false)
const audioSrc = ref('') // Variable pour stocker l'URL de l'audio

// Fonction pour récupérer l'URL de l'extrait audio via l'API
const fetchAudioUrl = async () => {
  try {
    const response = await axios.get('https://quizz-musical-backend.airdev.be/api/categories/2', {
      params: { category: props.category } // On récupère les questions pour cette catégorie
    })
    console.log('Réponse de l\'API:', response.data) // Afficher la réponse pour vérifier la structure

    // Vérification de la structure de response.data
    if (response.data && response.data.questions && Array.isArray(response.data.questions)) {
      // Chercher une question avec un audio
      const questionWithAudio = response.data.questions.find(question => question.content && question.content.sound_url)

      if (questionWithAudio) {
        audioSrc.value = questionWithAudio.content.sound_url // Mettre l'URL de l'audio
        console.log("URL audio trouvée :", audioSrc.value)
      } else {
        console.error("Aucun audio trouvé dans la réponse API.")
      }
    } else {
      console.error('La structure de la réponse de l\'API est incorrecte ou les questions sont manquantes.', response.data)
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'URL de l'audio:", error)
  }
}

// Fonction pour démarrer la musique après un clic utilisateur
const startAudio = () => {
  if (audioRef.value) {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(err => {
      console.error("Erreur lors du démarrage de l'audio:", err)
    })
  }
}

// Fonction pour muter ou réactiver le son
const toggleMute = () => {
  isMuted.value = !isMuted.value
  if (audioRef.value) {
    audioRef.value.muted = isMuted.value
  }
}

// On récupère l'URL de l'audio dès le montage du composant
onMounted(() => {
  fetchAudioUrl()
})
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- Lien audio récupéré depuis l'API -->
    <audio ref="audioRef" :src="audioSrc" :muted="isMuted" />

    <!-- Bouton pour démarrer la musique -->
    <button v-if="!isPlaying" @click="startAudio"
      class="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">
      ▶️ Lancer la musique
    </button>

    <!-- Bouton pour couper ou activer le son -->
    <button v-if="isPlaying" @click="toggleMute"
      class="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded">
      {{ isMuted ? '🔇 Activer le son' : '🔊 Couper le son' }}
    </button>
  </div>
</template>
