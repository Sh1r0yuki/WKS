import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur

const app = createApp(App);

// Utiliser le routeur
app.use(router);

app.mount('#app');
