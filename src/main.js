import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur

<<<<<<< HEAD
import { createApp } from 'vue'
import App from './views/Quiz.vue'
=======
const app = createApp(App);
>>>>>>> Cedric

// Utiliser le routeur
app.use(router);

app.mount('#app');
