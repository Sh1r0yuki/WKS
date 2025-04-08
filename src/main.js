import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur
import './assets/main.css'

const app = createApp(App);



// Utiliser le routeur
app.use(router);

app.mount('#app');
