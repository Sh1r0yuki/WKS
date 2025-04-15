<<<<<<< HEAD
// Importation du fichier CSS principal
import './assets/main.css'

// Importation de Vue et du composant racine
import { createApp } from 'vue'
import App from './App.vue'

// Création et montage de l'application Vue
createApp(App).mount('#app')
=======
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur

const app = createApp(App);

// Utiliser le routeur
app.use(router);

app.mount('#app');
>>>>>>> e653a7ecb8a1b69a976e521f536520731cb701d8
