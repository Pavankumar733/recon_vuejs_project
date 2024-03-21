import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '././style/style.scss'
// import Vue from 'vue';
import './environment/environment.env'; // Import the env.js file
 // Import toast styles
// Register toast plugin globally
const app = createApp(App);

  
app.use(router)
app.mount('#app')

